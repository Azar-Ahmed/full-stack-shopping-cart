# Shopping Cart Backend (Express + TypeScript + Prisma + PostgreSQL)

## Prerequisites
- Node.js 18+
- PostgreSQL running and accessible
- `DATABASE_URL` environment variable set in `.env`

## Setup
1. Install deps:
   ```bash
   npm install


# Quick notes & next steps
1. **Run order** — after creating files:
   - `npm install`
   - `npx prisma generate` (or `npm run prisma:generate`)
   - `npx prisma migrate dev --name init` (or `npm run prisma:migrate`)
   - `npm run prisma:seed`
   - `npm run dev`

2. **Decimal math** — Prisma Decimal is used for accurate money calculations; the API returns prices as strings (e.g., `"399.00"`). Frontend should parse as decimal/number for display.

3. **Session / user** — This scaffold uses a single server-side cart table (no users). If you want user-specific carts, we can add a `userId` to `CartItem` and protect endpoints with authentication.

4. **Optional improvements I can add immediately if you want:**
   - Convert project to module-per-feature structure (e.g., `/src/modules/product/...`) to be even more Nest-like.
   - Add TypeScript types/interfaces for responses (shared `types.ts`).
   - Add tests (Jest + supertest).
   - Add request logging middleware (morgan).
   - Add pagination to `GET /products`.

---

If this looks good, confirm and I’ll:
- create the files in a GitHub-ready ZIP structure (I’ll paste the complete files here), **and**  
- implement the frontend scaffolding next (Vite + React + Redux Toolkit + RTK Query) and wire the UI to these endpoints.

Which would you like next: **(A)** I paste all the files fully here so you can copy them, **(B)** I start the frontend scaffolding now and wire it to this API, or **(C)** add user-specific carts (userId/session) to the backend first?