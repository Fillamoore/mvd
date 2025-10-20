CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  -- Authentication
  email TEXT UNIQUE NOT NULL,
  otp TEXT,
  otp_expires TIMESTAMP,

  -- Trial logic
  trial_start TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  trial_end TIMESTAMP GENERATED ALWAYS AS (trial_start + INTERVAL '10 days') STORED,
  status TEXT CHECK (status IN ('trial', 'active', 'expired')) DEFAULT 'trial',

  -- Persona metadata
  display_name TEXT,
  role_description TEXT,
  company_type TEXT,
  country TEXT,
  knowhow_goal TEXT,
  real_or_not BOOLEAN DEFAULT TRUE,

  -- Subscription (Paddle integration)
  paddle_user_id TEXT,
  subscription_status TEXT CHECK (
    subscription_status IN ('trial', 'active', 'cancelled', 'past_due', 'expired')
  ) DEFAULT 'trial',
  subscription_plan TEXT,
  subscription_start TIMESTAMP,
  subscription_end TIMESTAMP,
  last_payment_date TIMESTAMP,
  next_payment_due TIMESTAMP,
  is_paid BOOLEAN DEFAULT FALSE,

  -- Timestamps
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
