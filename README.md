# Full-Stack Shopping Cart

A **full-stack shopping cart application** built with **React + Redux Toolkit** for the frontend and **Node.js + Express + TypeScript + TypeORM + MySQL** for the backend.

This project allows users to:

* Browse products
* Add or remove items to/from a shopping cart
* View cart summary with total items and total price
* Persist cart data via backend API

---

## Tech Stack

| Layer    | Technology        | Purpose                               |
| -------- | ----------------- | ------------------------------------- |
| Frontend | React + Vite      | UI rendering and components           |
| Frontend | Redux Toolkit     | State management for products & cart  |
| Frontend | TypeScript        | Strong typing for frontend            |
| Backend  | Node.js + Express | REST API server                       |
| Backend  | TypeScript        | Strong typing and maintainability     |
| Backend  | TypeORM           | ORM for MySQL                         |
| Database | MySQL             | Stores products and cart items        |
| Optional | class-validator   | DTO validation                        |
| Optional | class-transformer | Transform request payloads            |
| Optional | cors              | Enable frontend-backend communication |

---

## Project Structure

```
frontend/
 ├─ src/
 │   ├─ components/
 │   ├─ features/
 │   ├─ api/
 │   ├─ app/
 │   └─ main.tsx

backend/
 ├─ src/
 │   ├─ controllers/
 │   ├─ dtos/
 │   ├─ entities/
 │   ├─ routes/
 │   ├─ services/
 │   ├─ database.ts
 │   ├─ seed.ts
 │   └─ index.ts
 ├─ tsconfig.json
 └─ package.json
```

---

## Backend Setup

1. Install dependencies:

```bash
cd backend
npm install
```

2. Create `.env` file:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=your_mysql_password
DB_NAME=shopping_cart
PORT=5000
```

3. Seed the database:

```bash
npm run seed
```

4. Start the backend server:

```bash
npm run dev
```

* API runs on `http://localhost:5000/api`
* Endpoints:

  * `GET /products` → List all products
  * `GET /cart` → Get cart items with totals
  * `POST /cart` → Add or update a cart item
  * `DELETE /cart/:id` → Remove a cart item

---

## Frontend Setup

1. Install dependencies:

```bash
cd frontend
npm install
```

2. Start the frontend development server:

```bash
npm run dev
```

* Frontend runs on `http://localhost:5173`

3. Redux Toolkit manages state for:

* Products
* Cart
* Async API requests via thunks or RTK Query

---

## Features

* Product listing with image, name, and price
* Add/remove products to cart via API
* Cart summary showing total items and total price
* Error handling and loading states
* Reusable and clean React components
* Full TypeScript typing for frontend and backend

---

## Future Improvements

* User authentication (JWT)
* Pagination and search for products
* Admin CRUD for products
* Caching with Redis
* Unit and integration testing

---

