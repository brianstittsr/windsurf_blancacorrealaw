# Backend Setup - Complete These Steps

## ✅ PostgreSQL Installed Successfully!

PostgreSQL 16.11 is installed and running. Now complete these steps:

---

## Step 1: Create Database (2 minutes)

You need the PostgreSQL password that was set during installation.

**Open a new PowerShell window and run:**

```powershell
# Add PostgreSQL to PATH
$env:Path += ";C:\Program Files\PostgreSQL\16\bin"

# Create database (will prompt for password)
createdb -U postgres blanca_correa_law
```

**Enter the postgres password when prompted.**

---

## Step 2: Run Database Migration (1 minute)

```powershell
# Navigate to backend
cd c:\Users\Buyer\Documents\CascadeProjects\BlancaCorreaLawWebApp\backend

# Run migration (will prompt for password)
psql -U postgres -d blanca_correa_law -f migrations\001_initial_schema.sql
```

**This creates 4 tables:**
- consultations
- contact_submissions
- assessment_results
- email_logs

---

## Step 3: Configure Backend Environment (3 minutes)

Edit `backend\.env` file:

```powershell
# Open in notepad
notepad backend\.env
```

**Update these values:**

```env
# Database - ADD YOUR PASSWORD
DB_PASSWORD=your_postgres_password_here

# Email - For testing with Gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-gmail-app-password
EMAIL_FROM=your-email@gmail.com
ATTORNEY_EMAIL=your-email@gmail.com
```

### Get Gmail App Password:
1. Go to https://myaccount.google.com/apppasswords
2. Enable 2-factor authentication if not enabled
3. Create new app password (select "Mail" and "Windows Computer")
4. Copy the 16-character password
5. Use it as EMAIL_PASSWORD

**Save the file!**

---

## Step 4: Install Backend Dependencies (2 minutes)

```powershell
cd backend
npm install
```

---

## Step 5: Start Backend Server (1 minute)

```powershell
# Still in backend directory
npm run dev
```

**Expected output:**
```
✅ Database connection successful
✅ Email configuration verified
🚀 Server running on port 3001
```

---

## Step 6: Test Everything! (2 minutes)

### Test 1: Backend Health Check
Open browser: http://localhost:3001/health

Should see:
```json
{
  "status": "ok",
  "timestamp": "2024-11-30T...",
  "uptime": 123.456
}
```

### Test 2: Contact Form
1. Go to http://localhost:3000/contact
2. Fill out the form
3. Submit
4. Check your email for notification!

### Test 3: Consultation Booking
1. Go to http://localhost:3000/consultation
2. Complete all 3 steps
3. Submit
4. Check your email for confirmation!

### Test 4: Assessment Tool
1. Go to http://localhost:3000/assessment
2. Answer the questions
3. View your personalized results

---

## Troubleshooting

### Can't remember PostgreSQL password?

**Option 1: Reset password**
```powershell
# Edit pg_hba.conf to allow trust authentication temporarily
notepad "C:\Program Files\PostgreSQL\16\data\pg_hba.conf"

# Change this line:
# host    all             all             127.0.0.1/32            scram-sha-256
# To:
# host    all             all             127.0.0.1/32            trust

# Restart PostgreSQL
Restart-Service postgresql-x64-16

# Now you can connect without password and reset it
psql -U postgres
ALTER USER postgres PASSWORD 'new_password';
\q

# Change pg_hba.conf back to scram-sha-256
# Restart service again
```

**Option 2: Use Docker instead**
```powershell
cd c:\Users\Buyer\Documents\CascadeProjects\BlancaCorreaLawWebApp
copy .env.docker.example .env
notepad .env  # Add email settings
docker-compose up -d
```

### Database connection failed?

Check PostgreSQL is running:
```powershell
Get-Service postgresql-x64-16
```

If not running:
```powershell
Start-Service postgresql-x64-16
```

### Email not sending?

1. Verify Gmail App Password is correct (16 characters, no spaces)
2. Check 2-factor authentication is enabled
3. Try creating a new App Password
4. Check backend console for error messages

---

## Quick Reference Commands

```powershell
# Add PostgreSQL to PATH (run in each new PowerShell)
$env:Path += ";C:\Program Files\PostgreSQL\16\bin"

# Check database
psql -U postgres -d blanca_correa_law -c "SELECT COUNT(*) FROM consultations;"

# View recent submissions
psql -U postgres -d blanca_correa_law -c "SELECT * FROM contact_submissions ORDER BY created_at DESC LIMIT 5;"

# Check email logs
psql -U postgres -d blanca_correa_law -c "SELECT * FROM email_logs ORDER BY created_at DESC LIMIT 5;"

# Restart backend
# Press Ctrl+C in backend terminal, then:
npm run dev
```

---

## Current Status

✅ PostgreSQL 16.11 installed  
✅ PostgreSQL service running  
✅ Backend `.env` file created  
✅ Frontend running on http://localhost:3000  
⏳ **Next: Complete Steps 1-6 above**

---

## Estimated Time

- Step 1: 2 minutes (create database)
- Step 2: 1 minute (run migration)
- Step 3: 3 minutes (configure .env)
- Step 4: 2 minutes (npm install)
- Step 5: 1 minute (start server)
- Step 6: 2 minutes (test)

**Total: ~11 minutes**

---

**Once complete, all forms will work and send emails!** 🎉

Need help? Check the troubleshooting section above or see:
- QUICK-START.md
- INTEGRATION-GUIDE.md
- DOCKER-GUIDE.md
