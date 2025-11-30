# Firebase Setup Guide

## ✅ PostgreSQL Removed - Firebase Integrated!

The backend has been successfully migrated from PostgreSQL to Firebase/Firestore. This makes deployment much easier!

---

## Why Firebase?

**Benefits:**
- ✅ No database installation needed
- ✅ Free tier (50K reads, 20K writes per day)
- ✅ Automatic scaling
- ✅ Built-in security
- ✅ Easy deployment
- ✅ Real-time capabilities
- ✅ Works everywhere (no local setup needed)

---

## Step 1: Create Firebase Project (5 minutes)

### 1.1 Go to Firebase Console
Visit: https://console.firebase.google.com/

### 1.2 Create New Project
1. Click "Add project"
2. Enter project name: `blanca-correa-law`
3. Disable Google Analytics (optional)
4. Click "Create project"

### 1.3 Enable Firestore Database
1. In left sidebar, click "Firestore Database"
2. Click "Create database"
3. Choose "Start in production mode"
4. Select location (us-central recommended)
5. Click "Enable"

---

## Step 2: Get Firebase Credentials (3 minutes)

### 2.1 Create Service Account
1. Click gear icon → "Project settings"
2. Go to "Service accounts" tab
3. Click "Generate new private key"
4. Click "Generate key" (downloads JSON file)
5. **Save this file securely!**

### 2.2 Extract Credentials
Open the downloaded JSON file. You'll need:
- `project_id`
- `client_email`
- `private_key`

---

## Step 3: Configure Backend (2 minutes)

### 3.1 Update .env File

Edit `backend/.env`:

```env
# Firebase Configuration
FIREBASE_PROJECT_ID=your-project-id-here
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@your-project.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour\nPrivate\nKey\nHere\n-----END PRIVATE KEY-----\n"

# Email Configuration (same as before)
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

**Important:** Keep the `\n` characters in the private key!

---

## Step 4: Start Backend (1 minute)

```bash
cd backend
npm install  # Install Firebase packages
npm run dev
```

**Expected output:**
```
✅ Firebase connection successful
✅ Email configuration verified
🚀 Server running on port 3001
```

---

## Step 5: Test Everything (2 minutes)

### Test 1: Backend Health
```bash
curl http://localhost:3001/health
```

### Test 2: Submit Contact Form
1. Go to http://localhost:3000/contact
2. Fill out and submit
3. Check Firebase Console → Firestore Database
4. You should see a new document in `contact_submissions`

### Test 3: Book Consultation
1. Go to http://localhost:3000/consultation
2. Complete all steps and submit
3. Check Firestore for new document in `consultations`
4. Check your email for confirmation

---

## Firebase Console - View Your Data

### Access Firestore Data
1. Go to Firebase Console
2. Click "Firestore Database"
3. Browse collections:
   - `consultations` - Consultation bookings
   - `contact_submissions` - Contact form submissions
   - `assessment_results` - Assessment tool results
   - `email_logs` - Email delivery logs

### Query Data
You can filter, sort, and search directly in the Firebase Console!

---

## Firestore Collections Structure

### consultations
```javascript
{
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  phone: "9195551234",
  language: "en",
  consultationType: "phone",
  preferredDate: "2024-12-15",
  preferredTime: "10:00",
  caseType: "Family-Based Immigration",
  urgency: "normal",
  description: "Need help with...",
  status: "pending",
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

### contact_submissions
```javascript
{
  name: "Jane Doe",
  email: "jane@example.com",
  phone: "9195551234",
  language: "en",
  subject: "Question about services",
  message: "I would like to know...",
  status: "new",
  createdAt: Timestamp,
  updatedAt: Timestamp
}
```

### assessment_results
```javascript
{
  email: "user@example.com",
  answers: {
    immigrationGoal: "family",
    familyInUS: "yes",
    // ... other answers
  },
  recommendations: [
    {
      pathway: "Family-Based Immigration",
      description: "...",
      nextSteps: ["...", "..."],
      link: "/pathways/family"
    }
  ],
  createdAt: Timestamp
}
```

### email_logs
```javascript
{
  emailType: "consultation_confirmation",
  recipient: "user@example.com",
  subject: "Consultation Confirmed",
  status: "sent",
  createdAt: Timestamp
}
```

---

## Security Rules (Optional but Recommended)

### Set Firestore Rules
In Firebase Console → Firestore Database → Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Only allow server-side access (via service account)
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

This ensures only your backend can access the database.

---

## Deployment

### Backend Deployment (Heroku Example)

```bash
# Set environment variables in Heroku
heroku config:set FIREBASE_PROJECT_ID=your-project-id
heroku config:set FIREBASE_CLIENT_EMAIL=your-service-account@...
heroku config:set FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----..."

# Deploy
git push heroku main
```

### No Database Migration Needed!
Firebase is already in the cloud - just deploy your backend and it works!

---

## Advantages Over PostgreSQL

| Feature | PostgreSQL | Firebase |
|---------|-----------|----------|
| **Setup Time** | 15-20 min | 5 min |
| **Local Install** | Required | Not needed |
| **Scaling** | Manual | Automatic |
| **Backups** | Manual setup | Automatic |
| **Cost (small app)** | $5-9/month | Free |
| **Deployment** | Complex | Simple |
| **Real-time** | No | Yes |

---

## Troubleshooting

### Error: "Failed to connect to Firebase"

**Check:**
1. `FIREBASE_PROJECT_ID` is correct
2. `FIREBASE_CLIENT_EMAIL` is correct
3. `FIREBASE_PRIVATE_KEY` includes `\n` characters
4. Private key is wrapped in quotes
5. Firestore is enabled in Firebase Console

### Error: "Permission denied"

**Solution:**
1. Check service account has "Firebase Admin SDK Administrator Service Agent" role
2. Regenerate service account key if needed

### Can't see data in Firestore

**Check:**
1. Go to Firebase Console → Firestore Database
2. Make sure you're in the right project
3. Data appears immediately after submission
4. Check browser console for errors

---

## Cost Estimate

### Firebase Free Tier (Spark Plan)
- **Firestore**: 50K reads, 20K writes, 1GB storage per day
- **Enough for**: ~1,000 form submissions per day
- **Cost**: $0

### If You Exceed Free Tier (Blaze Plan)
- Pay only for what you use
- Typical cost for small law firm: $1-5/month
- Much cheaper than managed PostgreSQL

---

## Backup Strategy

### Automatic Backups
Firebase automatically backs up your data.

### Manual Export (Optional)
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Export data
firebase firestore:export gs://your-bucket/backups
```

---

## Next Steps

1. ✅ Create Firebase project
2. ✅ Get service account credentials
3. ✅ Update backend/.env
4. ✅ Start backend
5. ✅ Test forms
6. ✅ Deploy!

---

## Summary

**What Changed:**
- ❌ Removed PostgreSQL dependency
- ✅ Added Firebase/Firestore
- ✅ Simplified deployment
- ✅ No local database needed
- ✅ Free tier available

**What Stayed the Same:**
- All API endpoints work identically
- Frontend unchanged
- Email system unchanged
- All features work the same

**Result:** Easier setup, easier deployment, lower cost! 🎉

---

**Need Help?**
- Firebase Docs: https://firebase.google.com/docs/firestore
- Firestore Console: https://console.firebase.google.com/

**Ready to deploy!** 🚀
