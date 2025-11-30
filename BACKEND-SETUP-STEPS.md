# Backend Setup - Step by Step

## Current Status

✅ PostgreSQL is installing...  
✅ Backend `.env` file created  
⏳ Waiting for installation to complete

---

## Steps After PostgreSQL Installs

### Step 1: Configure PostgreSQL Password

After installation completes, you'll need to set a password for the postgres user.

### Step 2: Create Database

```bash
# Open new PowerShell window (PostgreSQL will be in PATH)
createdb -U postgres blanca_correa_law
```

### Step 3: Run Database Migration

```bash
cd backend
psql -U postgres -d blanca_correa_law -f migrations/001_initial_schema.sql
```

### Step 4: Configure Backend Environment

Edit `backend/.env` and add:
- Database password
- Email credentials (Gmail recommended for testing)

### Step 5: Install Dependencies & Start

```bash
cd backend
npm install
npm run dev
```

---

## Quick Test Commands

```bash
# Test database connection
psql -U postgres -d blanca_correa_law -c "SELECT NOW();"

# Test backend health
curl http://localhost:3001/health

# Test contact form
# Visit http://localhost:3000/contact and submit
```

---

**I'll guide you through each step once PostgreSQL finishes installing!**
