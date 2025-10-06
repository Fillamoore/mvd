
## Final MVP Technical Architecture Summary

The architecture is built on a robust, three-layer stack designed for maximum resilience, low friction for the senior team, and efficient data analysis for the facilitator.

### 1. The Data Layer (Aiven Database)

Your **Aiven-hosted database** (e.g., PostgreSQL) serves as the secure, single source of truth.

| Table | Purpose | Key Fields |
| :--- | :--- | :--- |
| **`scenario`** | Stores the full, immutable text of each scenario package. | `scenario_id` (PK), `package_json` (stores all text/options/rationales). |
| **`user`** | Stores user roles and credentials. | `user_id` (PK), `email`, `role` (`signature_team` or `facilitator`). |
| **`response`** | Stores every vote submitted by the Signature Team. | `user_id` (FK), `scenario_id` (FK), `voted_category` (**Include/Exclude/Refine**), `ranking_order`. |

### 2. The Service Layer (API Gateway)

The API Gateway is a crucial security and logic layer separating the clients from the database.

| Endpoint Group | Purpose | Key Endpoints |
| :--- | :--- | :--- |
| **Authentication** | Handles secure, passwordless access. | `POST /api/auth/magic-link` (Initiates email) |
| **Access Control** | Manages long-term access for the 2-month phase. | `POST /api/auth/verify-token` (Exchanges OTT for JWT) |
| **Token Refresh** | *New:* Extends JWT life during the 90-day window. | `POST /api/auth/refresh-token` |
| **PWA Sync** | Handles the low-volume data ingress from the PWA. | `POST /api/responses/batch` (Accepts queued votes) |
| **DWA Analysis** | Provides pre-aggregated data for the facilitator. | `GET /api/facilitator/analysis` (Returns the **Heat Map Score** list) |

### 3. The Client Layer (Dual Application Strategy)

The architecture supports two distinct, role-specific applications:

#### A. Signature Team App (Progressive Web App - PWA)

* **Primary Focus:** Offline Resilience and Low Friction.
* **Offline Strategy:** Uses **Service Worker** to cache app assets (HTML, CSS, JS) for instant loading, and uses **IndexedDB** to store the 50+ Scenario Packages and all *pending votes*.
* **Sync Logic (Simplified):** Due to the low transaction volume, sync is triggered on app launch/focus. Votes are instantly stored locally and sent to the API in batches when network connectivity is available.
* **Token Expiry:** JWT Access Token is set to **90 days** to cover the 2-month active phase and minimize login friction.

#### B. Facilitator App (Desktop Web App - DWA)

* **Primary Focus:** Data Aggregation and Visualization (The Heat Map).
* **Offline Requirement:** None. Requires a continuous, secure network connection.
* **Data Access:** Uses the dedicated, highly-secured DWA endpoints to pull the calculated **Refine Priority List** and **Variance Visualizations**.
* **Security:** Requires strong MFA/access control on the DWA application itself, as it handles sensitive data about internal disagreements.