
***

# Complete Design and Specification Document: Tiered Access Freemium PWA

## 1. Core System Architecture and Objectives

The system is a Mobile-First, Offline-First Progressive Web App (PWA) running on a Vercel/Next.js backend with an Aiven PostgreSQL database. **Paddle** manages all subscription billing and lifecycle events.

| Feature | Objective | Technology Focus |
| :--- | :--- | :--- |
| **Billing Integration** | Manage subscriptions and payment lifecycle securely. | **Paddle Webhooks** |
| **Tiered Access** | Implement **Gold, Silver, and Bronze** plans with different, hierarchical module supersets. | PostgreSQL (`subscription_plans`, `plan_modules`) |
| **Mobile & Offline** | Deliver a robust, fast user experience regardless of network status. | PWA (Service Workers, IndexedDB) |
| **Scalable Auth** | Ensure authentication reliability across all Vercel instances. | Centralized `otp_transactions` table |

***

## 2. Authentication, Onboarding, and Billing Flow

### A. OTP Handling (Centralized Store)

OTP storage uses a dedicated, persistent table in **Aiven PostgreSQL** (`otp_transactions`), ensuring reliability across all Vercel serverless instances.

| Action | Store/Mechanism |
| :--- | :--- |
| **Storage** | `otp_transactions` table (PostgreSQL). |
| **Verification** | Atomic PostgreSQL query (`DELETE...RETURNING`) for immediate verification and single-use enforcement. |

### B. Access Status and Billing Synchronization 🔄

The user's definitive access status in the app is controlled by the **Aiven PostgreSQL** `users` table, which is updated by **Paddle Webhooks**.

| User Status | Rule | Content Access | Mechanism for Update |
| :--- | :--- | :--- | :--- |
| **`TRIALING`** | Active until `trial_expiry_date` is passed. | Access to **9 cohort-specific modules**. | Vercel API during onboarding. |
| **`SUBSCRIBED`** | User has a valid **`current\_plan\_id`**. | Access to module superset defined by their plan. | **Paddle Webhook** (`subscription.activated`). |
| **`EXPIRED`** | Trial/Subscription has ended. | No access. | **Paddle Webhook** (`subscription.canceled` / `transaction.failed`) or `trial_expiry_date` check. |

### C. Paddle Webhook Integration

A **dedicated, secure Vercel API endpoint** (`/api/webhooks/paddle`) must be implemented to receive events from Paddle.

1.  **Verification:** The endpoint must **verify the webhook signature** on every request to ensure authenticity.
2.  **Processing:** Events like `subscription.activated` trigger a database update to set the user's $\mathbf{access\_status}$ to `'SUBSCRIBED'` and their $\mathbf{current\_plan\_id}$ to the purchased tier (e.g., 'GOLD').
3.  **Failure Handling:** Webhooks for failed transactions or cancellations (`subscription.past_due`, `subscription.canceled`) manage the transition to a grace period or `'EXPIRED'` status.

***

## 3. Data Model Specification (Aiven PostgreSQL)

### A. Subscription and Gating Tables

| Table | Field | Purpose |
| :--- | :--- | :--- |
| **`subscription_plans`** | **`plan\_id`** (PK), **`module\_limit`**, `priority_rank` | Defines the tiers (Gold/Silver/Bronze) and their maximum profile selection size. |
| **`plan_modules`** | **`plan\_id`** (FK), **`module\_id`** (FK) | Links modules to plans, explicitly defining the hierarchical content superset for each tier. |

### B. `users` Table (User Identity and Metrics)

| Field | Purpose | Type |
| :--- | :--- | :--- |
| `uuid` | Primary Key. | `UUID` |
| `access_status`, `trial_expiry_date` | Core access control. | `VARCHAR/TIMESTAMPTZ` |
| **`current\_plan\_id`** | **Critical:** Tracks the user's active plan tier (updated via Paddle webhooks). | `VARCHAR(20)` |
| `overall_score`, `overall_scenarios_engaged` | Cumulative performance for dashboard display. | `INTEGER` |

### C. Tracking and Content Tables

| Table | Purpose | Key Metrics Stored |
| :--- | :--- | :--- |
| **`user_modules`** | Links users to modules, stores per-module progress. | $\mathbf{cumulative\_score}$, $\mathbf{scenarios\_engaged}$. |
| **`scenarios`** | Content item details. | $\mathbf{interaction\_count}$, $\mathbf{last\_interacted\_at}$ (Used for retirement). |
| **`otp_transactions`** | Centralized, temporary store for OTP verification. | `email`, `otp_code`, `expires_at`. |

***

## 4. Content and Access Logic

### A. Tiered Access and Profile Selection

Access is based on the $\mathbf{current\_plan\_id}$ which defines the allowable module superset.

1.  **Superset Definition:** The `plan_modules` table defines the full set of content available to a user's plan.
2.  **Profile Selection:** The user selects a subset of modules (up to the $\mathbf{subscription\_plans.module\_limit}$) to focus on, which populates their $\mathbf{user\_modules}$ profile.
3.  **Module Interaction:** A user can only interact with modules present in **both** their $\mathbf{user\_modules}$ profile and their plan's content **Superset**.

### B. Usage-Based Content Retirement

A **Vercel Cron Job** runs monthly to retire underperforming scenarios based on age and low $\mathbf{interaction\_count}$.

***

## 5. Offline-First PWA Strategy

The PWA front-end is designed for network resilience using browser-native technologies.

| Component | Functionality |
| :--- | :--- |
| **Service Worker** | **Network Proxy:** Implements a **Cache-First** strategy for all content reads and manages the background synchronization process. |
| **IndexedDB** | **Local Store:** Stores the user's module content, user state (including `access_status` and `current_plan_id`), and maintains the **Sync Queue** of all offline activity data (scores, time spent). |
| **Synchronization** | Upon network recovery, the Service Worker sends batched activity data from the Sync Queue to Vercel. Vercel performs the final, consistent updates to the $\mathbf{user\_modules}$ and $\mathbf{users}$ aggregate fields in PostgreSQL. |  |