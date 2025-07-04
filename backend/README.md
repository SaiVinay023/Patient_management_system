# Oxyera Async Technical Challenge - Backend Setup & Implementation

---

## 1. Dockerfile for NestJS Backend

```dockerfile
# Use official Node.js LTS version as base image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy all source files
COPY . .

# Build the project
RUN npm run build

# Expose port 8080 for the backend server
EXPOSE 8080

# Start the server in production mode
CMD ["node", "dist/main.js"]


Backend Architecture & Implementation
Overview
This backend is built using NestJS, a progressive Node.js framework leveraging TypeScript, decorators, and modular architecture to build scalable and maintainable server-side applications.

The app provides CRUD APIs for managing Patients, Medications, and their Treatment Assignments stored in a SQLite database.

Folder Structure
cpp
Copy
Edit
src/
 ├─ patient/
 │   ├─ dto/
 │   ├─ entities/
 │   ├─ patient.controller.ts
 │   ├─ patient.service.ts
 │   ├─ patient.module.ts
 ├─ medication/
 │   ├─ dto/
 │   ├─ entities/
 │   ├─ medication.controller.ts
 │   ├─ medication.service.ts
 │   ├─ medication.module.ts
 ├─ assignment/
 │   ├─ dto/
 │   ├─ entities/
 │   ├─ assignment.controller.ts
 │   ├─ assignment.service.ts
 │   ├─ assignment.module.ts
 ├─ common/
 │   ├─ filters/
 │   ├─ pipes/
 │   ├─ guards/
 ├─ database/
 │   └─ database.sqlite
 ├─ app.module.ts
 ├─ main.ts
Key Technical Decisions
NestJS: for modularity, decorators, and scalable project structure.

SQLite: lightweight file-based DB, perfect for this challenge.

TypeScript: ensures type safety and better developer experience.

DTOs & Validation: using class-validator and class-transformer with NestJS ValidationPipe for input validation.

Swagger: auto-generated API docs for easier frontend integration and testing.

REST API Design: clear, consistent endpoints with proper HTTP status codes and JSON responses.

Testing: unit tests especially for treatment days calculation logic.

No ORM (optional): direct SQLite or TypeORM usage possible.

How to Run Locally
bash
Copy
Edit
cd backend
npm install
npm run start:dev
API accessible at http://localhost:8080

Swagger docs at http://localhost:8080/api

Future Improvements
Add authentication and role-based access control.

Use a more robust production DB like PostgreSQL.

Integration testing covering API flows.

Full Docker Compose setup for backend + frontend + DB.

