# Setup Options - Choose Your Path

You have 3 options to run the application. Choose based on your preference:

---

## ⚡ Option 1: Docker (Fastest - Recommended)

**Best for**: Quick testing, no PostgreSQL installation needed

**Time**: 5 minutes  
**Requirements**: Docker Desktop only

### Steps:

1. **Install Docker Desktop** (if not installed)
   - Download: https://www.docker.com/products/docker-desktop
   - Install and start Docker Desktop
   - Wait for Docker to be running

2. **Configure and Start**
   ```bash
   cd c:\Users\Buyer\Documents\CascadeProjects\BlancaCorreaLawWebApp
   
   # Copy environment file
   copy .env.docker.example .env
   
   # Edit .env with your email settings
   notepad .env
   
   # Start everything
   docker-compose up -d
   ```

3. **Access Application**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:3001/health
   - Database: Automatically created in Docker

4. **View Logs**
   ```bash
   docker-compose logs -f
   ```

5. **Stop When Done**
   ```bash
   docker-compose down
   ```

**Pros:**
- ✅ No PostgreSQL installation needed
- ✅ Everything configured automatically
- ✅ Isolated environment
- ✅ Easy to start/stop

**Cons:**
- ❌ Requires Docker Desktop (large download)
- ❌ Uses more system resources

---

## 🔧 Option 2: Local Installation (Full Control)

**Best for**: Development, full control over services

**Time**: 15-20 minutes  
**Requirements**: Node.js 18+, PostgreSQL 14+

### Steps:

1. **Install PostgreSQL**
   ```bash
   # Download installer
   # https://www.postgresql.org/download/windows/
   
   # Or use Chocolatey
   choco install postgresql14
   
   # Or use Scoop
   scoop install postgresql
   ```

2. **Set up Database**
   ```bash
   # Create database
   createdb blanca_correa_law
   
   # Run migration
   cd backend
   psql -d blanca_correa_law -f migrations/001_initial_schema.sql
   ```

3. **Configure Backend**
   ```bash
   cd backend
   copy .env.example .env
   notepad .env
   # Edit with your settings
   
   npm install
   npm run dev
   ```

4. **Configure Frontend** (new terminal)
   ```bash
   cd frontend
   copy .env.local.example .env.local
   
   npm install
   npm run dev
   ```

5. **Access Application**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:3001

**Pros:**
- ✅ Full control over all services
- ✅ Better for development
- ✅ Can use existing PostgreSQL
- ✅ Lower resource usage

**Cons:**
- ❌ More setup steps
- ❌ Need to install PostgreSQL
- ❌ Manual configuration

---

## ☁️ Option 3: Deploy to Cloud (Production)

**Best for**: Testing in production environment

**Time**: 30-60 minutes  
**Requirements**: GitHub account, Vercel account, Heroku account

### Steps:

1. **Push to GitHub**
   ```bash
   cd c:\Users\Buyer\Documents\CascadeProjects\BlancaCorreaLawWebApp
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/blanca-correa-law.git
   git push -u origin main
   ```

2. **Deploy Backend to Heroku**
   ```bash
   cd backend
   heroku create blanca-correa-law-api
   heroku addons:create heroku-postgresql:mini
   git push heroku main
   ```

3. **Deploy Frontend to Vercel**
   - Go to https://vercel.com
   - Import GitHub repository
   - Select `frontend` directory
   - Deploy

4. **Configure Environment Variables**
   - Set in Heroku dashboard
   - Set in Vercel dashboard

**Pros:**
- ✅ Production environment
- ✅ Automatic SSL
- ✅ No local resources used
- ✅ Can share with others

**Cons:**
- ❌ Longer setup time
- ❌ Requires accounts
- ❌ May have costs

---

## 📊 Comparison

| Feature | Docker | Local | Cloud |
|---------|--------|-------|-------|
| Setup Time | 5 min | 15-20 min | 30-60 min |
| PostgreSQL | ✅ Included | ❌ Install needed | ✅ Included |
| Cost | Free | Free | $7-12/month |
| Internet Required | No | No | Yes |
| Good for Development | ✅ | ✅✅ | ❌ |
| Good for Testing | ✅✅ | ✅ | ✅ |
| Good for Production | ❌ | ❌ | ✅✅ |

---

## 🎯 Recommendation

### For Quick Testing
→ **Use Docker** (Option 1)

### For Development
→ **Use Local Installation** (Option 2)

### For Production/Demo
→ **Deploy to Cloud** (Option 3)

---

## Next Steps After Setup

Once you have the application running:

1. **Test All Features**
   - Visit http://localhost:3000
   - Try the contact form
   - Book a consultation
   - Complete the assessment

2. **Check Email Delivery**
   - Verify emails are being sent
   - Check spam folder if needed

3. **Review the Code**
   - Explore the frontend pages
   - Check backend API routes
   - Review database schema

4. **Customize Content**
   - Update attorney information
   - Add real contact details
   - Customize email templates

---

## Need Help?

- **Docker Issues**: See DOCKER-GUIDE.md
- **Local Setup**: See QUICK-START.md
- **Deployment**: See DEPLOYMENT-GUIDE.md
- **Integration**: See INTEGRATION-GUIDE.md

---

**Choose your option and let's get started!** 🚀
