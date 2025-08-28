# Admin Dashboard

A standalone React admin application for user management that connects to the shared Supabase backend.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📋 Features

- **User Management**: View all registered users with names and avatars
- **Real-time Data**: Automatically syncs with the shared database
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Built with Tailwind CSS and shadcn/ui components

## 🏗️ Architecture

This admin app is completely independent from the main client app but shares the same Supabase backend. This ensures:
- Data consistency across both applications
- Independent deployment and scaling
- Isolated feature development

## 🗄️ Database Access

The admin app has read-only access to the `profiles` table, displaying:
- User full names
- Profile avatars
- User IDs (truncated for security)
- Account creation dates
- Total user statistics

## 🎨 UI Components

Built with reusable components:
- `UsersList`: Main dashboard component
- `Avatar`: User profile picture display
- `Card`: Container components for user information

## 🔧 Configuration

### Supabase Connection
The app connects to the shared Supabase project:
- URL: `https://qtglsxsscxqpividdfsj.supabase.co`
- Uses the same database as the main client app
- Configured in `src/integrations/supabase/client.ts`

### Development
- Port: Usually runs on `http://localhost:5174`
- Hot reload enabled for fast development
- TypeScript strict mode enabled

## 📱 Responsive Design

The user grid automatically adapts:
- Mobile: 1 column
- Tablet: 2 columns  
- Desktop: 3 columns
- Large screens: 4 columns

## 🚀 Deployment

Build the app for production:
```bash
npm run build
```

Deploy the `dist/` folder to your hosting platform. The app is a static SPA that can be deployed to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- Any static hosting service

## 🔄 Relationship to Main App

This admin app is designed to work alongside the main client application:
- **Independent**: Can be developed and deployed separately
- **Connected**: Shares the same database and user data
- **Complementary**: Provides admin functionality not available in the client app

Both applications can run simultaneously without conflicts.