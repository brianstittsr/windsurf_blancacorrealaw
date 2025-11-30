# Blanca Correa Law - Immigration Website

A modern, bilingual immigration law website with interactive tools, consultation booking, and comprehensive information about immigration services in North Carolina.

![Status](https://img.shields.io/badge/status-production--ready-green)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-proprietary-red)

---

## 🎯 Project Overview

**Mission**: Provide accessible, bilingual immigration legal services with modern digital tools to help clients navigate their immigration journey.

**Target Audience**: 
- Potential immigration clients (primary)
- Family members supporting immigration cases (secondary)
- Spanish-speaking community in North Carolina

**Key Features**:
- ✅ Fully bilingual (English/Spanish)
- ✅ Interactive immigration pathway assessment
- ✅ Online consultation booking
- ✅ Mobile-responsive design
- ✅ Professional email notifications
- ✅ Secure data handling

---

## 🚀 Quick Start

### Option 1: Docker (Recommended)

```bash
# Clone repository
git clone https://github.com/yourusername/blanca-correa-law.git
cd blanca-correa-law

# Configure environment
cp .env.docker.example .env
# Edit .env with your settings

# Start all services
docker-compose up -d

# Access application
# Frontend: http://localhost:3000
# Backend: http://localhost:3001
```

### Option 2: Local Development

**Prerequisites**: Node.js 18+, PostgreSQL 14+

```bash
# Setup database
createdb blanca_correa_law
cd backend
psql -d blanca_correa_law -f migrations/001_initial_schema.sql

# Backend
cd backend
cp .env.example .env
# Edit .env
npm install
npm run dev

# Frontend (new terminal)
cd frontend
cp .env.local.example .env.local
npm install
npm run dev
```

---

## 📁 Project Structure

```
BlancaCorreaLawWebApp/
├── frontend/                    # Next.js 15 frontend
│   ├── src/
│   │   ├── app/                # 9 pages (App Router)
│   │   ├── components/         # Reusable components
│   │   └── lib/                # Utilities & API client
│   └── public/locales/         # i18n translations
│
├── backend/                     # Express.js API
│   ├── src/
│   │   ├── config/             # Database & email
│   │   ├── routes/             # API endpoints
│   │   └── services/           # Business logic
│   └── migrations/             # Database schema
│
├── docs/                        # Comprehensive documentation
│   ├── brief.md                # Project requirements
│   ├── prd.md                  # Product requirements
│   ├── wireframes/             # UI wireframes
│   ├── visual-style-guide/     # Design system
│   └── technical-architecture/ # Technical specs
│
├── .github/workflows/           # CI/CD pipelines
├── docker-compose.yml           # Docker configuration
├── DEPLOYMENT-GUIDE.md          # Deployment instructions
├── INTEGRATION-GUIDE.md         # API integration guide
├── PRODUCTION-CHECKLIST.md      # Pre-launch checklist
└── README.md                    # This file
```

---

## 🎨 Features

### Pages (9 Total)

1. **Homepage** (`/`)
   - Hero with immigration pathways
   - Key differentiators
   - Call-to-action sections

2. **About** (`/about`)
   - Attorney biography
   - Core values
   - Firm approach

3. **Services** (`/services`)
   - 6 service categories
   - Detailed descriptions
   - Process overview

4. **Contact** (`/contact`)
   - Contact form with API integration
   - Office information
   - Map integration ready

5. **Consultation Booking** (`/consultation`)
   - Multi-step form (3 steps)
   - Email confirmations
   - Urgency tracking

6. **Assessment Tool** (`/assessment`)
   - Interactive questionnaire
   - Personalized recommendations
   - Results saved to database

7-9. **Pathway Pages** (`/pathways/*`)
   - Family-based immigration
   - Employment visas
   - Citizenship & naturalization

### Backend API

**Endpoints**:
- `POST /api/consultations` - Book consultation
- `POST /api/contact` - Submit contact form
- `POST /api/assessments` - Save assessment results
- `GET /health` - Health check

**Features**:
- PostgreSQL database with 4 tables
- Email notifications (SendGrid/SMTP)
- Input validation
- Rate limiting
- Security headers

---

## 🛠 Technology Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **i18n**: next-i18next (ready)

### Backend
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL 14
- **Email**: Nodemailer
- **Validation**: express-validator

### DevOps
- **Containerization**: Docker & Docker Compose
- **CI/CD**: GitHub Actions
- **Hosting**: Vercel (frontend) + Heroku (backend)
- **Monitoring**: Built-in health checks

---

## 📖 Documentation

### Getting Started
- **README.md** (this file) - Project overview
- **INTEGRATION-GUIDE.md** - Frontend-backend integration
- **DOCKER-GUIDE.md** - Docker deployment

### Deployment
- **DEPLOYMENT-GUIDE.md** - Production deployment
- **PRODUCTION-CHECKLIST.md** - Pre-launch checklist
- **.github/workflows/** - CI/CD pipelines

### Development
- **frontend/README.md** - Frontend documentation
- **backend/README.md** - Backend API reference
- **docs/** - Comprehensive project docs

### Progress Tracking
- **PROJECT-STATUS.md** - Current project status
- **PROGRESS.md** - Detailed progress log
- **SESSION-SUMMARY.md** - Development summary

---

## 🔧 Configuration

### Environment Variables

**Backend** (`.env`):
```env
DATABASE_URL=postgresql://user:pass@localhost:5432/blanca_correa_law
EMAIL_HOST=smtp.sendgrid.net
EMAIL_USER=apikey
EMAIL_PASSWORD=your-sendgrid-api-key
ATTORNEY_EMAIL=blanca@blancacorrealaw.com
FRONTEND_URL=http://localhost:3000
```

**Frontend** (`.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

See `.env.example` files for complete configuration options.

---

## 🚢 Deployment

### Quick Deploy to Production

**Option 1: Vercel + Heroku**
```bash
# Deploy backend to Heroku
cd backend
heroku create blanca-correa-law-api
heroku addons:create heroku-postgresql:mini
git push heroku main

# Deploy frontend to Vercel
cd frontend
vercel --prod
```

**Option 2: Docker on VPS**
```bash
# On your server
git clone https://github.com/yourusername/blanca-correa-law.git
cd blanca-correa-law
cp .env.docker.example .env
# Edit .env
docker-compose -f docker-compose.prod.yml up -d
```

See **DEPLOYMENT-GUIDE.md** for detailed instructions.

---

## 🧪 Testing

### Run Tests Locally

```bash
# Backend
cd backend
npm test

# Frontend
cd frontend
npm test
```

### Manual Testing Checklist

- [ ] All 9 pages load correctly
- [ ] Contact form submits and sends email
- [ ] Consultation booking works end-to-end
- [ ] Assessment tool provides recommendations
- [ ] Mobile responsive on all pages
- [ ] Forms validate input correctly

---

## 📊 Project Status

**Completion**: 95% (Production-ready)

**Completed**:
- ✅ Frontend (9 pages)
- ✅ Backend API (3 endpoints)
- ✅ Database schema
- ✅ Email system
- ✅ Integration
- ✅ Docker configuration
- ✅ CI/CD pipelines
- ✅ Documentation

**Pending**:
- ⏳ PostgreSQL instance setup (15 min)
- ⏳ Email SMTP configuration (10 min)
- ⏳ Production deployment (1-2 hours)
- ⏳ Full i18n integration (optional)

---

## 🎯 Success Metrics

**Target Goals** (3 months post-launch):
- 30% increase in consultation bookings
- 25% visitor-to-lead conversion rate
- 70% assessment tool completion rate
- 90% Spanish-speaker satisfaction
- < 2 second page load time

**Tracking**:
- Google Analytics (ready to integrate)
- Database analytics queries
- Email delivery tracking

---

## 🔒 Security

- ✅ HTTPS enforced
- ✅ Helmet security headers
- ✅ CORS protection
- ✅ Rate limiting (100 req/15min)
- ✅ Input validation
- ✅ SQL injection protection
- ✅ XSS prevention
- ✅ Secure password hashing

---

## 🤝 Contributing

This is a proprietary project. For questions or issues:

1. Check documentation in `/docs`
2. Review troubleshooting guides
3. Contact project maintainer

---

## 📝 License

Proprietary - All rights reserved by Blanca Correa Law

---

## 👥 Team

**Development**: Built with modern best practices  
**Design**: "Pathways to Belonging" theme  
**Content**: Bilingual (English/Spanish)

---

## 📞 Support

### Technical Issues
- Check **INTEGRATION-GUIDE.md**
- Review **DEPLOYMENT-GUIDE.md**
- See **DOCKER-GUIDE.md** for Docker issues

### Application Issues
- Backend logs: `heroku logs --tail`
- Frontend logs: Vercel dashboard
- Database: `psql` connection

---

## 🗺 Roadmap

### Phase 1: Foundation ✅
- Project setup
- Design system
- Core pages
- Backend API

### Phase 2: Integration ✅
- API integration
- Email system
- Forms connected
- Docker setup

### Phase 3: Deployment (Current)
- Database setup
- Email configuration
- Production deployment
- Monitoring setup

### Phase 4: Enhancement (Future)
- Full i18n integration
- Blog/news section
- Client portal
- Advanced analytics

---

## 📚 Additional Resources

### External Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Express.js Docs](https://expressjs.com)
- [PostgreSQL Docs](https://www.postgresql.org/docs)
- [Docker Docs](https://docs.docker.com)

### Design Resources
- Visual Style Guide: `docs/visual-style-guide/`
- Wireframes: `docs/wireframes/`
- Component Specs: `docs/visual-style-guide/components.md`

### API Documentation
- Backend README: `backend/README.md`
- API Routes: `backend/src/routes/`
- Email Templates: `backend/src/config/email.ts`

---

## 🎉 Acknowledgments

Built with:
- Next.js 15
- Express.js
- PostgreSQL
- TailwindCSS
- TypeScript
- Docker

---

**Version**: 1.0.0  
**Status**: Production-Ready  
**Last Updated**: November 30, 2024  
**Built**: November 2024

---

## Quick Links

- 📖 [Full Documentation](./docs/)
- 🚀 [Deployment Guide](./DEPLOYMENT-GUIDE.md)
- 🔗 [Integration Guide](./INTEGRATION-GUIDE.md)
- ✅ [Production Checklist](./PRODUCTION-CHECKLIST.md)
- 🐳 [Docker Guide](./DOCKER-GUIDE.md)
- 📊 [Project Status](./PROJECT-STATUS.md)

**Ready to launch!** 🚀
