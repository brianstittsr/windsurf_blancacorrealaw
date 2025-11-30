# Blanca Correa Law - Backend API

RESTful API backend for the Blanca Correa Law Immigration Website.

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **Email**: Nodemailer
- **Validation**: express-validator
- **Security**: Helmet, CORS, Rate Limiting

## Features

- ✅ RESTful API endpoints
- ✅ PostgreSQL database integration
- ✅ Email notifications (consultation confirmations, contact forms)
- ✅ Form validation
- ✅ Rate limiting
- ✅ Security headers
- ✅ Error handling
- ✅ TypeScript for type safety

## Prerequisites

- Node.js 18+ 
- PostgreSQL 14+
- npm or yarn

## Getting Started

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Set Up Database

Create a PostgreSQL database:

```bash
createdb blanca_correa_law
```

Run the migration to create tables:

```bash
psql -d blanca_correa_law -f migrations/001_initial_schema.sql
```

### 3. Configure Environment

Copy the example environment file:

```bash
cp .env.example .env
```

Edit `.env` and configure your settings:

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

**Note**: For Gmail, you'll need to create an [App Password](https://support.google.com/accounts/answer/185833).

### 4. Run the Server

Development mode (with auto-reload):

```bash
npm run dev
```

Production mode:

```bash
npm run build
npm start
```

The API will be available at `http://localhost:3001`

## API Endpoints

### Health Check
- `GET /health` - Server health status

### Consultations
- `POST /api/consultations` - Submit consultation request
- `GET /api/consultations/:id` - Get consultation by ID

### Contact
- `POST /api/contact` - Submit contact form

### Assessments
- `POST /api/assessments` - Save assessment results
- `GET /api/assessments/stats` - Get assessment statistics

## API Documentation

### POST /api/consultations

Submit a consultation booking request.

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "(919) 555-1234",
  "language": "en",
  "consultationType": "in-person",
  "preferredDate": "2024-12-15",
  "preferredTime": "10:00",
  "alternateDate": "2024-12-16",
  "alternateTime": "14:00",
  "caseType": "Family-Based Immigration",
  "urgency": "normal",
  "description": "I need help with spouse visa application",
  "hearAboutUs": "google"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Consultation request submitted successfully",
  "data": {
    "id": "uuid",
    "createdAt": "2024-11-30T10:00:00Z"
  }
}
```

### POST /api/contact

Submit a contact form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "(919) 555-1234",
  "language": "en",
  "subject": "Question about services",
  "message": "I have a question about..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact form submitted successfully",
  "data": {
    "id": "uuid",
    "createdAt": "2024-11-30T10:00:00Z"
  }
}
```

### POST /api/assessments

Save assessment results.

**Request Body:**
```json
{
  "email": "john@example.com",
  "answers": {
    "immigrationGoal": "family",
    "currentStatus": "outside-us",
    "familyInUS": "yes"
  },
  "recommendations": [
    {
      "pathway": "Family-Based Immigration",
      "priority": "high",
      "description": "..."
    }
  ]
}
```

## Database Schema

### Tables

- **consultations** - Consultation booking requests
- **contact_submissions** - Contact form submissions
- **assessment_results** - Immigration assessment results
- **email_logs** - Email sending logs

See `migrations/001_initial_schema.sql` for full schema.

## Email Templates

Email templates are defined in `src/config/email.ts`:

- **consultationConfirmation** - Sent to client after booking
- **consultationNotification** - Sent to attorney about new booking
- **contactNotification** - Sent to attorney about contact form

## Security

- **Helmet**: Security headers
- **CORS**: Cross-origin resource sharing
- **Rate Limiting**: 100 requests per 15 minutes per IP
- **Input Validation**: express-validator
- **SQL Injection Protection**: Parameterized queries

## Error Handling

All endpoints return consistent error responses:

```json
{
  "success": false,
  "error": "Error message"
}
```

## Development

### Project Structure

```
backend/
├── src/
│   ├── config/
│   │   ├── database.ts      # Database connection
│   │   └── email.ts          # Email configuration
│   ├── routes/
│   │   ├── consultation.routes.ts
│   │   ├── contact.routes.ts
│   │   └── assessment.routes.ts
│   ├── services/
│   │   └── email.service.ts  # Email sending logic
│   └── server.ts             # Main server file
├── migrations/
│   └── 001_initial_schema.sql
├── package.json
├── tsconfig.json
└── .env.example
```

### Scripts

- `npm run dev` - Start development server with nodemon
- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run compiled JavaScript
- `npm run migrate:up` - Run database migrations
- `npm run migrate:down` - Rollback database migrations

## Deployment

### Environment Variables

Ensure all environment variables are set in production:

- `NODE_ENV=production`
- `DATABASE_URL` - PostgreSQL connection string
- `EMAIL_*` - Email configuration
- `FRONTEND_URL` - Frontend URL for CORS

### Database Migration

Run migrations on production database:

```bash
psql -d your_production_db -f migrations/001_initial_schema.sql
```

### Process Manager

Use PM2 or similar for production:

```bash
npm install -g pm2
pm2 start dist/server.js --name blanca-correa-api
```

## Monitoring

- Check `/health` endpoint for server status
- Monitor `email_logs` table for email delivery
- Review server logs for errors

## Support

For questions or issues, contact the development team.

---

**Version**: 1.0.0  
**Last Updated**: November 30, 2024
