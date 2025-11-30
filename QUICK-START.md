# Quick Start Guide - Get Running in 10 Minutes

Follow these steps to get the Blanca Correa Law website running locally.

---

## Step 1: Set Up PostgreSQL Database (3 minutes)

### Option A: Use Existing PostgreSQL Installation

```bash
# Open PowerShell and create database
createdb blanca_correa_law

# Run migration
cd backend
psql -d blanca_correa_law -f migrations/001_initial_schema.sql

# Verify tables created
psql -d blanca_correa_law -c "\dt"
```

### Option B: Install PostgreSQL (if needed)

**Windows:**
1. Download from https://www.postgresql.org/download/windows/
2. Run installer (use default settings)
3. Remember the password you set for postgres user
4. Add to PATH: `C:\Program Files\PostgreSQL\14\bin`
5. Restart PowerShell
6. Then follow Option A above

---

## Step 2: Configure Backend (2 minutes)

```bash
cd backend

# Copy environment template
cp .env.example .env

# Edit .env file
notepad .env
```

**Minimal configuration for testing:**
```env
# Database (adjust if needed)
DB_HOST=localhost
DB_PORT=5432
DB_NAME=blanca_correa_law
DB_USER=postgres
DB_PASSWORD=your_postgres_password

# Email (use Gmail for testing)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
EMAIL_FROM=your-email@gmail.com
ATTORNEY_EMAIL=your-email@gmail.com

# Server
PORT=3001
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

**Gmail App Password Setup:**
1. Go to https://myaccount.google.com/apppasswords
2. Create new app password
3. Copy the 16-character password
4. Use it as EMAIL_PASSWORD

---

## Step 3: Start Backend (2 minutes)

```bash
# Still in backend directory
npm install

# Start development server
npm run dev
```

**Expected output:**
```
✅ Database connection successful
✅ Email configuration verified
🚀 Server running on port 3001
```

**Test backend:**
Open http://localhost:3001/health in browser

---

## Step 4: Configure Frontend (1 minute)

**New terminal:**
```bash
cd frontend

# Copy environment template
cp .env.local.example .env.local

# No need to edit - defaults are correct for local development
```

---

## Step 5: Start Frontend (2 minutes)

```bash
# Still in frontend directory
npm install

# Start development server
npm run dev
```

**Expected output:**
```
✓ Ready in 1.8s
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000
```

---

## Step 6: Test the Application

### Open in Browser
Visit http://localhost:3000

### Test Contact Form
1. Go to http://localhost:3000/contact
2. Fill out the form
3. Submit
4. Check your email for notification

### Test Consultation Booking
1. Go to http://localhost:3000/consultation
2. Complete all 3 steps
3. Submit
4. Check your email for confirmation

### Test Assessment Tool
1. Go to http://localhost:3000/assessment
2. Answer questions
3. View personalized results

---

## Troubleshooting

### Database Connection Failed

**Error:** `ECONNREFUSED` or `password authentication failed`

**Fix:**
```bash
# Check if PostgreSQL is running
# Windows:
Get-Service -Name postgresql*

# If not running, start it:
Start-Service postgresql-x64-14

# Test connection:
psql -U postgres -d blanca_correa_law -c "SELECT NOW();"
```

### Email Not Sending

**Error:** `Invalid login` or `Authentication failed`

**Fix:**
1. Verify Gmail App Password is correct (16 characters, no spaces)
2. Check 2-factor authentication is enabled on Gmail
3. Try creating a new App Password
4. Check backend console for detailed error

### Port Already in Use

**Error:** `EADDRINUSE: address already in use :::3001`

**Fix:**
```bash
# Windows - Find and kill process on port 3001
netstat -ano | findstr :3001
taskkill /PID <PID_NUMBER> /F

# Then restart: npm run dev
```

### Frontend Build Errors

**Error:** Module not found or TypeScript errors

**Fix:**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Clear Next.js cache
rm -rf .next

# Restart
npm run dev
```

---

## Verify Everything Works

### Backend Health Check
```bash
curl http://localhost:3001/health
```

**Expected response:**
```json
{
  "status": "ok",
  "timestamp": "2024-11-30T...",
  "uptime": 123.456
}
```

### Database Check
```bash
psql -d blanca_correa_law -c "SELECT COUNT(*) FROM consultations;"
```

### Test API Endpoint
```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "9195551234",
    "language": "en",
    "subject": "Test",
    "message": "Testing the API"
  }'
```

---

## What's Running

After completing these steps, you should have:

- ✅ PostgreSQL database with 4 tables
- ✅ Backend API on http://localhost:3001
- ✅ Frontend website on http://localhost:3000
- ✅ Email notifications working
- ✅ All forms connected and functional

---

## Next Steps

### 1. Customize Content
- Update attorney bio in `frontend/src/app/about/page.tsx`
- Add real office address and phone number
- Replace placeholder text throughout

### 2. Test All Features
- Submit contact form
- Book a consultation
- Complete assessment tool
- Test on mobile devices

### 3. Review Email Templates
- Check `backend/src/config/email.ts`
- Customize email content
- Test email delivery

### 4. Prepare for Production
- Follow **DEPLOYMENT-GUIDE.md**
- Complete **PRODUCTION-CHECKLIST.md**
- Set up production database
- Configure production email service

---

## Common Commands

### Backend
```bash
cd backend
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Run production build
npm run migrate:up   # Run database migrations
```

### Frontend
```bash
cd frontend
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Run production build
npm run lint         # Run linter
```

### Database
```bash
# Connect to database
psql -d blanca_correa_law

# View tables
\dt

# View recent consultations
SELECT * FROM consultations ORDER BY created_at DESC LIMIT 5;

# View email logs
SELECT * FROM email_logs ORDER BY created_at DESC LIMIT 5;

# Exit
\q
```

---

## Getting Help

- **Integration Issues**: See INTEGRATION-GUIDE.md
- **Deployment**: See DEPLOYMENT-GUIDE.md
- **Docker**: See DOCKER-GUIDE.md
- **API Reference**: See backend/README.md
- **Frontend**: See frontend/README.md

---

## Success! 🎉

You now have a fully functional immigration law website running locally!

**What you can do:**
- Browse all 9 pages
- Submit forms (they work!)
- Test the assessment tool
- Receive email notifications
- Make code changes and see them live

**Ready for production?**
Follow the **DEPLOYMENT-GUIDE.md** to deploy to Vercel + Heroku.

---

**Estimated Time**: 10 minutes  
**Difficulty**: Beginner-friendly  
**Prerequisites**: Node.js 18+, PostgreSQL 14+
