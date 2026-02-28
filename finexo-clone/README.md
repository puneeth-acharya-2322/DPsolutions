# Finexo Clone

A pixel-perfect clone of [finexo-template.webflow.io](https://finexo-template.webflow.io/) built with React 18, Vite, TailwindCSS, and Node.js/Express.

## Tech Stack

- **Frontend**: React 18, Vite, TailwindCSS, React Router DOM, Axios
- **Backend**: Node.js, Express.js, CORS

## Getting Started

### Install all dependencies
```bash
npm run install:all
```

### Development (runs both frontend + backend)
```bash
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

### Build for production
```bash
npm run build
```

## Project Structure

```
finexo-clone/
├── frontend/     # React 18 + Vite + TailwindCSS
└── backend/      # Node.js + Express REST API
```

## Pages

- `/` — Home
- `/features` — Features
- `/blogs` — Blog listing
- `/pricing` — Pricing plans
- `/contact` — Contact form
- `/about` — About page

## API Endpoints

| Method | Endpoint      | Description        |
|--------|---------------|--------------------|
| POST   | /api/contact  | Contact form       |
| GET    | /api/health   | Health check       |
