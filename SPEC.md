# School Monitor - Technical Specification

> Full-stack school monitoring platform with NestJS backend + Next.js frontend.
> Manages students, professors, absences, grades, meals, events, and school communications.

## Executive Summary

School Monitor is a **school management platform** with a **NestJS** backend (20+ modules, Prisma + PostgreSQL) and a **Next.js** frontend. It models the full school operational domain: companies/branches, collaborators (student/professor/manager/owner), academic sections (class + subject + term + professor), grading templates, absences, meals, events, notifications, projects, and appraisals. Features role-based access with 4 collaborator roles and a full auth lifecycle.

---

## 1. Problem Statement

### Context
A comprehensive school monitoring solution allowing administrators, professors, and staff to track student attendance, grades, meals, events, and communications.

### Goals
- Model complete school domain (company → branch → section → student enrollment)
- Track absences, grades, meals, events, notifications, projects per student
- Role-based access: ADMIN/OPS (system), OWNER/MANAGER/PROFESSOR/STUDENT (company)
- Full auth lifecycle with account confirmation and password reset

### Success Metrics
- [x] 20+ NestJS modules
- [x] Rich Prisma schema (PostgreSQL)
- [x] 4 collaborator roles
- [x] Docker Compose orchestration
- [ ] Real-time notifications (WebSocket/SSE)
- [ ] Reporting / PDF export

---

## 2. Technology Stack

**Backend (backend/)**
| Component | Technology | Version |
|-----------|-----------|---------|
| Framework | NestJS | Latest |
| Language | TypeScript | 5.x |
| ORM | Prisma | Latest |
| Database | PostgreSQL | 15+ |
| Testing | Jest | Latest |

**Frontend (frontend/)**
| Component | Technology | Version |
|-----------|-----------|---------|
| Framework | Next.js | 13+ |
| Styling | Tailwind CSS | 3.x |
| Language | TypeScript | 5.x |

---

## 3. Architecture

```
┌─────────────────────────────────────────┐
│      Next.js Frontend (frontend/)        │
└──────────────────┬──────────────────────┘
                   │ REST API
                   ▼
┌──────────────────────────────────────────┐
│      NestJS Backend (backend/)            │
│  20+ modules (see Module Structure)       │
│  Auth + Hash modules                     │
│  AppInitService (data seeding)           │
└──────────────────┬───────────────────────┘
                   │ Prisma Client
                   ▼
            PostgreSQL Database
```

---

## 4. Module Structure

| Module | Responsibility |
|--------|---------------|
| `AccountModule` | User accounts |
| `AuthModule` | JWT auth, sign-in/up, token management |
| `HashModule` | Password hashing (bcrypt) |
| `CompanyModule` | School organization entity |
| `BranchModule` | School branches/campuses |
| `CollaboratorModule` | People in the system (student/professor/manager/owner) |
| `SchoolClassModule` | Class groups |
| `SchoolSubjectModule` | Academic subjects |
| `SchoolTermModule` | Academic terms/semesters |
| `SchoolSectionModule` | Section = class + subject + term + professor |
| `SchoolAbsenceModule` | Attendance / absence tracking |
| `SchoolGradeModule` | Grade records |
| `GradeTemplateModule` | Grade templates (defines grading criteria) |
| `SchoolMealModule` | School meal schedules |
| `SchoolEventModule` | School events |
| `SchoolNotificationModule` | Internal school notifications |
| `SchoolAppraisalModule` | Performance appraisals |
| `SchoolProjectModule` | Student projects (DELIVERED/PENDING/LATE/PENDING_LATE) |
| `NotificationModule` | System email notifications |
| `PrismaModule` | Database connection |

---

## 5. Key Enums & Domain Logic

```typescript
enum CollaboratorRole { STUDENT, PROFESSOR, MANAGER, OWNER }
enum SystemRole { ADMIN, OPS, CUSTOMER }
enum SchoolProjectStatus { DELIVERED, PENDING, LATE, PENDING_LATE }
enum MealType { BREAKFAST, LUNCH, DINNER }
enum WeekDay { MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY }
enum ActiveStatus { ACTIVE, INACTIVE }
enum Source { SYSTEM, USER }
```

---

## 6. Auth Flow

```
POST /auth/sign-up           → Creates account + CONFIRM_ACCOUNT token
POST /auth/confirm           → Validates token, activates account
POST /auth/sign-in           → Returns JWT
POST /auth/forgot-password   → Sends RESET_PASSWORD token
POST /auth/reset-password    → Resets password
POST /auth/change-password   → Changes password (authenticated)
```

---

## 7. Testing Strategy

```bash
cd backend && npm test          # Unit tests
cd backend && npm run test:e2e  # E2E
cd frontend && npm test         # Frontend tests
```

---

## 8. Deployment & Operations

```bash
docker-compose up              # Database + services
cd backend && npm run start:dev
cd frontend && npm run dev
```

**Env (backend):** `DATABASE_URL`, `JWT_SECRET`, `JWT_EXPIRES_IN`, `SMTP_*`

---

## 9. Issues Found

### Architecture
- **No `Action` and `Subject` enums defined for school-specific resources** — the schema defines `Subject: ACCOUNT` only, meaning RBAC for school modules (absences, grades, etc.) is not modeled. All school module endpoints likely have no permission gates beyond authentication.
- **`AppInitService`** seeds initial data at startup — if run against a non-empty database, this could cause duplicate entries unless idempotency is handled.

### Missing Features
- No real-time notifications for events like new absence, grade posted, meal change.
- No pagination on listing endpoints (depending on implementation — not verified).
- No file attachment support (school projects, appraisals).
- `SchoolProjectStatus.PENDING_LATE` — two statuses are combined in one value, which makes status transitions ambiguous (is a project PENDING or LATE?). Should be two independent flags.

### Code Quality
- 20+ modules is a large NestJS monolith. No evidence of CQRS or event-sourcing to manage the complexity.
- `db/` directory at root — confirm database init scripts are present and documented for setup.
