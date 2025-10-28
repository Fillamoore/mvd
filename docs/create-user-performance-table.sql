CREATE TABLE user_performance (
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  module_id INTEGER NOT NULL CHECK (module_id BETWEEN 1 AND 49),
  scenarios_completed INTEGER DEFAULT 0,
  average_score DECIMAL(5,2) DEFAULT 0.00,
  last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  -- Composite primary key using the natural keys
  PRIMARY KEY (user_id, module_id)
);
