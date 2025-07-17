# 🚀 FullStack Web Application

> A modern, scalable full-stack web application built with Django, React, Next.js, and Vite - showcasing the perfect blend of robust backend architecture and cutting-edge frontend technologies.

<div align="center">

[![GitHub last commit](https://img.shields.io/github/last-commit/mahdighadiriii/FullStack)](https://github.com/mahdighadiriii/FullStack/commits/main)
[![GitHub issues](https://img.shields.io/github/issues/mahdighadiriii/FullStack)](https://github.com/mahdighadiriii/FullStack/issues)
[![GitHub stars](https://img.shields.io/github/stars/mahdighadiriii/FullStack)](https://github.com/mahdighadiriii/FullStack/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/mahdighadiriii/FullStack)](https://github.com/mahdighadiriii/FullStack/network)
[![License](https://img.shields.io/github/license/mahdighadiriii/FullStack)](https://github.com/mahdighadiriii/FullStack/blob/main/LICENSE)

</div>

## 📋 Table of Contents

- [🎯 Project Overview](#-project-overview)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🏗️ Architecture](#️-architecture)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🔧 Installation](#-installation)
- [🧪 Testing](#-testing)
- [📱 API Documentation](#-api-documentation)
- [🌟 Key Highlights](#-key-highlights)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)

## 🎯 Project Overview

This full-stack application demonstrates modern web development practices by combining Django's powerful backend capabilities with React's dynamic frontend, enhanced by Next.js for SSR/SSG capabilities and Vite for lightning-fast development experience.

The project showcases:
- **RESTful API Design** with Django REST Framework
- **Modern Frontend Development** with React 18+ hooks and context
- **Server-Side Rendering** with Next.js for optimal SEO
- **Fast Development** with Vite's hot module replacement
- **Responsive Design** with modern CSS frameworks
- **Authentication & Authorization** with JWT tokens
- **Database Integration** with PostgreSQL/SQLite
- **Real-time Features** with WebSocket support

## ✨ Features

### 🔐 Authentication & Security
- JWT-based authentication system
- User registration and login
- Protected routes and middleware
- Password reset functionality
- Role-based access control

### 🎨 Modern UI/UX
- Responsive design for all devices
- Dark/Light mode toggle
- Smooth animations and transitions
- Intuitive navigation
- Loading states and error handling

### ⚡ Performance
- Server-side rendering with Next.js
- Code splitting and lazy loading
- Optimized bundle sizes with Vite
- Caching strategies
- Database query optimization

### 🔄 Real-time Features
- WebSocket connections
- Live notifications
- Real-time data updates
- Chat functionality (if applicable)

## 🛠️ Tech Stack

### Backend
- **Django** - Web framework for Python
- **Django REST Framework** - Powerful toolkit for building APIs
- **PostgreSQL** - Production database
- **Redis** - Caching and session storage
- **Celery** - Asynchronous task queue
- **JWT** - Authentication tokens

### Frontend
- **React 18+** - Modern JavaScript library
- **Next.js 13+** - React framework with SSR/SSG
- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React Query** - Data fetching and caching
- **React Hook Form** - Form handling
- **Framer Motion** - Animation library

### DevOps & Tools
- **Docker** - Containerization
- **GitHub Actions** - CI/CD pipeline
- **Nginx** - Web server and reverse proxy
- **Gunicorn** - Python WSGI HTTP server
- **ESLint & Prettier** - Code formatting
- **Jest & Cypress** - Testing frameworks

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   Database      │
│   (React/Next)  │◄──►│   (Django)      │◄──►│   (PostgreSQL)  │
│   Port: 3000    │    │   Port: 8000    │    │   Port: 5432    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │     Redis       │
                    │   (Cache)       │
                    │   Port: 6379    │
                    └─────────────────┘
```

## 🚀 Quick Start

### Prerequisites
- Python 3.8+
- Node.js 16+
- PostgreSQL 13+
- Redis (optional)

### Clone & Setup
```bash
# Clone the repository
git clone https://github.com/mahdighadiriii/FullStack.git
cd FullStack

# Backend setup
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt

# Frontend setup
cd ../frontend
npm install
# or
yarn install
```

### Environment Variables
Create `.env` files in both backend and frontend directories:

**Backend (.env)**
```bash
DEBUG=True
SECRET_KEY=your-secret-key
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
REDIS_URL=redis://localhost:6379/0
JWT_SECRET_KEY=your-jwt-secret
```

**Frontend (.env.local)**
```bash
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_WS_URL=ws://localhost:8000/ws
```

### Run the Application
```bash
# Terminal 1: Backend
cd backend
python manage.py migrate
python manage.py runserver

# Terminal 2: Frontend
cd frontend
npm run dev
```

Visit `http://localhost:3000` to see the application in action!

## 📁 Project Structure

```
FullStack/
├── backend/
│   ├── apps/
│   │   ├── authentication/
│   │   ├── users/
│   │   └── api/
│   ├── core/
│   │   ├── settings/
│   │   ├── urls.py
│   │   └── wsgi.py
│   ├── requirements.txt
│   └── manage.py
├── frontend/
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   └── forms/
│   ├── pages/
│   │   ├── api/
│   │   └── auth/
│   ├── hooks/
│   ├── utils/
│   ├── styles/
│   ├── package.json
│   └── next.config.js
├── docker-compose.yml
├── .github/
│   └── workflows/
└── README.md
```

## 🔧 Installation

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/mahdighadiriii/FullStack.git
   cd FullStack
   ```

2. **Backend Setup**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py createsuperuser
   ```

3. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

### Production Setup

1. **Using Docker**
   ```bash
   docker-compose up --build
   ```

2. **Manual Deployment**
   ```bash
   # Build frontend
   cd frontend
   npm run build
   
   # Collect static files
   cd ../backend
   python manage.py collectstatic
   
   # Run with Gunicorn
   gunicorn core.wsgi:application --bind 0.0.0.0:8000
   ```

## 🧪 Testing

### Backend Tests
```bash
cd backend
python manage.py test
# or with coverage
coverage run manage.py test
coverage report
```

### Frontend Tests
```bash
cd frontend
npm test
# or for e2e tests
npm run test:e2e
```

## 📱 API Documentation

### Authentication Endpoints
- `POST /api/auth/register/` - User registration
- `POST /api/auth/login/` - User login
- `POST /api/auth/logout/` - User logout
- `POST /api/auth/refresh/` - Refresh JWT token

### User Endpoints
- `GET /api/users/profile/` - Get user profile
- `PUT /api/users/profile/` - Update user profile
- `DELETE /api/users/profile/` - Delete user account

### Example API Call
```javascript
// Login example
const response = await fetch('/api/auth/login/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: 'user@example.com',
    password: 'password123'
  })
});

const data = await response.json();
```

## 🌟 Key Highlights

- **🔥 Modern Stack**: Latest versions of Django, React, and Next.js
- **⚡ Fast Development**: Vite for instant hot reloads
- **🎨 Beautiful UI**: Tailwind CSS with custom components
- **🔐 Secure**: JWT authentication with refresh tokens
- **📱 Responsive**: Mobile-first design approach
- **🚀 Production Ready**: Docker containers and CI/CD pipeline
- **🧪 Well Tested**: Comprehensive test coverage
- **📚 Documented**: Clear API documentation and code comments

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mahdi Ghadiri**
- GitHub: [@mahdighadiriii](https://github.com/mahdighadiriii)
- LinkedIn: [@mahdi-ghadiriii](https://www.linkedin.com/in/mahdi-ghadiriii)
- Email: mahdighadiriafzal@gmail.com

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ by [Mahdi Ghadiri](https://github.com/mahdighadiriii)

</div>