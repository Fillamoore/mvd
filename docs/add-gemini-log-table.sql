CREATE TABLE public.gemini_log (
    id SERIAL PRIMARY KEY,
    prompt_text TEXT NOT NULL,
    raw_response JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);