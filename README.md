# ARK Learning Arena — Monorepo

Professional, scalable architecture for ARK Learning Arena.

## Project Structure

```text
/ark-project
  /frontend      # React + Vite (Deploys to Vercel)
  /backend       # Express API (Deploys to Render)
  package.json   # Root orchestration
  README.md      # This file
```

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js 20+
- npm or bun

### 2. Installation
From the root directory, run:
```bash
npm install
npm run install:all
```

### 3. Environment Setup
Copy the `.env.example` files to `.env` in both directories and fill in the secrets.

- **Frontend**: `frontend/.env.example` -> `frontend/.env`
- **Backend**: `backend/.env.example` -> `backend/.env`

---

## 🛠️ Development

Run frontend and backend concurrently (or in separate terminals):

### Frontend
```bash
npm run dev:frontend
```
Runs at [http://localhost:8080](http://localhost:8080)

### Backend
```bash
npm run dev:backend
```
Runs at [http://localhost:3001](http://localhost:3001)

---

## 📦 Deployment

### Frontend (Vercel Ready)
- **Framework Preset**: Vite
- **Root Directory**: `frontend`
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Environment Variables**: Add `VITE_API_URL` (points to Render backend).

### Backend (Render Ready)
- **Runtime**: Node
- **Root Directory**: `backend`
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Environment Variables**: Add `PORT`, `FRONTEND_URL`, `SMTP_USER`, `SMTP_PASS`, etc.

---

## 🛡️ Security & Scalability
- **Environment Safety**: Credentials are never committed.
- **CORS**: Properly configured for production domains.
- **Rate Limiting**: Protection against spam.
- **Monorepo**: Independent scaling for frontend and backend.
