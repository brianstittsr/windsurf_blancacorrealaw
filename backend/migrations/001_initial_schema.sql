-- Initial database schema for Blanca Correa Law

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Consultations table
CREATE TABLE consultations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    
    -- Personal Information
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    preferred_language VARCHAR(10) NOT NULL DEFAULT 'en',
    
    -- Consultation Details
    consultation_type VARCHAR(20) NOT NULL, -- in-person, phone, video
    preferred_date DATE NOT NULL,
    preferred_time TIME NOT NULL,
    alternate_date DATE,
    alternate_time TIME,
    
    -- Case Information
    case_type VARCHAR(100) NOT NULL,
    urgency VARCHAR(20) NOT NULL DEFAULT 'normal', -- normal, soon, urgent, emergency
    description TEXT NOT NULL,
    hear_about_us VARCHAR(100),
    
    -- Status
    status VARCHAR(20) NOT NULL DEFAULT 'pending', -- pending, confirmed, completed, cancelled
    confirmed_date DATE,
    confirmed_time TIME,
    
    -- Metadata
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    -- Indexes
    CONSTRAINT valid_consultation_type CHECK (consultation_type IN ('in-person', 'phone', 'video')),
    CONSTRAINT valid_urgency CHECK (urgency IN ('normal', 'soon', 'urgent', 'emergency')),
    CONSTRAINT valid_status CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled'))
);

CREATE INDEX idx_consultations_email ON consultations(email);
CREATE INDEX idx_consultations_status ON consultations(status);
CREATE INDEX idx_consultations_created_at ON consultations(created_at);
CREATE INDEX idx_consultations_preferred_date ON consultations(preferred_date);

-- Contact submissions table
CREATE TABLE contact_submissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    
    -- Contact Information
    name VARCHAR(200) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    preferred_language VARCHAR(10) NOT NULL DEFAULT 'en',
    
    -- Message
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    
    -- Status
    status VARCHAR(20) NOT NULL DEFAULT 'new', -- new, read, responded, archived
    responded_at TIMESTAMP WITH TIME ZONE,
    
    -- Metadata
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT valid_contact_status CHECK (status IN ('new', 'read', 'responded', 'archived'))
);

CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX idx_contact_submissions_status ON contact_submissions(status);
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at);

-- Assessment results table
CREATE TABLE assessment_results (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    
    -- User Information (optional)
    email VARCHAR(255),
    
    -- Assessment Answers (stored as JSONB for flexibility)
    answers JSONB NOT NULL,
    
    -- Results
    recommendations JSONB NOT NULL,
    
    -- Metadata
    ip_address INET,
    user_agent TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_assessment_results_email ON assessment_results(email);
CREATE INDEX idx_assessment_results_created_at ON assessment_results(created_at);
CREATE INDEX idx_assessment_results_answers ON assessment_results USING GIN (answers);

-- Email logs table (for tracking sent emails)
CREATE TABLE email_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    
    -- Email Details
    to_email VARCHAR(255) NOT NULL,
    from_email VARCHAR(255) NOT NULL,
    subject VARCHAR(255) NOT NULL,
    email_type VARCHAR(50) NOT NULL, -- consultation_confirmation, contact_notification, etc.
    
    -- Related Records
    related_id UUID, -- ID of related consultation, contact, etc.
    related_type VARCHAR(50), -- consultations, contact_submissions, etc.
    
    -- Status
    status VARCHAR(20) NOT NULL DEFAULT 'pending', -- pending, sent, failed
    error_message TEXT,
    sent_at TIMESTAMP WITH TIME ZONE,
    
    -- Metadata
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    
    CONSTRAINT valid_email_status CHECK (status IN ('pending', 'sent', 'failed'))
);

CREATE INDEX idx_email_logs_to_email ON email_logs(to_email);
CREATE INDEX idx_email_logs_status ON email_logs(status);
CREATE INDEX idx_email_logs_created_at ON email_logs(created_at);
CREATE INDEX idx_email_logs_related ON email_logs(related_id, related_type);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for consultations
CREATE TRIGGER update_consultations_updated_at
    BEFORE UPDATE ON consultations
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Comments for documentation
COMMENT ON TABLE consultations IS 'Stores consultation booking requests from the website';
COMMENT ON TABLE contact_submissions IS 'Stores general contact form submissions';
COMMENT ON TABLE assessment_results IS 'Stores immigration pathway assessment results';
COMMENT ON TABLE email_logs IS 'Tracks all emails sent by the system';

COMMENT ON COLUMN consultations.urgency IS 'Urgency level: normal, soon (1-3 months), urgent (within 1 month), emergency (immediate)';
COMMENT ON COLUMN consultations.status IS 'Booking status: pending (awaiting confirmation), confirmed, completed, cancelled';
COMMENT ON COLUMN contact_submissions.status IS 'Submission status: new, read, responded, archived';
