# ReLoop — Smart E-Waste & Circular Tech Hub

A MERN-stack student project prototype that helps people discover e-waste collection options, submit pickup requests, and review recycling activity.

## Problem statement
People may not know where to take unwanted electronics or how to arrange responsible collection. ReLoop provides a central interface for discovering recycling options and submitting pickup requests.

## Target users
- Residents who want to recycle unwanted electronic devices.
- Project administrators who maintain recycling-centre and booking information.

## MVP features
- Responsive landing page and navigation.
- Recycling-centre search by name, address, device keyword, or PIN code.
- Pickup request form with client-side and server-side validation.
- Express REST API backed by MongoDB/Mongoose.
- Pickup activity dashboard and status display.
- EcoGuide rule-based disposal helper (not a live AI integration).
- Loading/API status, empty states, error messages, and demo fallback centre cards.

## Technology
React + Vite, Node.js, Express, MongoDB, Mongoose, Lucide icons, CSS.

## Requirements
Install a current Node.js LTS release and npm. Create a MongoDB Atlas database or use a local MongoDB instance.

## Run locally (Windows PowerShell or macOS/Linux terminal)
1. Extract this folder and open it in VS Code.
2. Open a terminal in the `reloop_submission` root folder.
3. Configure the backend environment:
   - Copy `server/.env.example` to `server/.env`.
   - Set `MONGODB_URI` to your own MongoDB connection string.
   - Set a long random value for `JWT_SECRET` (reserved for future authentication work in this time-limited prototype).
   - Keep `CLIENT_URL=http://localhost:5173`.
4. Install backend packages: `cd server` then `npm install`.
5. Start backend: `npm run dev`. The API should be at `http://localhost:5000`.
6. Open a second terminal in the root folder, then run `cd client` and `npm install`.
7. Start frontend: `npm run dev`. Open the exact local URL printed by Vite, usually `http://localhost:5173`.
8. Visit `http://localhost:5000/api/health` to check API and database status.

## API contract
- `GET /api/health` — server and database status.
- `GET /api/centres` — list active centres; optional `?pincode=682030` and `?q=Kochi` filters.
- `POST /api/centres` — create a centre with JSON fields `name`, `address`, `pincode`, optional `acceptedItems`, `phone`, `mapUrl`.
- `GET /api/bookings` — list recent bookings (demo/admin endpoint; restrict with authentication before production use).
- `POST /api/bookings` — create a booking; required fields: `name`, `email`, `phone`, `itemType`, `quantity`, `pincode`, `address`, `pickupDate`; optional `notes`.
- `PATCH /api/bookings/:id/status` — update status to `Pending`, `Confirmed`, `Completed`, or `Cancelled` (demo/admin endpoint; protect before production use).

## Database models
- Centre: name, address, PIN code, accepted items, phone, map URL, active flag, timestamps.
- Booking: requester contact details, device category, quantity, PIN code, address, date, notes, status, timestamps.

## Limitations and next steps
This deadline-focused MVP does not yet include user authentication/authorisation, production-grade admin permissions, verified live centre data, a live AI provider, or a production deployment. The demo centre cards are illustrative only. Do not present them as verified facilities. Before public deployment, protect booking read/update and centre creation routes, add rate limiting, use a dedicated database user, verify local centre listings, and configure production CORS and environment variables.

## Test checklist
- [ ] `/api/health` reports server status.
- [ ] MongoDB status is `connected`.
- [ ] Centre list loads from the API or shows the demo fallback when the API is unavailable.
- [ ] Search and PIN code filters work.
- [ ] Empty booking fields are rejected by the browser.
- [ ] Valid booking is saved in MongoDB and appears in the dashboard.
- [ ] Invalid email is rejected by the API.
- [ ] Booking list shows a friendly empty state when there are no records.
- [ ] Mobile layout works using browser DevTools.
- [ ] `.env` files and `node_modules` are excluded from Git.

## GitHub
From the root folder:
```bash
git init
git add .
git commit -m "Build ReLoop e-waste recycling MVP"
```
Create a new GitHub repository, then follow GitHub's instructions to add its remote and push. Never commit `.env` or database credentials.
