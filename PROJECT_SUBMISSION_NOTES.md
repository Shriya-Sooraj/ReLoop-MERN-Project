# ReLoop project submission notes

## Abstract
ReLoop is a web-based e-waste recycling hub designed to make responsible disposal easier to discover and organise. The platform presents recycling centre options, accepts electronic-waste pickup requests, and displays recorded activity. It uses React for the user interface, Express and Node.js for the API, and MongoDB with Mongoose for persistent storage.

## Objectives
1. Provide a simple interface for exploring electronic-waste recycling options.
2. Allow users to submit pickup requests with validated details.
3. Store booking data persistently in MongoDB.
4. Present booking activity in a dashboard.
5. Encourage safer disposal and protection of personal data on electronic devices.

## System design
The React client sends HTTP requests to an Express REST API. The server validates request data and accesses MongoDB through Mongoose models. The API returns JSON responses, which the client renders as cards, forms, notices, and dashboard rows. React does not connect directly to MongoDB.

## Current scope
Implemented in this prototype: responsive React UI, centre search/filter, booking creation, booking list/dashboard, status API, API health check, rule-based disposal helper, validation and error messages. Not implemented: real user login, role-based authorisation, verified real-world centre directory, live AI integration, and deployment. These must be described honestly in the final presentation.

## Demonstration sequence
1. Open the landing page and explain the problem statement.
2. Open Find Centres and search a sample term or PIN code.
3. Open Book a Pickup and submit a test request after the database is connected.
4. Open Impact Dashboard and show the new record.
5. Open EcoGuide and ask how to dispose of a laptop or battery.
6. Show `/api/health`, the project folder structure, and README.

## Sample test cases
| Test | Input/action | Expected result |
|---|---|---|
| API health | GET `/api/health` | JSON status response |
| Centre filter | Enter a centre name or PIN code | Matching centre cards shown |
| Required fields | Submit empty booking form | Browser validation prevents submission |
| Invalid email | POST booking with malformed email | API returns HTTP 400 |
| Valid booking | Submit all required fields with MongoDB connected | HTTP 201 and saved booking returned |
| Empty dashboard | No saved bookings | Friendly empty state appears |
| Invalid status | PATCH a booking with unsupported status | API returns HTTP 400 |

## Future enhancements
Add secure JWT authentication and role-based authorisation, admin centre management UI, verified recycler data, real map integration, email notifications, accessible keyboard testing, automated tests, deployment, and a real AI assistant using a protected server-side API key.
