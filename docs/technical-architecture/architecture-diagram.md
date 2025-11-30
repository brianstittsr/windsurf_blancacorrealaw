# Architecture Diagram for Blanca Correa Law Website

```
+--------------------------------------------------------------+
|                        CLIENT LAYER                          |
|                                                              |
|  +------------------+  +------------------+  +-------------+ |
|  |  Web Browsers    |  |  Mobile Browsers |  |  Screen     | |
|  |  (Desktop)       |  |  (iOS/Android)   |  |  Readers    | |
|  +------------------+  +------------------+  +-------------+ |
+--------------------------------------------------------------+
                              |
                              | HTTPS
                              v
+--------------------------------------------------------------+
|                      DELIVERY LAYER                          |
|                                                              |
|  +------------------+  +------------------+                  |
|  |  CDN             |  |  Edge Functions  |                  |
|  |  (Static Assets) |  |  (Optimization)  |                  |
|  +------------------+  +------------------+                  |
+--------------------------------------------------------------+
                              |
                              | HTTPS
                              v
+--------------------------------------------------------------+
|                     FRONTEND LAYER                           |
|                                                              |
|  +------------------+  +------------------+  +-------------+ |
|  |  Next.js         |  |  React           |  |  i18n       | |
|  |  (SSR/SSG)       |  |  Components      |  |  Framework  | |
|  +------------------+  +------------------+  +-------------+ |
+--------------------------------------------------------------+
                              |
                              | API Calls
                              v
+--------------------------------------------------------------+
|                      BACKEND LAYER                           |
|                                                              |
|  +------------------+  +------------------+  +-------------+ |
|  |  Express API     |  |  Authentication  |  | Serverless  | |
|  |  Server          |  |  & Authorization |  | Functions   | |
|  +------------------+  +------------------+  +-------------+ |
+--------------------------------------------------------------+
                              |
                              | Database Queries
                              v
+--------------------------------------------------------------+
|                       DATA LAYER                             |
|                                                              |
|  +------------------+  +------------------+  +-------------+ |
|  |  PostgreSQL      |  |  Document Store  |  |  File      | |
|  |  (Structured)    |  |  (Content)       |  |  Storage   | |
|  +------------------+  +------------------+  +-------------+ |
+--------------------------------------------------------------+
                              |
                              | Integration
                              v
+--------------------------------------------------------------+
|                    INTEGRATION LAYER                         |
|                                                              |
|  +------------------+  +------------------+  +-------------+ |
|  |  Calendar API    |  |  Email Service   |  |  Analytics  | |
|  |  Integration     |  |  Integration     |  |  Services   | |
|  +------------------+  +------------------+  +-------------+ |
+--------------------------------------------------------------+
```

## Key Components

### Client Layer
- **Web Browsers (Desktop)**: Chrome, Firefox, Safari, Edge
- **Mobile Browsers**: iOS Safari, Android Chrome
- **Screen Readers**: JAWS, NVDA, VoiceOver for accessibility

### Delivery Layer
- **CDN**: Content Delivery Network for static assets
- **Edge Functions**: For performance optimization and regional customization

### Frontend Layer
- **Next.js**: Server-side rendering and static site generation
- **React Components**: UI component library
- **i18n Framework**: Internationalization for bilingual support

### Backend Layer
- **Express API Server**: RESTful API endpoints
- **Authentication & Authorization**: Security services
- **Serverless Functions**: For specific isolated features

### Data Layer
- **PostgreSQL**: Structured data storage
- **Document Store**: Content management
- **File Storage**: Secure document storage

### Integration Layer
- **Calendar API Integration**: For consultation scheduling
- **Email Service Integration**: For notifications and communications
- **Analytics Services**: For tracking user behavior and conversions

## Data Flow

1. **Client Request**: User accesses website via browser
2. **CDN Delivery**: Static assets served from CDN
3. **Frontend Rendering**: Next.js renders page (SSR or SSG)
4. **API Communication**: Frontend makes API calls to backend
5. **Data Processing**: Backend processes requests and queries database
6. **Integration**: Backend communicates with third-party services
7. **Response**: Data returned to frontend for display
8. **Client Interaction**: User interacts with rendered page

## Bilingual Architecture Flow

1. **Language Detection**: System detects user's preferred language
2. **Content Selection**: Appropriate language content is selected
3. **Rendering**: UI components render with correct language strings
4. **User Toggle**: User can switch language via toggle
5. **Context Preservation**: System maintains page context during switch
6. **URL Update**: URL updated to reflect current language
7. **Preference Storage**: Language preference stored for future visits
