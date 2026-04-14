# Eventora

Simple event booking platform (frontend + Express/Mongo backend).

Quick overview

- Frontend: Vite + React (client/)
- Backend: Express + MongoDB (server/)

Features

- User authentication (JWT)
- Event listing and details
- Booking flow and payment success/failure pages

Getting started (local)

1. Clone the repo

```bash
git clone <repo-url>
cd eventora
```

2. Start the backend

```bash
cd server
npm install
# create a .env with the values below
npm run dev
```

3. Start the frontend

```bash
cd client
npm install
npm run dev
```

Environment variables

- Server (`server/.env`):
  - `MONGO_URI` - MongoDB connection string
  - `JWT_SECRET` - JWT signing secret
  - `SMTP_USER`, `SMTP_PASS` - mailer credentials (if used)
  - `CLIENT_URL` - frontend URL (for CORS)
- Client (`client/.env`):
  - `VITE_API_URL` - API base URL (e.g. `https://api.example.com`)

Scripts

- Server (`server/package.json`): `npm run dev` (nodemon), `npm start` (node index.js)
- Client (`client/package.json`): `npm run dev`, `npm run build`, `npm run preview`

Database seeding

- If present, run `node seed.js` from the `server` folder to populate sample data.

