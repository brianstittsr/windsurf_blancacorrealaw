# Deployment Guide - Blanca Correa Law Website

Complete guide for deploying the website to production.

---

## Deployment Options

### Option 1: Vercel + Heroku (Recommended)
- **Frontend**: Vercel (optimized for Next.js)
- **Backend**: Heroku (easy PostgreSQL integration)
- **Database**: Heroku Postgres
- **Cost**: ~$7-25/month
- **Setup Time**: 30-60 minutes

### Option 2: DigitalOcean
- **All-in-one**: DigitalOcean App Platform
- **Database**: Managed PostgreSQL
- **Cost**: ~$12-25/month
- **Setup Time**: 45-90 minutes

### Option 3: AWS (Enterprise)
- **Frontend**: AWS Amplify
- **Backend**: EC2 or ECS
- **Database**: RDS PostgreSQL
- **Cost**: Variable, ~$30-100/month
- **Setup Time**: 2-4 hours

---

## Option 1: Vercel + Heroku (Detailed)

### Prerequisites
- GitHub account
- Vercel account (free)
- Heroku account (free tier available)
- Domain name (optional)

### Step 1: Deploy Backend to Heroku

**1.1 Install Heroku CLI**
```bash
# Windows
winget install Heroku.HerokuCLI

# Mac
brew tap heroku/brew && brew install heroku

# Or download from https://devcenter.heroku.com/articles/heroku-cli
```

**1.2 Login to Heroku**
```bash
heroku login
```

**1.3 Create Heroku App**
```bash
cd backend
heroku create blanca-correa-law-api

# Add PostgreSQL
heroku addons:create heroku-postgresql:mini

# Get database URL
heroku config:get DATABASE_URL
```

**1.4 Set Environment Variables**
```bash
# Email configuration
heroku config:set EMAIL_HOST=smtp.sendgrid.net
heroku config:set EMAIL_PORT=587
heroku config:set EMAIL_USER=apikey
heroku config:set EMAIL_PASSWORD=your-sendgrid-api-key
heroku config:set EMAIL_FROM=info@blancacorrealaw.com
heroku config:set ATTORNEY_EMAIL=blanca@blancacorrealaw.com

# Server configuration
heroku config:set NODE_ENV=production
heroku config:set FRONTEND_URL=https://blancacorrealaw.com

# Security
heroku config:set JWT_SECRET=$(openssl rand -hex 32)
heroku config:set SESSION_SECRET=$(openssl rand -hex 32)
```

**1.5 Create Procfile**
Create `backend/Procfile`:
```
web: npm start
release: npm run migrate:up
```

**1.6 Update package.json**
Add to `backend/package.json`:
```json
{
  "scripts": {
    "start": "node dist/server.js",
    "build": "tsc",
    "postinstall": "npm run build"
  },
  "engines": {
    "node": "18.x",
    "npm": "9.x"
  }
}
```

**1.7 Deploy**
```bash
# Initialize git (if not already)
git init
git add .
git commit -m "Initial backend deployment"

# Deploy to Heroku
git push heroku main

# Run database migration
heroku run npm run migrate:up

# Check logs
heroku logs --tail
```

**1.8 Test Backend**
```bash
# Test health endpoint
curl https://blanca-correa-law-api.herokuapp.com/health
```

### Step 2: Deploy Frontend to Vercel

**2.1 Push to GitHub**
```bash
cd ..
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/blanca-correa-law.git
git push -u origin main
```

**2.2 Connect to Vercel**
1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Select `frontend` as root directory

**2.3 Configure Environment Variables**
In Vercel dashboard, add:
```
NEXT_PUBLIC_API_URL=https://blanca-correa-law-api.herokuapp.com
NEXT_PUBLIC_SITE_URL=https://blancacorrealaw.com
```

**2.4 Deploy**
- Vercel will automatically deploy
- Wait for build to complete
- Visit your deployment URL

**2.5 Custom Domain**
1. Go to Project Settings → Domains
2. Add your domain: `blancacorrealaw.com`
3. Follow DNS configuration instructions
4. Add `www.blancacorrealaw.com` as well

### Step 3: Configure Email (SendGrid)

**3.1 Sign Up for SendGrid**
1. Go to https://sendgrid.com
2. Sign up for free account (100 emails/day free)
3. Verify your email

**3.2 Create API Key**
1. Go to Settings → API Keys
2. Create API Key with "Mail Send" permissions
3. Copy the API key

**3.3 Verify Sender**
1. Go to Settings → Sender Authentication
2. Verify your domain or single sender email
3. Follow verification steps

**3.4 Update Heroku Config**
```bash
heroku config:set EMAIL_PASSWORD=your-sendgrid-api-key
```

**3.5 Test Email**
```bash
# Test consultation booking
curl -X POST https://blanca-correa-law-api.herokuapp.com/api/consultations \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Test",
    "lastName": "User",
    "email": "test@example.com",
    "phone": "9195551234",
    "language": "en",
    "consultationType": "phone",
    "preferredDate": "2024-12-15",
    "preferredTime": "10:00",
    "caseType": "Family-Based Immigration",
    "urgency": "normal",
    "description": "Test booking"
  }'
```

---

## Option 2: DigitalOcean App Platform

### Step 1: Prepare Repository

**1.1 Create App Spec**
Create `app.yaml` in root:
```yaml
name: blanca-correa-law
region: nyc

databases:
  - name: db
    engine: PG
    version: "14"
    size: basic-xs

services:
  # Backend API
  - name: api
    github:
      repo: yourusername/blanca-correa-law
      branch: main
      deploy_on_push: true
    source_dir: /backend
    build_command: npm install && npm run build
    run_command: npm start
    envs:
      - key: NODE_ENV
        value: production
      - key: DATABASE_URL
        value: ${db.DATABASE_URL}
      - key: EMAIL_HOST
        value: smtp.sendgrid.net
      - key: EMAIL_PORT
        value: "587"
      - key: EMAIL_USER
        value: apikey
      - key: EMAIL_PASSWORD
        scope: RUN_TIME
        type: SECRET
      - key: FRONTEND_URL
        value: ${frontend.PUBLIC_URL}
    health_check:
      http_path: /health

  # Frontend
  - name: frontend
    github:
      repo: yourusername/blanca-correa-law
      branch: main
      deploy_on_push: true
    source_dir: /frontend
    build_command: npm install && npm run build
    run_command: npm start
    envs:
      - key: NEXT_PUBLIC_API_URL
        value: ${api.PUBLIC_URL}
```

### Step 2: Deploy

1. Go to https://cloud.digitalocean.com/apps
2. Click "Create App"
3. Connect GitHub repository
4. Select `app.yaml` configuration
5. Add secrets (EMAIL_PASSWORD, etc.)
6. Click "Create Resources"
7. Wait for deployment

### Step 3: Run Database Migration

```bash
# Get database connection string from DigitalOcean dashboard
# Connect and run migration
psql "your-database-connection-string" -f backend/migrations/001_initial_schema.sql
```

---

## Post-Deployment Configuration

### 1. Update CORS Settings

Update backend `.env` or Heroku config:
```bash
heroku config:set FRONTEND_URL=https://blancacorrealaw.com
```

### 2. Configure DNS

Add DNS records for your domain:
```
Type    Name    Value
A       @       [Vercel IP]
CNAME   www     cname.vercel-dns.com
```

### 3. Enable SSL

Both Vercel and Heroku provide automatic SSL certificates.

### 4. Set Up Monitoring

**Heroku:**
```bash
# Add logging addon
heroku addons:create papertrail:choklad

# View logs
heroku logs --tail
```

**Vercel:**
- Analytics enabled by default
- View in Vercel dashboard

### 5. Configure Backups

**Heroku Postgres:**
```bash
# Enable automatic backups
heroku pg:backups:schedule --at '02:00 America/New_York' DATABASE_URL

# Create manual backup
heroku pg:backups:capture

# Download backup
heroku pg:backups:download
```

---

## Environment Variables Reference

### Backend (Production)

```env
# Required
NODE_ENV=production
PORT=3001
DATABASE_URL=postgresql://...
FRONTEND_URL=https://blancacorrealaw.com

# Email (SendGrid)
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASSWORD=SG.xxxxx
EMAIL_FROM=info@blancacorrealaw.com
ATTORNEY_EMAIL=blanca@blancacorrealaw.com

# Security
JWT_SECRET=random-32-char-string
SESSION_SECRET=random-32-char-string

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

### Frontend (Production)

```env
NEXT_PUBLIC_API_URL=https://api.blancacorrealaw.com
NEXT_PUBLIC_SITE_URL=https://blancacorrealaw.com
NEXT_PUBLIC_SITE_NAME=Blanca Correa Law
```

---

## Testing Production Deployment

### 1. Health Checks

```bash
# Backend health
curl https://api.blancacorrealaw.com/health

# Frontend
curl https://blancacorrealaw.com
```

### 2. Test Forms

1. Visit https://blancacorrealaw.com/contact
2. Submit contact form
3. Verify email received

### 3. Test Consultation Booking

1. Visit https://blancacorrealaw.com/consultation
2. Complete booking form
3. Verify confirmation email
4. Check database for entry

### 4. Test Assessment Tool

1. Visit https://blancacorrealaw.com/assessment
2. Complete questionnaire
3. Verify results displayed
4. Check database for saved results

---

## Monitoring & Maintenance

### Daily Checks

```bash
# Check error logs
heroku logs --tail --app blanca-correa-law-api | grep ERROR

# Check email delivery
heroku pg:psql --app blanca-correa-law-api
SELECT status, COUNT(*) FROM email_logs 
WHERE created_at >= NOW() - INTERVAL '24 hours'
GROUP BY status;
```

### Weekly Checks

```sql
-- Database size
SELECT pg_size_pretty(pg_database_size('your_database'));

-- Recent activity
SELECT COUNT(*) FROM consultations 
WHERE created_at >= NOW() - INTERVAL '7 days';

-- Email success rate
SELECT 
  email_type,
  COUNT(*) as total,
  SUM(CASE WHEN status = 'sent' THEN 1 ELSE 0 END) as sent
FROM email_logs
WHERE created_at >= NOW() - INTERVAL '7 days'
GROUP BY email_type;
```

### Monthly Tasks

- [ ] Review and update dependencies
- [ ] Check database performance
- [ ] Review error logs
- [ ] Backup database manually
- [ ] Review analytics
- [ ] Update content as needed

---

## Troubleshooting

### Backend Not Responding

```bash
# Check if dyno is running
heroku ps --app blanca-correa-law-api

# Restart dyno
heroku restart --app blanca-correa-law-api

# Check logs
heroku logs --tail --app blanca-correa-law-api
```

### Database Connection Issues

```bash
# Check database status
heroku pg:info --app blanca-correa-law-api

# Reset database (CAUTION: deletes all data)
heroku pg:reset DATABASE_URL --app blanca-correa-law-api
heroku run npm run migrate:up --app blanca-correa-law-api
```

### Email Not Sending

1. Check SendGrid dashboard for errors
2. Verify sender authentication
3. Check email logs in database:
```sql
SELECT * FROM email_logs 
WHERE status = 'failed' 
ORDER BY created_at DESC 
LIMIT 10;
```

### Frontend Build Failures

1. Check Vercel build logs
2. Verify environment variables
3. Test build locally:
```bash
cd frontend
npm run build
```

---

## Scaling Considerations

### When to Scale

- Response time > 2 seconds
- Database CPU > 80%
- Error rate > 1%
- More than 1000 visitors/day

### Scaling Options

**Heroku:**
```bash
# Upgrade dyno
heroku ps:scale web=2 --app blanca-correa-law-api

# Upgrade database
heroku addons:upgrade heroku-postgresql:standard-0
```

**Vercel:**
- Automatically scales
- Upgrade to Pro for better performance

---

## Security Checklist

- [ ] SSL/HTTPS enabled
- [ ] Environment variables secured
- [ ] Database backups enabled
- [ ] Rate limiting configured
- [ ] CORS properly configured
- [ ] Security headers enabled (Helmet)
- [ ] Input validation on all forms
- [ ] SQL injection protection
- [ ] XSS protection
- [ ] Error messages don't leak sensitive info

---

## Cost Estimates

### Minimal Setup (Hobby)
- Heroku Hobby Dyno: $7/month
- Heroku Postgres Mini: $5/month
- SendGrid Free: $0 (100 emails/day)
- Vercel Hobby: $0
- **Total: ~$12/month**

### Professional Setup
- Heroku Standard Dyno: $25/month
- Heroku Postgres Basic: $9/month
- SendGrid Essentials: $15/month (40k emails)
- Vercel Pro: $20/month
- Custom Domain: $12/year
- **Total: ~$70/month**

### Enterprise Setup
- AWS/DigitalOcean: $50-200/month
- Managed Database: $15-50/month
- Email Service: $20-100/month
- CDN: $10-50/month
- **Total: ~$100-400/month**

---

## Rollback Procedure

### Heroku

```bash
# View releases
heroku releases --app blanca-correa-law-api

# Rollback to previous version
heroku rollback v123 --app blanca-correa-law-api
```

### Vercel

1. Go to Deployments tab
2. Find previous working deployment
3. Click "..." → "Promote to Production"

---

## Support Resources

- **Heroku Docs**: https://devcenter.heroku.com
- **Vercel Docs**: https://vercel.com/docs
- **SendGrid Docs**: https://docs.sendgrid.com
- **Next.js Docs**: https://nextjs.org/docs
- **PostgreSQL Docs**: https://www.postgresql.org/docs

---

**Deployment Status**: Ready to Deploy  
**Estimated Time**: 1-2 hours for first deployment  
**Difficulty**: Intermediate

Good luck with your deployment! 🚀
