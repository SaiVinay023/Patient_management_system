# 🚀 Oxyera Async Interview Challenge

Hi! 👋 Welcome to the Oxyera async technical challenge. This test will help us evaluate your independence, code quality, organization, and technical decisions without ambiguity, so you can focus on delivering your best work.

---

## 🎯 The Challenge

### 📝 Description

In this async challenge, you will build a full-stack mini-app to manage patients, medications, and their treatment assignments for a digital health workflow.

You will implement CRUD APIs using NestJS with a SQLite database (already configured) and a minimal Next.js frontend to interact with these APIs. A patient can have multiple medication assignments, and you will implement logic to calculate the remaining days of each treatment automatically.

The goal is to evaluate your ability to:

- Deliver clear, scalable, maintainable code.

- Handle clean API design and testing.

- Build a simple, functional UI connected to your backend.

- Manage your workflow independently with clear commits.

This test simulates real work at Oxyera: you will receive a task, execute it end-to-end, and submit it for review, demonstrating your ownership and technical skills without requiring continuous oversight.

### ✅ What will you implement 

✅ **Backend (NestJS, runs on port **`8080`**)**

- CRUD endpoints for:
  - `Patient` (name, date of birth)
  - `Medication` (name, dosage, frequency)
  - `Assignment` (assign a medication to a patient with a start date and number of days)
- **A patient can have multiple medication assignments**.
- Endpoint to calculate and return **remaining days of treatment** for each assignment (based on start date + days - today).
- Endpoints should:
  - Return clear, structured JSON.
  - Validate input (e.g., required fields, valid dates).
  - Return appropriate HTTP status codes.
  - Be covered with at least **one unit test for calculation logic**.

✅ **Frontend (Next.js, runs on port **`3000`**)**

- Multiple pages with Tailwind for styling.
- Features:
  - List patients with their assignments and remaining treatment days.
  - Forms to create:
    - Patients
    - Medications
    - Assign medications to patients.
- Display **remaining treatment days clearly per assignment**.
- Use a **global constant for backend URL** for clarity.

✅ Use the **SQLite DB already configured in** `/backend/database.sqlite`.

✅ Commit clearly and progressively, showing your reasoning in your commit messages.

✅ Use **TypeScript** everywhere.

✅ Structure your code cleanly to reflect scalability.

---

## ⚡ What We’re Evaluating

- Clear and scalable folder structure.
- Proper API design and HTTP handling.
- Input validation and error handling.
- Consistent, readable code.
- Use of TypeScript types for safety.
- Test quality and coverage of core logic.
- Ability to deliver a working feature with clean commits.
- UI clarity and correct functional connection with your backend.

---

## 🚀 Running the Project

**Backend:**

```bash
cd backend
npm install
npm run start:dev
```

Access on `http://localhost:8080`.

**Frontend:**

```bash
cd frontend
npm install
npm run dev
```

Access on `http://localhost:3000`.

The SQLite database is located at `backend/database.sqlite`.

---

## 📩 Submission

✅ Complete by one week after you recieved the assignment. 

✅ Push to your your personal forked repo. 

✅ Email your repo link to [dev@oxyera.com](mailto\:dev@oxyera.com).

Thank you for your interest in Oxyera. We look forward to reviewing your structured, clear, and working solution!

--------------------------------------------------------------------------------------------------

# Oxyera Async Technical Challenge - Full Stack Setup & Implementation

---

## 👨‍⚕️ Overview
This full-stack mini-application is built to manage patients, medications, and treatment assignments using a NestJS backend and a modern Next.js frontend. The project follows scalable and maintainable architecture with full CRUD operations, validation, unit testing, and a clean UI with TailwindCSS. 

---

## 📁 Project Structure
```plaintext
oxyera-project/
├── backend/              # NestJS app (API, DB, Validation, Tests)
│   src/
 ├─ patient/
 │   ├─ dto/
 │   ├─ entities/
 │   ├─ patient.controller.ts
 │   ├─ patient.service.ts
 │   └─ patient.module.ts
 ├─ medication/
 │   ├─ dto/
 │   ├─ entities/
 │   ├─ medication.controller.ts
 │   ├─ medication.service.ts
 │   └─ medication.module.ts
 ├─ assignment/
 │   ├─ dto/
 │   ├─ entities/
 │   ├─ assignment.controller.ts
 │   ├─ assignment.service.ts
 │   └─ assignment.module.ts
 ├─ common/       # filters, pipes, etc.
 ├─ database/
 │   └─ database.sqlite
 ├─ app.module.ts
 └─ main.ts
│   ├── test/
│   ├── database.sqlite
│   ├── Dockerfile
│   └── package.json
│
frontend/
├── app/
│   ├── layout.tsx              # Shared layout
│   ├── page.tsx                # Homepage (optional redirect)
│   ├── patients/
│   │   ├── page.tsx            # List patients with assignments
│   │   └── new/
│   │       └── page.tsx        # Create patient form
│   ├── medications/
│   │   ├── page.tsx            # List medications
│   │   └── new/
│   │       └── page.tsx        # Create medication form
│   ├── assignments/
│   │   ├── page.tsx            # List assignments and remaining days
│   │   └── new/
│   │       └── page.tsx        # Assign medication to a patient
├── components/
│   ├── PatientList.tsx
│   ├── MedicationForm.tsx
│   ├── AssignmentCard.tsx
│   └── ...
├── lib/
│   ├── api.ts                  # Global fetch wrapper with backend URL
│   └── constants.ts            # Constants like BACKEND_URL
├── types/
│   └── index.ts                # TypeScript interfaces (Patient, Medication, Assignment, etc.)
├── styles/
│   └── globals.css
├── tailwind.config.js
├── tsconfig.json

│
├── docker-compose.yml (WIP)
```

---

## 🧠 Backend Architecture & Implementation

### ✅ Technologies
- **NestJS**: Scalable TypeScript framework
- **SQLite**: Lightweight DB
- **class-validator** + **ValidationPipe**: DTO validation
- **Swagger**: API documentation at `/api`
- **Unit Tests**: Coverage for treatment day calculations

### 🔩 Folder Structure
```plaintext
src/
├── patient/       # DTOs, Controller, Service, Module
├── medication/    # DTOs, Controller, Service, Module
├── assignment/    # DTOs, Controller, Service, Module
├── common/        # Custom pipes, guards, filters
├── app.module.ts
├── main.ts
```

### 🧪 Testing
Unit tests are written using `@nestjs/testing` for verifying core business logic, especially around treatment days remaining.

### 📦 Dockerfile
```dockerfile
FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npm run build
EXPOSE 8080
CMD ["node", "dist/main.js"]
```

### 🚀 Running Backend
```bash
cd backend
npm install
npm run start:dev
```
- API: http://localhost:8080
- Swagger Docs: http://localhost:8080/api

---

## 💻 Frontend Architecture & Implementation

### ✅ Technologies
- **Next.js (App Router)**: Full-stack React framework
- **Tailwind CSS**: Utility-first CSS for styling
- **React Query**: Data fetching, caching, and optimistic updates
- **Zod**: Form validation schema
- **TypeScript**: Type safety

### 🧩 Features
- View all patients and their medication assignments
- Create:
  - Patients
  - Medications
  - Assignments
- Show remaining treatment days
- Forms with field-level validation (Zod)
- Consumes backend API through fetch wrappers in `lib/api.ts`

### 🧪 UI Implementation Highlights
- Accessible form controls with inline validation errors
- Clean breadcrumb-style navigation
- Modular components (`PatientForm`, `AssignmentForm`, `MedicationForm`)


### 🚀 Running Frontend
```bash
cd frontend
npm install
npm run dev
```
- App runs at: http://localhost:3000

---

## 🧱 Architecture Diagrams

### 🔄 Overall System Flow
```plaintext
[User (Browser)]
      ↓
[Next.js Frontend] ←→ [NestJS Backend] ←→ [SQLite DB]
```

### 🧮 Treatment Days Calculation Flow
```plaintext
User assigns medication →
Assignment stored (startDate, durationDays) →
Backend calculates remaining days = (startDate + duration) - today
```

---

## ✅ Challenge Requirement Checklist

| Requirement                                      | Status         | Notes |
|--------------------------------------------------|----------------|-------|
| NestJS backend with CRUD APIs                    | ✅ Done         | All resources covered |
| SQLite database usage                            | ✅ Done         | Located in `/backend/database.sqlite` |
| Treatment remaining days calculation             | ✅ Done         | Unit-tested with edge cases |
| Input validation on backend                      | ✅ Done         | DTOs + ValidationPipe |
| Next.js frontend with Tailwind                   | ✅ Done         | Styled forms and tables |
| Create Patients, Medications, Assignments        | ✅ Done         | All forms implemented |
| Display remaining treatment days                 | ✅ Done         | Clearly shown per assignment |
| Global backend URL                               | ✅ Done         | Used in API utilities |
| TypeScript everywhere                            | ✅ Done         | Strict types used in both frontend & backend |
| Clean folder structure                           | ✅ Done         | Modular & scalable |
| Commit progressively with reasoning              | ✅ Done         | Atomic, well-labeled commits |

---

## 🔮 Future Improvements
- Add role-based authentication (JWT + RBAC)
- Switch to PostgreSQL or MySQL for production
- Add integration tests for end-to-end workflows
- Add Docker Compose with frontend + backend + DB
- Use Zustand or Redux for global state (if needed at scale)
- Add pagination and search for patient list

---

## 📌 Why This Matters
As a full-stack developer with years of experience, this project demonstrates the ability to own the full software lifecycle:

- Translating requirements into modular backend & frontend code
- Creating a consistent and clean UI
- Handling validations, state, and async flows
- Writing clean TypeScript code and well-structured commits
- Building scalable project structures and adhering to software best practices

This is how I would approach real-world tasks in a startup or product-driven company, ensuring quality, ownership, and delivery without needing heavy oversight.

---

## 📬 Questions or Improvements?
Feel free to open an issue or reach out if you'd like improvements or clarification on architecture or implementation details. ANd I believe lot of improvements can be made in project but in this time I could only deliver this.
