# Frontend-Backend Integration Guide

## Overview

The frontend and backend are now connected! Forms submit data to the API, which stores it in PostgreSQL and sends email notifications.

## Setup Instructions

### 1. Frontend Environment Configuration

Create `.env.local` in the frontend directory:

```bash
cd frontend
cp .env.local.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 2. Backend Environment Configuration

Create `.env` in the backend directory:

```bash
cd backend
cp .env.example .env
```

Edit `.env` with your settings:

```env
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/blanca_correa_law
DB_HOST=localhost
DB_PORT=5432
DB_NAME=blanca_correa_law
DB_USER=your_username
DB_PASSWORD=your_password

# Email (Gmail example)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=info@blancacorrealaw.com
ATTORNEY_EMAIL=blanca@blancacorrealaw.com

# Server
PORT=3001
FRONTEND_URL=http://localhost:3000
```

### 3. Database Setup

```bash
# Create database
createdb blanca_correa_law

# Run migration
cd backend
psql -d blanca_correa_law -f migrations/001_initial_schema.sql
```

### 4. Install Dependencies

**Frontend:**
```bash
cd frontend
npm install
```

**Backend:**
```bash
cd backend
npm install
```

### 5. Start Both Servers

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

## Integrated Features

### ✅ Contact Form
- **Page**: `/contact`
- **API**: `POST /api/contact`
- **Features**:
  - Form validation
  - API submission
  - Success/error feedback
  - Email notification to attorney

### ✅ Consultation Booking
- **Page**: `/consultation`
- **API**: `POST /api/consultations`
- **Features**:
  - Multi-step form
  - API submission
  - Confirmation email to client
  - Notification email to attorney
  - Urgency level tracking

### ✅ Assessment Tool
- **Page**: `/assessment`
- **API**: `POST /api/assessments`
- **Features**:
  - Interactive questionnaire
  - Personalized recommendations
  - Results saved to database
  - Analytics tracking

## API Client

All API calls use the centralized client at `frontend/src/lib/api.ts`:

```typescript
import { contactApi, consultationApi, assessmentApi } from '@/lib/api';

// Contact form
await contactApi.create(formData);

// Consultation booking
await consultationApi.create(formData);

// Assessment results
await assessmentApi.create({ answers, recommendations });
```

## Testing the Integration

### 1. Test Contact Form

1. Go to http://localhost:3000/contact
2. Fill out the form
3. Submit
4. Check:
   - Success message appears
   - Email sent to attorney
   - Data in `contact_submissions` table

```sql
SELECT * FROM contact_submissions ORDER BY created_at DESC LIMIT 1;
```

### 2. Test Consultation Booking

1. Go to http://localhost:3000/consultation
2. Complete all 3 steps
3. Submit
4. Check:
   - Confirmation screen appears
   - Confirmation email sent to client
   - Notification email sent to attorney
   - Data in `consultations` table

```sql
SELECT * FROM consultations ORDER BY created_at DESC LIMIT 1;
```

### 3. Test Assessment Tool

1. Go to http://localhost:3000/assessment
2. Answer questions
3. View results
4. Check:
   - Results displayed correctly
   - Data in `assessment_results` table

```sql
SELECT * FROM assessment_results ORDER BY created_at DESC LIMIT 1;
```

## Email Testing

### Option 1: Gmail (Development)

1. Enable 2-factor authentication on Gmail
2. Create App Password at https://myaccount.google.com/apppasswords
3. Use in `.env`:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
```

### Option 2: Mailtrap (Testing)

For testing without sending real emails:

1. Sign up at https://mailtrap.io
2. Get SMTP credentials
3. Use in `.env`:

```env
EMAIL_HOST=smtp.mailtrap.io
EMAIL_PORT=2525
EMAIL_USER=your-mailtrap-user
EMAIL_PASSWORD=your-mailtrap-password
```

### Option 3: SendGrid (Production)

For production use:

1. Sign up at https://sendgrid.com
2. Create API key
3. Use in `.env`:

```env
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASSWORD=your-sendgrid-api-key
```

## Troubleshooting

### CORS Errors

If you see CORS errors in the browser console:

1. Check `FRONTEND_URL` in backend `.env` matches your frontend URL
2. Restart backend server after changing `.env`

### Database Connection Errors

```bash
# Test PostgreSQL connection
psql -d blanca_correa_law -c "SELECT NOW();"

# Check if tables exist
psql -d blanca_correa_law -c "\dt"
```

### Email Not Sending

1. Check email logs:
```sql
SELECT * FROM email_logs WHERE status = 'failed' ORDER BY created_at DESC;
```

2. Verify email credentials in `.env`
3. Check backend console for error messages

### API Not Responding

1. Check backend is running: http://localhost:3001/health
2. Check browser console for errors
3. Check backend console for request logs

## Data Flow

### Contact Form Submission

```
User fills form
    ↓
Frontend validates
    ↓
POST /api/contact
    ↓
Backend validates
    ↓
Save to contact_submissions table
    ↓
Send email to attorney
    ↓
Log email in email_logs table
    ↓
Return success to frontend
    ↓
Show success message
```

### Consultation Booking

```
User completes 3-step form
    ↓
Frontend validates each step
    ↓
POST /api/consultations
    ↓
Backend validates
    ↓
Save to consultations table
    ↓
Send confirmation email to client
    ↓
Send notification email to attorney
    ↓
Log both emails
    ↓
Return success
    ↓
Show confirmation screen
```

### Assessment Tool

```
User answers questions
    ↓
Frontend calculates recommendations
    ↓
POST /api/assessments (async)
    ↓
Save to assessment_results table
    ↓
Return success
    ↓
Show results (doesn't wait for API)
```

## Database Queries

### View Recent Submissions

```sql
-- Recent consultations
SELECT 
  first_name, last_name, email, 
  consultation_type, preferred_date, 
  case_type, urgency, status,
  created_at
FROM consultations 
ORDER BY created_at DESC 
LIMIT 10;

-- Recent contact submissions
SELECT 
  name, email, subject, 
  status, created_at
FROM contact_submissions 
ORDER BY created_at DESC 
LIMIT 10;

-- Recent assessments
SELECT 
  email,
  answers->>'immigrationGoal' as goal,
  created_at
FROM assessment_results 
ORDER BY created_at DESC 
LIMIT 10;
```

### Email Statistics

```sql
-- Email success rate
SELECT 
  email_type,
  COUNT(*) as total,
  SUM(CASE WHEN status = 'sent' THEN 1 ELSE 0 END) as sent,
  SUM(CASE WHEN status = 'failed' THEN 1 ELSE 0 END) as failed
FROM email_logs
GROUP BY email_type;

-- Failed emails
SELECT * FROM email_logs 
WHERE status = 'failed' 
ORDER BY created_at DESC;
```

### Analytics

```sql
-- Consultation requests by urgency
SELECT urgency, COUNT(*) 
FROM consultations 
GROUP BY urgency 
ORDER BY COUNT(*) DESC;

-- Popular case types
SELECT case_type, COUNT(*) 
FROM consultations 
GROUP BY case_type 
ORDER BY COUNT(*) DESC;

-- Assessment completion rate
SELECT 
  DATE(created_at) as date,
  COUNT(*) as completions
FROM assessment_results
WHERE created_at >= NOW() - INTERVAL '30 days'
GROUP BY DATE(created_at)
ORDER BY date DESC;
```

## Production Checklist

Before deploying to production:

- [ ] Set `NODE_ENV=production` in backend
- [ ] Use production database (not localhost)
- [ ] Configure production email service (SendGrid recommended)
- [ ] Set up SSL/HTTPS
- [ ] Update `FRONTEND_URL` and `NEXT_PUBLIC_API_URL`
- [ ] Enable database backups
- [ ] Set up monitoring (health checks)
- [ ] Configure rate limiting appropriately
- [ ] Review and update CORS settings
- [ ] Set strong secrets in `.env`
- [ ] Test all forms in production
- [ ] Verify email delivery
- [ ] Set up error tracking (Sentry, etc.)

## Support

For issues or questions:
1. Check backend console logs
2. Check browser console
3. Review database for errors
4. Check email logs table
5. Verify environment variables

---

**Status**: ✅ Integration Complete
**Last Updated**: November 30, 2024
