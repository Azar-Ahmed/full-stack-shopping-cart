# Full-Stack Shopping Cart

A **full-stack shopping cart application** built with **React + Redux Toolkit** for the frontend and **Node.js + Express + TypeScript + TypeORM + MySQL** for the backend.

The app allows users to:

* View a list of products
* Add/remove items to/from the cart
* See a cart summary with total items and price
* Persist cart data via backend API

---

## Tech Stack

| Layer    | Technology        | Purpose                               |
| -------- | ----------------- | ------------------------------------- |
| Frontend | React + Vite      | UI and component rendering            |
| Frontend | Redux Toolkit     | State management for products & cart  |
| Frontend | TypeScript        | Strong typing for components & state  |
| Backend  | Node.js + Express | REST API server                       |
| Backend  | TypeScript        | Strong typing & maintainability       |
| Backend  | TypeORM           | Database ORM for MySQL                |
| Database | MySQL             | Store products & cart items           |
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

1. **Install dependencies**

```bash
cd backend
npm install
```

2. **Create `.env` file**

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=your_mysql_password
DB_NAME=shopping_cart
PORT=5000
```

3. **Run database seed**

```bash
npm run seed
```

4. **Start the server (development)**

```bash
npm run dev
```

* API runs on `http://localhost:5000/api`
* Available endpoints:

  * `GET /products` → List products
  * `GET /cart` → Get cart items + totals
  * `POST /cart` → Add/update cart item
  * `DELETE /cart/:id` → Remove cart item

---

## Frontend Setup

1. **Install dependencies**

```bash
cd frontend
npm install
```

2. **Start development server**

```bash
npm run dev
```

* Frontend runs on `http://localhost:5173` (Vite default)

3. **Redux Toolkit** handles state for:

* Products
* Cart
* Async API calls via thunks or RTK Query

---

## Features

* Product listing with image, name, price
* Add/remove products to cart via backend API
* Cart summary with total items & total price
* Error handling and loading states
* Clean, reusable React components
* Strong TypeScript typing throughout

---

## Future Improvements

* User authentication (JWT)
* Pagination & search for products
* Admin CRUD for products
* Caching with Redis
* Unit & integration testing

---

## License

This project is open-source and free to use.
