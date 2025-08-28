# Dual-App Project: Client & Admin Dashboard

This project consists of two independent React applications that share the same Supabase backend and database:

1. **Client App** - Main application for end users (existing app in root directory)
2. **Admin App** - Administrative dashboard for user management (located in `admin-app/` directory)

## 🏗️ Architecture Overview

```
project-root/
├── src/                          # Client App (main application)
├── admin-app/                    # Admin App (standalone project)
├── shared-backend/               # Shared backend configuration
│   ├── supabase-config.ts        # Common Supabase client setup
│   └── types.ts                  # Shared database types
└── supabase/                     # Supabase project configuration
```

Both applications connect to the same Supabase database, ensuring data consistency across the ecosystem.

## 📋 Features

### Client App Features
- User authentication and profiles
- Issue tracking and management
- Dashboard with analytics
- Payment processing
- Resident directory

### Admin App Features
- **User Management Dashboard**: View all registered users
- **User Profiles Display**: Shows user names and avatars
- **User Statistics**: Total user count and join dates
- **Responsive Design**: Works on desktop and mobile devices
- **Real-time Data**: Automatically syncs with the shared database

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Access to the Supabase project

### Running the Client App

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The client app will be available at `http://localhost:5173`

### Running the Admin App

```bash
# Navigate to admin app directory
cd admin-app

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

The admin app will be available at `http://localhost:5174` (or the next available port)

### Running Both Apps Simultaneously

You can run both applications at the same time on different ports:

```bash
# Terminal 1: Start client app
npm run dev

# Terminal 2: Start admin app
cd admin-app && npm run dev
```

## 🗄️ Database Schema

Both apps use the same Supabase database with the following key tables:

### `profiles` Table
```sql
profiles (
  id: string (primary key)
  user_id: string (references auth.users)
  full_name: string (nullable)
  avatar_url: string (nullable)
  created_at: timestamp
  updated_at: timestamp
)
```

### `issues` Table
```sql
issues (
  id: string (primary key)
  title: string
  description: string
  category: string
  priority: enum ('low', 'medium', 'high')
  status: enum ('pending', 'in-progress', 'resolved')
  submitted_by: string
  unit: string (nullable)
  created_at: timestamp
  updated_at: timestamp
)
```

## 🔧 Configuration

### Shared Backend Configuration

The `shared-backend/` directory contains:
- **supabase-config.ts**: Centralized Supabase client configuration
- **types.ts**: TypeScript definitions for database schema

Both apps reference these shared configurations to ensure consistency.

### Environment Variables

Both apps use the same Supabase project credentials (hardcoded in the shared config):
- **Supabase URL**: `https://qtglsxsscxqpividdfsj.supabase.co`
- **Supabase Anon Key**: Included in the configuration files

> **Note**: In production, these should be moved to environment variables for security.

## 🎨 Tech Stack

Both applications use the same modern tech stack:

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Backend**: Supabase (PostgreSQL + Auth + Real-time)
- **State Management**: TanStack Query (React Query)
- **Routing**: React Router DOM
- **Icons**: Lucide React

## 📱 Admin App Specific Features

### User Management Dashboard
- **Grid Layout**: Responsive card-based user display
- **User Information**: Shows full name, avatar, user ID, and join date
- **Loading States**: Skeleton loading animations
- **Error Handling**: Graceful error states with retry functionality
- **Empty States**: Informative messages when no users exist

### User Display Components
- **Avatar Support**: Shows user avatars or initials fallback
- **Responsive Design**: Adapts from 1 to 4 columns based on screen size
- **Real-time Updates**: Automatically reflects database changes
- **User Statistics**: Total user count display

## 🔐 Authentication & Security

- Both apps use Supabase Auth for user management
- Row Level Security (RLS) policies control data access
- Admin app has read-only access to user profiles
- Client app has full CRUD access based on user permissions

## 🚀 Deployment

### Client App Deployment
Follow the existing deployment process for the main application.

### Admin App Deployment
The admin app can be deployed independently:

```bash
cd admin-app
npm run build
# Deploy the dist/ folder to your hosting platform
```

### Recommended Deployment Strategy
- Deploy client app to main domain (e.g., `app.yoursite.com`)
- Deploy admin app to subdomain (e.g., `admin.yoursite.com`)
- Both apps connect to the same Supabase backend

## 🔄 Data Synchronization

Since both apps use the same database:
- User changes in the client app are immediately visible in the admin app
- No additional synchronization is needed
- Real-time subscriptions can be added for live updates

## 🛠️ Development Guidelines

### Adding New Features
1. **Shared Database Changes**: Update both `src/integrations/supabase/types.ts` and `admin-app/src/integrations/supabase/types.ts`
2. **Client App Features**: Add to the main `src/` directory
3. **Admin Features**: Add to the `admin-app/src/` directory
4. **Shared Logic**: Consider creating shared utilities in `shared-backend/`

### Code Organization
- Keep apps independent but maintain consistent code styles
- Reuse UI components by copying between projects
- Maintain separate package.json files for each app
- Use the same linting and formatting rules

## 📈 Monitoring & Analytics

- Both apps can use the same analytics service
- Supabase provides built-in database analytics
- Consider adding application-specific monitoring for each app

## 🤝 Contributing

When contributing to this project:
1. Test both apps after making database schema changes
2. Update TypeScript types in both applications
3. Maintain consistency in UI/UX between apps
4. Document any new features in this README

## 📞 Support

For issues related to:
- **Client App**: Check the main application logs and Supabase dashboard
- **Admin App**: Check browser console and network requests
- **Database Issues**: Monitor Supabase dashboard and logs
- **Shared Backend**: Verify configuration in `shared-backend/` directory