
***

## PoC Specification: `gemini-api-poc` (qikr Content Pipeline for Admin Function)

### 1. Primary Goal

The core objective is to build and validate a secure, efficient, and complete administrative content pipeline that generates **module names** and allows for **straightforward iteration** and requiring an separate **Seed Tool** for initial AI-prompt setup.

| Success Criteria |
| :--- |
| **Initialization & Prompt Loading:** The **Seed Tool** is executed once to set the initial prompt in Aiven DB. The main Generator App must then read and pre-fill the form with this seeded prompt upon load. |
| **Full Transaction Validation:** A single user submission must trigger the AI call, successful structured parsing, a **two-phase write to Aiven DB** (log and modules), and an immediate, efficient UI update. |
| **Clean Iteration:** The **Reset button** must trigger a Server Action to **clear the Aiven `modules` table** entirely. |
| **Operational Efficiency:** The UI update must occur **without a full page refresh**. |

***

### 2. Required Technologies & Setup

| Technology | Role | Details |
| :--- | :--- | :--- |
| **Framework** | Next.js 14+ | Must use the **App Router**, **Server Actions**, and **Route Handlers** (for the Seed Tool). |
| **AI Service** | Google Gemini API (`@google/genai`) | Content generator. Prompt must command request module name generation. |
| **Database** | Aiven PostgreSQL (`pg`) | **Mandatory host** for `gemini_log` and `modules` tables. |
| **Environment** | `.env.local` | **All six credentials** (`GEMINI_API_KEY`, `AIVEN_DB_HOST`, `AIVEN_DB_PORT`, `AIVEN_DB_USER`, `AIVEN_DB_PASSWORD`, `AIVEN_DB_NAME`) are mandatory. |

***

### 3. Application Components and Files (Core Set)

| File/Component | Type | Responsibility |
| :--- | :--- | :--- |
| `app/page.tsx` | **Server Component** | **Calls `getInitialPrompt()`** to read the latest prompt from Aiven. Fetches and displays the generated modules. Passes the prompt text as a prop to the Client Component. |
| `app/api/seed/route.ts` | **Route Handler** | The external **Seed Tool entry point**. Executes the `seedInitialPrompt()` logic via a protected `POST` request. |
| `app/lib/actions.ts` | **Server Action Module** | Contains all secure server logic: **`seedInitialPrompt()`**, **`getInitialPrompt()`**, **`getLatestModules()`**, **`generateAndPersistContent(formData)`**, and **`clearModulesTable()`**. |
| `app/ui/content-generator.tsx` | **Client Component** | Accepts the initial prompt text as a prop (from the Server Component). Pre-fills the input form. Contains the **generation** form and the **reset** button. |

***

### 4. Technical Specifications (Action Details)

#### 4.1. Database Schemas (Aiven) 

The application requires two tables:

| Table | Column | Data Type | Constraint | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| **`gemini_log`** | `id` | `SERIAL` | `PRIMARY KEY` | Log identifier for the transaction. |
| (Log) | **`prompt_text`** | `TEXT` | `NOT NULL` | The user's input (or seeded text). |
| | `response_text` | `TEXT` | `NOT NULL` | The **Gemini raw, unparsed JSON response**. |
| | `created_at` | `TIMESTAMP` | `DEFAULT CURRENT_TIMESTAMP` | Time of creation. |
| **`modules`** | `module_id` | `SERIAL` | `PRIMARY KEY` | Unique ID for the structured content row. |
| (Content) | `log_id` | `INTEGER` | `FOREIGN KEY` | Links back to the source transaction in `gemini_log`. |
| | **`title`** | `VARCHAR(255)` | `NOT NULL` | **The generated module name.** |
| | **`content_body`** | `TEXT` | `NOT NULL` | Placeholder/empty string for this PoC. |

#### 4.2. Seeding and Initial Read Logic

| Function | Type | Logic Summary |
| :--- | :--- | :--- |
| **`seedInitialPrompt()`** | Server Action | Checks if `gemini_log` is empty. If so, inserts a single default contextual prompt into `gemini_log`. If not empty, overwrites.|
| **`app/api/seed/route.ts`** | Route Handler | Responds to a `POST` request (the **Seed Tool** trigger). Calls **`seedInitialPrompt()`** to initialize the database with a default prompt. |
| **`getInitialPrompt()`** | Server Action | **Called by `app/page.tsx`**. Returns the `prompt_text` from the latest entry in `gemini_log`. Returns a clear fallback message/empty string if the database is empty (since seeding is external). |

#### 4.3. The **`generateAndPersistContent`** Server Action (Core Mutator)

1.  **Input:** Accepts `formData: FormData` containing the user's prompt.
2.  **AI Call & Parsing:** Calls Gemini and parses the output for module names.
3.  **DB Write (Two-Phase):** Writes the transaction log to **`gemini_log`**, then writes the **parsed rows** to the **`modules`** table.
4.  **Final Step:** Calls `revalidatePath('/')`.

#### 4.4. The **`clearModulesTable`** Server Action (Reset Function)

1.  **Logic:** Executes a `DELETE FROM modules;` SQL command on the Aiven DB.
2.  **Revalidation:** Must call `revalidatePath('/')` after deletion.

#### 4.5. UI/Client Component Logic (`content-generator.tsx`)

* **Initialization:** Accepts `initialPromptText` as a prop and uses it to pre-fill the input text area, allowing the admin to start from a contextual base.
* **Iteration Control:** The dedicated **"Reset button"** must trigger the asynchronous **`clearModulesTable()`** Server Action.

***

### 5. Expected End-to-End Workflow & Iteration

1.  **Initial Setup (External Seed):** The admin manually triggers the `POST` request to `/api/seed`. A record is inserted into `gemini_log`.
2.  **Generator App Load:** `app/page.tsx` calls `getInitialPrompt()` and reads the seeded prompt. The Client Component pre-fills the input field.
3.  User submits the pre-filled or modified prompt.
4.  Server Action executes the full pipeline $\rightarrow$ **new module rows are written to Aiven `modules`**.
5.  Next.js re-renders and displays the **new module names** read from Aiven.
6.  **Iteration Step:** User clicks the **Reset button**.
7.  Client calls **`clearModulesTable()` Server Action**.
8.  Server Action deletes rows from `modules` and calls `revalidatePath('/')`.
9.  Next.js re-renders. The modules list is now empty, and the input field retains the latest prompt (read from `gemini_log`), ready for the next iteration.