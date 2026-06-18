# OctoFit Tracker - Multi-tier Application

A modern full-stack application for activity tracking and competitive leaderboards.

## Project Structure

```
octofit-tracker/
├── backend/                    # Node.js + Express + TypeScript API
│   ├── src/
│   │   ├── index.ts           # Main server entry point
│   │   ├── db.ts              # MongoDB connection
│   │   └── models/
│   │       └── User.ts        # Mongoose User model
│   ├── package.json           # Backend dependencies
│   ├── tsconfig.json          # TypeScript configuration
│   └── .env                   # Environment variables
│
└── frontend/                   # React 19 + Vite
    ├── src/
    │   ├── main.jsx           # Application entry point
    │   ├── App.jsx            # Main App component
    │   └── App.css            # Styling
    ├── index.html             # HTML template
    ├── package.json           # Frontend dependencies
    ├── vite.config.js         # Vite configuration
    └── .env                   # Environment variables
```

## Technology Stack

### Frontend Tier (Port 5173)
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Bootstrap** - CSS framework

### Backend Tier (Port 8000)
- **Node.js (LTS)** - Runtime
- **Express** - Web framework
- **TypeScript** - Type safety
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin support

### Data Tier (Port 27017)
- **MongoDB** - NoSQL database

## Installation

### Prerequisites
- Node.js (LTS) - Required for both frontend and backend
- MongoDB - Required for the data tier

### Setup

1. **Frontend Setup**
   ```bash
   cd octofit-tracker/frontend
   npm install
   npm run dev        # Runs on port 5173
   ```

2. **Backend Setup**
   ```bash
   cd octofit-tracker/backend
   npm install
   npm run dev        # Runs on port 8000
   ```

### Build for Production

**Frontend:**
```bash
cd octofit-tracker/frontend
npm run build
npm run preview
```

**Backend:**
```bash
cd octofit-tracker/backend
npm run build
npm start
```

## Environment Configuration

### Frontend (.env)
```
VITE_API_URL=http://localhost:8000
```

### Backend (.env)
```
PORT=8000
MONGODB_URI=mongodb://localhost:27017/octofit-tracker
NODE_ENV=development
```

## API Endpoints

- `GET /api/health` - Health check endpoint

## Development

### Available Scripts

**Frontend:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

**Backend:**
- `npm run dev` - Start development server with hot reload
- `npm run build` - Compile TypeScript to JavaScript
- `npm run start` - Run compiled backend
- `npm run watch` - Watch TypeScript files for changes

## Next Steps

1. **Database Setup** - Ensure MongoDB is running on port 27017
2. **Features to Implement**:
   - User authentication and profiles
   - Activity logging and tracking
   - Team creation and management
   - Competitive leaderboard
   - Personalized workout suggestions

## Port Configuration

The application uses the following port assignments:
- **Frontend**: 5173 (Public)
- **Backend API**: 8000 (Public)
- **MongoDB**: 27017 (Private)

## Notes

- The frontend uses Bootstrap for styling
- The backend uses TypeScript for type safety
- MongoDB Mongoose is configured for data modeling
- CORS is enabled for frontend-backend communication
