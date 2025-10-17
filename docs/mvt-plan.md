
-----

# Quick-Launch MVT Plan: Milestones

## Milestone 1: Core Foundation and Secure Authentication

1.  **Database Schema (Final MVP) Setup:**
      * Implement the essential tables in Aiven PostgreSQL.
      * **`users` Table Definition (Marketing Data Included):**

| Field Name | PostgreSQL Type | Nullable | Rationale |
| :--- | :--- | :--- | :--- |
| **uuid** | **UUID** | NOT NULL | Primary key. |
| **email** | **VARCHAR(100)** | NOT NULL | Unique identifier. |
| **access\_status** | **VARCHAR(15)** | NOT NULL | 'TRIALING', 'EXPIRED', 'SUBSCRIBED'. |
| **trial\_expiry\_date** | **TIMESTAMPZ** | NOT NULL | Date when trial access ends. |
| **role\_selection** | **VARCHAR(50)** | NOT NULL | Stores structured role choice (e.g., 'Analyst'). |
| **role\_bespoke** | **VARCHAR(150)** | NULLABLE | Stores custom role text (if selected 'OTHER'). |
| **company\_type\_selection** | **VARCHAR(50)** | NOT NULL | Stores structured company type choice. |
| **company\_type\_bespoke** | **VARCHAR(150)** | NULLABLE | Stores custom company type text (if selected 'OTHER'). |
| **interest\_selection** | **VARCHAR(50)** | NOT NULL | Stores structured interest choice. |
| **interest\_bespoke** | **VARCHAR(150)** | NULLABLE | Stores custom interest text (if selected 'OTHER'). |

```
* **`otp_transactions` Table:** **email**, **otp_code**, **expires_at**.
```

2.  **OTP Generate Route (Vercel API):** Refactor to use PostgreSQL for OTP storage. **INSERT/UPDATE** the code and expiry into the **otp\_transactions** table. Send the email.
3.  **OTP Verify Route (Vercel API):**
      * Check OTP and delete the record upon success.
      * **Crucial Logic Split:** If User Found (Existing Email), proceed to set the session token. If User Not Found (New Email), redirect the user to the **Data Capture Screen** (Milestone 2.1).

-----

## Milestone 2: Single Trial Access Gating and Marketing Data Capture

1.  **Data Capture Screen (Client-Side PWA):** The PWA client displays a dedicated screen with the three required input groups (**Role**, **Company Type**, **Interest**).
2.  **New API Route: Provision Trial (Vercel):** This route handles the final provisioning and data write:
      * **CREATE User & Grant Trial:** **CREATE** a new user record in the **users** table, writing all six data points received from the client into the new columns.
      * Set **access\_status** = 'TRIALING' and **trial\_expiry\_date** = 'NOW + 10 Days'.
      * **Final Session Token:** Generate and set the final **HTTP-Only Session Cookie**.
3.  **Access Gating (The "Single Check"):** The Middleware/Server Component check verifies login, **access\_status**='TRIALING', and **trial\_expiry\_date** is in the future.
4.  **Content Tables (MVP):** Create the **modules** table and import the content for the fixed set of **9 Trial Modules**.

-----

## Milestone 3: Background Automation (QStash) and PWA Shell

1.  **QStash Expiry Endpoint (Vercel):** The daily job updates users where **access\_status** = 'TRIALING' and **trial\_expiry\_date** is in the past, setting their **access\_status** = 'EXPIRED'.
2.  **QStash Configuration:** Configure the external QStash scheduler.
3.  **PWA Core:** Implement the **Service Worker** for offline caching and the client-side check of **trial\_expiry\_date**.

-----

## Milestone 4: Final Launch Readiness

1.  **Trial Expired Page:** Finalize the static page for expired users.
2.  **Monitoring Setup:** Integrate Vercel logging and analytics.
3.  **Final Deployment:** Deploy the completed MVT.