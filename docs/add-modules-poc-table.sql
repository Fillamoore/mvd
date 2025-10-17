CREATE TABLE public.modules (
    module_id SERIAL PRIMARY KEY,
    log_id INTEGER REFERENCES public.gemini_log(id) ON DELETE CASCADE, -- This reference will now succeed
    title VARCHAR(255) NOT NULL,
    content_body TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);