# Docker Deployment Guide

Run the entire Blanca Correa Law website stack using Docker.

---

## Quick Start

### Prerequisites
- Docker Desktop installed
- Docker Compose installed
- 4GB+ RAM available

### 1. Configure Environment

```bash
# Copy environment template
cp .env.docker.example .env

# Edit .env with your settings
# Required: DB_PASSWORD, EMAIL_* variables
```

### 2. Start All Services

```bash
# Build and start all containers
docker-compose up -d

# View logs
docker-compose logs -f

# Check status
docker-compose ps
```

### 3. Access Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **Database**: localhost:5432

### 4. Stop Services

```bash
# Stop all containers
docker-compose down

# Stop and remove volumes (deletes data)
docker-compose down -v
```

---

## Services

### PostgreSQL Database
- **Container**: `blanca-correa-db`
- **Port**: 5432
- **Database**: `blanca_correa_law`
- **Data**: Persisted in `postgres_data` volume

### Backend API
- **Container**: `blanca-correa-api`
- **Port**: 3001
- **Health Check**: http://localhost:3001/health

### Frontend
- **Container**: `blanca-correa-frontend`
- **Port**: 3000
- **Health Check**: http://localhost:3000

---

## Common Commands

### View Logs

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f backend
docker-compose logs -f frontend
docker-compose logs -f postgres
```

### Restart Services

```bash
# Restart all
docker-compose restart

# Restart specific service
docker-compose restart backend
```

### Rebuild Containers

```bash
# Rebuild all
docker-compose up -d --build

# Rebuild specific service
docker-compose up -d --build backend
```

### Execute Commands in Containers

```bash
# Backend shell
docker-compose exec backend sh

# Database shell
docker-compose exec postgres psql -U postgres -d blanca_correa_law

# Run migration
docker-compose exec backend npm run migrate:up
```

---

## Database Management

### Access Database

```bash
docker-compose exec postgres psql -U postgres -d blanca_correa_law
```

### Run Queries

```sql
-- View recent consultations
SELECT * FROM consultations ORDER BY created_at DESC LIMIT 10;

-- Check email logs
SELECT * FROM email_logs ORDER BY created_at DESC LIMIT 10;

-- Database size
SELECT pg_size_pretty(pg_database_size('blanca_correa_law'));
```

### Backup Database

```bash
# Create backup
docker-compose exec postgres pg_dump -U postgres blanca_correa_law > backup.sql

# Restore backup
docker-compose exec -T postgres psql -U postgres blanca_correa_law < backup.sql
```

---

## Development Workflow

### 1. Make Code Changes

Edit files in `frontend/` or `backend/` directories.

### 2. Rebuild Affected Service

```bash
# If backend changed
docker-compose up -d --build backend

# If frontend changed
docker-compose up -d --build frontend
```

### 3. View Logs

```bash
docker-compose logs -f backend
```

### 4. Test Changes

Visit http://localhost:3000 and test functionality.

---

## Troubleshooting

### Container Won't Start

```bash
# Check logs
docker-compose logs backend

# Check if port is in use
netstat -ano | findstr :3001  # Windows
lsof -i :3001                 # Mac/Linux

# Remove and recreate
docker-compose down
docker-compose up -d
```

### Database Connection Issues

```bash
# Check if database is healthy
docker-compose ps

# Check database logs
docker-compose logs postgres

# Restart database
docker-compose restart postgres
```

### Email Not Sending

1. Check environment variables in `.env`
2. Verify email credentials
3. Check backend logs:
```bash
docker-compose logs backend | grep -i email
```

### Frontend Build Errors

```bash
# Check logs
docker-compose logs frontend

# Rebuild with no cache
docker-compose build --no-cache frontend
docker-compose up -d frontend
```

---

## Production Deployment with Docker

### Using Docker Compose on Server

**1. Set up server (Ubuntu example)**

```bash
# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

**2. Deploy application**

```bash
# Clone repository
git clone https://github.com/yourusername/blanca-correa-law.git
cd blanca-correa-law

# Configure environment
cp .env.docker.example .env
nano .env  # Edit with production values

# Start services
docker-compose -f docker-compose.prod.yml up -d
```

**3. Set up reverse proxy (Nginx)**

```nginx
server {
    listen 80;
    server_name blancacorrealaw.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location /api {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

---

## Environment Variables

### Required Variables

```env
# Database
DB_PASSWORD=secure_password_here

# Email
EMAIL_HOST=smtp.sendgrid.net
EMAIL_PORT=587
EMAIL_USER=apikey
EMAIL_PASSWORD=your_sendgrid_api_key
EMAIL_FROM=info@blancacorrealaw.com
ATTORNEY_EMAIL=blanca@blancacorrealaw.com

# Security
JWT_SECRET=$(openssl rand -hex 32)
SESSION_SECRET=$(openssl rand -hex 32)
```

---

## Monitoring

### Health Checks

```bash
# Backend health
curl http://localhost:3001/health

# Frontend health
curl http://localhost:3000

# Database health
docker-compose exec postgres pg_isready
```

### Resource Usage

```bash
# Container stats
docker stats

# Disk usage
docker system df

# Clean up unused resources
docker system prune -a
```

---

## Scaling

### Scale Services

```bash
# Run multiple backend instances
docker-compose up -d --scale backend=3

# Note: Frontend scaling requires load balancer
```

### Add Load Balancer

Create `docker-compose.lb.yml`:

```yaml
version: '3.8'

services:
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
    depends_on:
      - backend
```

---

## Backup & Restore

### Automated Backups

Create backup script `backup.sh`:

```bash
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
docker-compose exec -T postgres pg_dump -U postgres blanca_correa_law > "backup_${DATE}.sql"
# Upload to S3 or backup service
```

### Restore from Backup

```bash
docker-compose exec -T postgres psql -U postgres blanca_correa_law < backup_20241130.sql
```

---

## Security Best Practices

- [ ] Use secrets management for sensitive data
- [ ] Run containers as non-root user
- [ ] Keep images updated
- [ ] Scan images for vulnerabilities
- [ ] Use private registry for production
- [ ] Enable Docker Content Trust
- [ ] Limit container resources
- [ ] Use network isolation

---

## Performance Optimization

### Image Size

```bash
# Check image sizes
docker images

# Use multi-stage builds (already implemented)
# Use alpine base images (already implemented)
```

### Build Cache

```bash
# Use BuildKit for better caching
DOCKER_BUILDKIT=1 docker-compose build
```

### Resource Limits

Add to `docker-compose.yml`:

```yaml
services:
  backend:
    deploy:
      resources:
        limits:
          cpus: '1'
          memory: 512M
        reservations:
          cpus: '0.5'
          memory: 256M
```

---

## Useful Docker Commands

```bash
# Remove all stopped containers
docker container prune

# Remove unused images
docker image prune -a

# Remove unused volumes
docker volume prune

# View container processes
docker-compose top

# Execute command in running container
docker-compose exec backend npm run migrate:up

# Copy files from container
docker cp blanca-correa-api:/app/logs ./logs

# View container resource usage
docker stats --no-stream
```

---

## Support

For Docker-specific issues:
- Docker Docs: https://docs.docker.com
- Docker Compose Docs: https://docs.docker.com/compose

For application issues, see:
- INTEGRATION-GUIDE.md
- DEPLOYMENT-GUIDE.md
- TROUBLESHOOTING.md

---

**Docker Version**: 20.10+  
**Docker Compose Version**: 2.0+  
**Last Updated**: November 30, 2024
