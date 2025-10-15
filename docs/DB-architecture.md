# OTP Authentication & Module System Specification

## 📋 System Overview
**B2B SaaS PWA** with OTP authentication, multi-tier module system, and simplified offline access.

---

## 🔐 AUTHENTICATION SYSTEM

### OTP Flow
- **Email Validation**: Hardcoded allowlist → PostgreSQL users table
- **OTP Generation**: 6-digit codes, 10-minute expiry
- **Session Management**: JWT tokens, 24-hour sessions
- **Platform Support**: 
  - Desktop: Browser-based OTP
  - Mobile: PWA installation → OTP within app

### API Endpoints
```typescript
POST /api/auth/otp/request
POST /api/auth/otp/verify
```

### Database Schema
```sql
-- OTP Codes
CREATE TABLE otp_codes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    email VARCHAR(255) NOT NULL,
    code CHAR(6) NOT NULL,
    expires_at TIMESTAMPTZ NOT NULL,
    used BOOLEAN DEFAULT FALSE,
    attempts INTEGER DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 👥 USER MANAGEMENT

### User Types & Access
- **User Types**: `admin`, `enterprise_user`, `partner`, `employee`
- **Access Control**: Email-based allowlist → User table validation
- **Scale Target**: 100,000 users across 200-300 clients

### Database Schema
```sql
-- Users
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    user_type VARCHAR(50) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## 📚 MODULE SYSTEM

### Module Categories (App-Controlled Order)
1. **Foundation** (Basics, locked position)
2. **Intermediate** (Advanced techniques, locked position)  
3. **Advanced** (Expert tools, locked position)
4. **Market Perspective** (Insights & analysis)
5. **Secret Sauce** (Proprietary methodologies)

### Module Management Constraints
- **Module Selection/Reordering**: Desktop + online only
- **Mobile PWA**: Read-only access to pre-configured modules
- **Rationale**: Enterprise users access both platforms daily
- **Benefit**: Eliminates complex sync/conflict resolution

### Module Structure
- **49 modules per user** maximum
- **Hundreds of modules** in superset
- **Unique profiles** per user
- **Offline consumption** on mobile

### Database Schema
```sql
-- Categories (App-controlled order)
CREATE TABLE module_categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(50) NOT NULL UNIQUE,
    display_name VARCHAR(100),
    app_sort_order INTEGER UNIQUE NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Modules (Default app order, user customizable)
CREATE TABLE modules (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id UUID REFERENCES module_categories(id),
    name VARCHAR(100) NOT NULL UNIQUE,
    display_name VARCHAR(100),
    app_sort_order INTEGER,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- User Module Order (User customizations - desktop/online only)
CREATE TABLE user_module_order (
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    module_id UUID REFERENCES modules(id) ON DELETE CASCADE,
    user_sort_order INTEGER NOT NULL,
    PRIMARY KEY (user_id, module_id)
);

-- User Module Assignments
CREATE TABLE user_modules (
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    module_id UUID REFERENCES modules(id) ON DELETE CASCADE,
    config JSONB DEFAULT '{}',
    progress INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    granted_at TIMESTAMPTZ DEFAULT NOW(),
    PRIMARY KEY (user_id, module_id)
);
```

---

## 📧 EMAIL SYSTEM

### Production Setup
- **Service**: Resend
- **From Address**: `auth@newgamenewrules.com` 
- **Domain**: Verified `newgamenewrules.com`
- **Free Tier**: 3,000 emails/month

### Environment
```bash
# .env.local
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
DATABASE_URL=your_aiven_postgres_url_here
```

---

## 📱 MOBILE PWA

### Simplified Offline Architecture
- **Service Worker**: Cache modules for offline access
- **Storage**: IndexedDB for module content and user progress
- **Sync**: One-way sync (server → client) for module updates
- **Constraints**: Module management requires desktop + online

### Installation Flow
1. Safari → App URL → "Save to Home Screen"
2. PWA launches from home screen
3. OTP authentication within PWA
4. Read-only module access with offline capability

### Mobile User Experience
```
Mobile PWA (Consumption Only)
├── View current module selection (read-only)
├── Access module content offline
├── Track progress and completion
├── Toggle simple settings within modules
└── No module adding/removing/reordering
```

---

## 🚀 DEPLOYMENT STATUS

### ✅ COMPLETED
- [x] OTP authentication backend
- [x] Email integration (Resend)
- [x] Domain verification
- [x] Basic frontend testing
- [x] Session management
- [x] Production email delivery

### 🔄 NEXT PRIORITIES
1. **PostgreSQL integration** (replace global storage)
2. **Users table** migration from hardcoded allowlist  
3. **Module system** implementation
4. **Production frontend** (replace test pages)
5. **Mobile PWA** offline content caching

---

## 🎯 TECHNICAL DECISIONS

### Storage Strategy
- **OTP Codes**: PostgreSQL with automatic cleanup
- **User Data**: PostgreSQL with proper relations
- **Offline Cache**: IndexedDB for module content (read-only)

### Order Management
- **Categories**: Fixed app order (`app_sort_order`)
- **Modules**: User-customizable on desktop only (`user_sort_order` falls back to `app_sort_order`)

### Platform Constraints
- **Module Management**: Desktop + online required
- **Mobile Access**: Read-only consumption of pre-configured modules
- **Sync**: Simplified one-way sync (no conflict resolution needed)

### Scale Considerations
- **Concurrent OTPs**: 200+ during enterprise rollout
- **Module Relationships**: Many-to-many for flexibility
- **Database**: Aiven PostgreSQL for enterprise reliability

---

## 💡 KEY ARCHITECTURAL PATTERNS

1. **Separation of Concerns**: OTP, analytics, and user data in separate tables
2. **Many-to-Many Relationships**: Users ↔ Modules with junction tables  
3. **Cascade Deletes**: Automatic cleanup with `ON DELETE CASCADE`
4. **Hybrid Ordering**: System defaults + user customization (desktop only)
5. **Simplified Offline**: Read-only mobile access eliminates sync complexity
6. **Platform-Specific Features**: Leverage desktop for complex management tasks

---

## 🎯 BUSINESS JUSTIFICATION

### Module Management Constraints
- **Enterprise Reality**: Users work on both desktop and mobile daily
- **Strategic Decisions**: Module selection benefits from large screen + thoughtful consideration
- **Technical Simplicity**: Eliminates complex conflict resolution and sync logic
- **User Experience**: Desktop provides superior interface for managing 49 modules

### Scale Readiness
- **User Growth**: Supports 100,000 users across multiple clients
- **Enterprise Rollouts**: Handles 200+ concurrent OTP requests
- **Module Flexibility**: Accommodates unique 49-module profiles per user
- **Offline Access**: Mobile PWA provides consumption-focused experience

**This specification provides a robust foundation for enterprise-scale B2B SaaS with practical constraints that match real-world user behavior.**