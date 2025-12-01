# Testing Checklist

## ✅ Complete Testing Guide for Blanca Correa Law Website

This checklist ensures all features work correctly before production deployment.

---

## 🔴 CRITICAL - Backend Testing

### Backend Server
- [ ] Backend starts without errors: `cd backend && npm run dev`
- [ ] Health check responds: `curl http://localhost:3001/health`
- [ ] Firebase connection successful (check console logs)
- [ ] No TypeScript compilation errors: `npm run build`

### API Endpoints - Consultations
- [ ] POST /api/consultations - Creates consultation
  ```bash
  curl -X POST http://localhost:3001/api/consultations \
    -H "Content-Type: application/json" \
    -d '{"firstName":"Test","lastName":"User","email":"test@example.com","phone":"9195551234","language":"en","consultationType":"phone","preferredDate":"2024-12-15","preferredTime":"10:00","caseType":"Family-Based Immigration","urgency":"normal","description":"Test consultation"}'
  ```
- [ ] GET /api/consultations/:id - Retrieves consultation
- [ ] GET /api/consultations - Lists all consultations
- [ ] Consultation email sent to client
- [ ] Consultation notification sent to attorney

### API Endpoints - Contact
- [ ] POST /api/contact - Submits contact form
  ```bash
  curl -X POST http://localhost:3001/api/contact \
    -H "Content-Type: application/json" \
    -d '{"name":"Test User","email":"test@example.com","phone":"9195551234","language":"en","subject":"Test Subject","message":"This is a test message from the contact form."}'
  ```
- [ ] GET /api/contact - Lists all submissions
- [ ] Contact notification sent to attorney

### API Endpoints - Assessments
- [ ] POST /api/assessments - Saves assessment results
  ```bash
  curl -X POST http://localhost:3001/api/assessments \
    -H "Content-Type: application/json" \
    -d '{"email":"test@example.com","answers":{"goal":"family"},"recommendations":[{"pathway":"Family-Based Immigration","description":"Test","nextSteps":["Step 1"],"link":"/pathways/family"}]}'
  ```
- [ ] GET /api/assessments - Lists all assessments
- [ ] GET /api/assessments/stats - Returns statistics

### Firebase/Firestore
- [ ] Firebase credentials configured in .env
- [ ] Firestore collections created automatically
- [ ] Data persists correctly in Firestore
- [ ] Can view data in Firebase Console

### Email System
- [ ] Gmail SMTP configured correctly
- [ ] App password set in .env
- [ ] Test emails deliver successfully
- [ ] Email logs saved to Firestore

---

## 🟡 MEDIUM - Frontend Testing

### Frontend Server
- [ ] Frontend starts without errors: `cd frontend && npm run dev`
- [ ] No critical console errors
- [ ] API_URL configured correctly in .env.local

### Page Loading (9 Pages)
- [ ] Homepage (/) loads correctly
- [ ] About (/about) loads correctly
- [ ] Services (/services) loads correctly
- [ ] Contact (/contact) loads correctly
- [ ] Consultation (/consultation) loads correctly
- [ ] Assessment (/assessment) loads correctly
- [ ] Family Pathway (/pathways/family) loads correctly
- [ ] Employment Pathway (/pathways/employment) loads correctly
- [ ] Citizenship Pathway (/pathways/citizenship) loads correctly

### Navigation
- [ ] Header navigation works on all pages
- [ ] Footer links work correctly
- [ ] "Book Consultation" CTA buttons work
- [ ] Internal links navigate correctly
- [ ] Back button works as expected

### Contact Form (/contact)
- [ ] Form displays all fields correctly
- [ ] Required field validation works
- [ ] Email validation works
- [ ] Phone validation works
- [ ] Form submits successfully
- [ ] Success message displays
- [ ] Form clears after submission
- [ ] Error handling works (try with backend off)

### Consultation Booking (/consultation)
- [ ] Step 1 (Personal Info) validates correctly
- [ ] Step 2 (Consultation Details) validates correctly
- [ ] Step 3 (Case Information) validates correctly
- [ ] Progress indicator updates correctly
- [ ] "Previous" button works
- [ ] "Next" button validates before proceeding
- [ ] Final submission works
- [ ] Success message displays
- [ ] Confirmation email received

### Assessment Tool (/assessment)
- [ ] All questions display correctly
- [ ] Radio buttons/checkboxes work
- [ ] Progress tracking works
- [ ] "Previous" button works
- [ ] "Next" button validates
- [ ] Results page displays recommendations
- [ ] Recommendations are relevant
- [ ] Links to pathway pages work
- [ ] "Book Consultation" button works

---

## 🟢 LOW - UI/UX Testing

### Responsive Design
- [ ] Desktop (1920x1080) - All pages look good
- [ ] Laptop (1366x768) - All pages look good
- [ ] Tablet (768x1024) - All pages look good
- [ ] Mobile (375x667) - All pages look good
- [ ] Mobile menu works correctly
- [ ] Forms are usable on mobile
- [ ] Buttons are touch-friendly

### Visual Design
- [ ] Colors match "Pathways to Belonging" theme
- [ ] Typography is readable
- [ ] Images load correctly
- [ ] Icons display properly
- [ ] Spacing is consistent
- [ ] No layout shifts on load

### Accessibility
- [ ] All images have alt text
- [ ] Forms have proper labels
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] Color contrast is sufficient
- [ ] Screen reader compatible (test with NVDA/JAWS)

### Performance
- [ ] Homepage loads in < 3 seconds
- [ ] No console errors
- [ ] No 404 errors in Network tab
- [ ] Images are optimized
- [ ] No memory leaks (check DevTools)

---

## 🔵 INTEGRATION - End-to-End Testing

### User Journey 1: Contact Form Submission
1. [ ] Navigate to /contact
2. [ ] Fill out contact form
3. [ ] Submit form
4. [ ] See success message
5. [ ] Check Firebase Console for submission
6. [ ] Check email for notification

### User Journey 2: Consultation Booking
1. [ ] Navigate to /consultation
2. [ ] Complete Step 1 (Personal Info)
3. [ ] Complete Step 2 (Consultation Details)
4. [ ] Complete Step 3 (Case Information)
5. [ ] Submit consultation request
6. [ ] See success message
7. [ ] Check Firebase Console for consultation
8. [ ] Check email for confirmation

### User Journey 3: Assessment Tool
1. [ ] Navigate to /assessment
2. [ ] Answer all questions
3. [ ] Complete assessment
4. [ ] View recommendations
5. [ ] Click on pathway link
6. [ ] Navigate to pathway detail page
7. [ ] Click "Book Consultation"
8. [ ] Arrive at consultation page

### User Journey 4: Browse and Learn
1. [ ] Start at homepage
2. [ ] Navigate to Services
3. [ ] Read service descriptions
4. [ ] Navigate to About
5. [ ] Learn about attorney
6. [ ] Navigate to pathway pages
7. [ ] Read pathway information
8. [ ] Book consultation

---

## 🛡️ SECURITY - Security Testing

### Input Validation
- [ ] SQL injection attempts blocked
- [ ] XSS attempts sanitized
- [ ] CSRF protection works
- [ ] File upload validation (if applicable)
- [ ] Rate limiting works (try 100+ requests)

### API Security
- [ ] CORS configured correctly
- [ ] Security headers present (Helmet)
- [ ] No sensitive data in responses
- [ ] Error messages don't leak info
- [ ] API endpoints require valid data

### Environment Variables
- [ ] .env files not committed to Git
- [ ] Firebase credentials secure
- [ ] Email passwords secure
- [ ] No hardcoded secrets in code

---

## 📊 DATA - Data Verification

### Firebase Console
- [ ] Login to Firebase Console
- [ ] Navigate to Firestore Database
- [ ] Verify `consultations` collection exists
- [ ] Verify `contact_submissions` collection exists
- [ ] Verify `assessment_results` collection exists
- [ ] Verify `email_logs` collection exists
- [ ] Check data structure is correct
- [ ] Verify timestamps are accurate

### Email Logs
- [ ] All sent emails logged
- [ ] Failed emails logged with errors
- [ ] Email types categorized correctly
- [ ] Recipients recorded accurately

---

## 🚀 DEPLOYMENT - Pre-Deployment Checklist

### Code Quality
- [ ] Backend compiles without errors
- [ ] Frontend builds successfully
- [ ] No critical ESLint errors
- [ ] No TypeScript errors
- [ ] Code is formatted consistently

### Configuration
- [ ] Production .env configured
- [ ] Firebase production project set up
- [ ] Email SMTP configured for production
- [ ] CORS allows production domain
- [ ] Rate limits appropriate for production

### Documentation
- [ ] README.md is up to date
- [ ] FIREBASE-SETUP.md is accurate
- [ ] DEPLOYMENT-GUIDE.md is complete
- [ ] API documentation is current
- [ ] Environment variables documented

### Git
- [ ] All changes committed
- [ ] Pushed to GitHub
- [ ] No sensitive data in commits
- [ ] .gitignore is correct

---

## ✅ FINAL - Final Verification

### Smoke Test (Production)
- [ ] Homepage loads
- [ ] Submit one contact form
- [ ] Book one consultation
- [ ] Complete one assessment
- [ ] Verify emails received
- [ ] Check Firebase data

### Monitoring
- [ ] Set up error tracking (Sentry/etc)
- [ ] Configure uptime monitoring
- [ ] Set up analytics (Google Analytics)
- [ ] Monitor Firebase usage
- [ ] Monitor email delivery

---

## 📝 Testing Notes

### Issues Found
Document any issues discovered during testing:

1. **Issue**: [Description]
   - **Severity**: Critical/High/Medium/Low
   - **Steps to Reproduce**: [Steps]
   - **Expected**: [Expected behavior]
   - **Actual**: [Actual behavior]
   - **Status**: Open/Fixed/Won't Fix

### Test Results Summary

**Date Tested**: ___________
**Tested By**: ___________
**Environment**: Development/Staging/Production

**Results**:
- Total Tests: ___
- Passed: ___
- Failed: ___
- Skipped: ___

**Overall Status**: ✅ Ready / ⚠️ Issues Found / ❌ Not Ready

---

## 🎯 Quick Test Commands

### Backend
```bash
# Start backend
cd backend
npm run dev

# Test health
curl http://localhost:3001/health

# Build
npm run build
```

### Frontend
```bash
# Start frontend
cd frontend
npm run dev

# Build
npm run build

# Lint
npm run lint
```

### Full Stack
```bash
# Terminal 1: Backend
cd backend && npm run dev

# Terminal 2: Frontend
cd frontend && npm run dev

# Terminal 3: Open browser
start http://localhost:3000
```

---

**Testing Complete!** 🎉

Once all items are checked, the application is ready for production deployment.
