# 🏠 Estatein — Real Estate Platform

**Estatein** is a modern real estate platform designed to help users find and purchase their dream properties with ease. Built with a powerful stack of frontend and backend technologies, it offers a smooth, animated, and responsive user experience.

---

## 🛠️ Tech Stack

### 🧱 Frontend
- **Vite** — Lightning-fast build tool
- **React** — Component-based UI library
- **TypeScript** — Strong typing for better code maintainability
- **React Hook Form** — Efficient and type-safe form handling
- **Framer Motion** — Beautiful, declarative animations
- **React Router DOM** — Client-side routing
- **SCSS** — Modular and reusable styling
- **TanStack Query (React Query)** — Data fetching and caching
- **Axios** — HTTP client for API requests

### 💻 Backend
- **Node.js** — JavaScript runtime
- **Express** — Minimal and flexible web framework
- **PostgreSQL** — Relational database for structured data
- **TypeScript** — Type safety on the server side

---

## 📦 Features

- Smooth page transitions and animations  
- Responsive design for mobile and desktop  
- Interactive team member chat system  
- Client testimonials with slider  
- Detailed property search and filtering  
- Form handling with validation  
- State management using React hooks  
- API communication via Axios  

---

## 🚀 How to Run the Project

### 1. Clone the repository:
```bash
git clone https://github.com/Guessler/estatein.git
```

### 2. Navigate into the project folder:
```bash
cd estatein
```

### 3. Install dependencies:
```bash
npm install
```

### 4. Create a `.env` file in the root directory:
```env
VITE_DB_HOST=YOUR_HOST
VITE_DB_PORT=YOUR_PORT
VITE_DB_USER=YOUR_USERNAME
VITE_DB_PASSWORD=YOUR_DB_PASSWORD
VITE_DB_NAME=estatein
```

### 5. Set up the PostgreSQL database:
Open your PostgreSQL CLI or GUI and run:
```sql
CREATE DATABASE estatein;
```

### 6. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`, and the backend (if configured) will run on `http://localhost:3000`.
