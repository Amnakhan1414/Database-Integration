# LearnSpace Backend API — Database Integration

A RESTful backend API for the LearnSpace learning platform, built with **Node.js**, **Express**, and **MongoDB (Mongoose)**. This project extends the Project 2 API by connecting it to a real, persistent database and adding full CRUD support.

> Built as **Project 3 (Database Integration)** for the Full Stack Development Internship at Decode Labs.

---

## 📌 Overview

Project 2 handled requests using an in-memory hardcoded array — data reset every time the server restarted. Project 3 solves that by connecting the API to **MongoDB Atlas** using **Mongoose**, so course data is now created, read, updated, and deleted permanently in a real database.

---

## 🛠️ Tech Stack

- **Node.js** — JavaScript runtime
- **Express.js** — Web server & routing
- **MongoDB Atlas** — Cloud NoSQL database
- **Mongoose** — ODM (Object Data Modeling) for MongoDB
- **dotenv** — Environment variable management
- **Postman** — API testing

---

## ✨ Features

- Full **CRUD** support: Create, Read, Update, Delete
- Database-backed persistence (MongoDB Atlas)
- Schema-level validation using Mongoose
- Route-level input validation (type checks, required fields)
- Consistent JSON response format across all endpoints
- Proper HTTP status codes (200, 201, 400, 404, 500)
- Environment variables used for sensitive credentials (`.env`, git-ignored)

---

## 🗂️ Database Schema — `Course`

| Field       | Type    | Rules                          |
|-------------|---------|---------------------------------|
| `title`     | String  | Required, trimmed               |
| `lessons`   | Number  | Required, minimum value of 1    |
| `createdAt` | Date    | Auto-generated (timestamps)     |
| `updatedAt` | Date    | Auto-generated (timestamps)     |

```javascript
const courseSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    lessons: { type: Number, required: true, min: 1 },
  },
  { timestamps: true }
);
```

---

## 📡 API Endpoints

Base URL: `http://localhost:5000`

### Home

```
GET /
```
Returns a simple status message confirming the API is running.

---

### Get All Courses

```
GET /api/courses
```

**Success Response — 200 OK**
```json
{
  "success": true,
  "courses": [
    {
      "_id": "6a8828f00a68d094e9bc0d30",
      "title": "HTML & CSS",
      "lessons": 12,
      "createdAt": "2026-08-21T10:31:12.979Z",
      "updatedAt": "2026-08-21T10:31:12.979Z"
    }
  ]
}
```

---

### Create a Course

```
POST /api/courses
```

**Request Body**
```json
{
  "title": "JavaScript",
  "lessons": 18
}
```

**Success Response — 201 Created**
```json
{
  "success": true,
  "message": "Course created successfully!",
  "course": {
    "_id": "6a8828f00a68d094e9bc0d31",
    "title": "JavaScript",
    "lessons": 18,
    "createdAt": "2026-08-21T10:31:12.979Z",
    "updatedAt": "2026-08-21T10:31:12.979Z"
  }
}
```

**Validation Error — 400 Bad Request**
```json
{
  "success": false,
  "message": "Course title is required and must be a valid text."
}
```

---

### Update a Course

```
PUT /api/courses/:id
```

**Request Body**
```json
{
  "title": "JavaScript",
  "lessons": 20
}
```

**Success Response — 200 OK**
```json
{
  "success": true,
  "message": "Course updated successfully!",
  "course": {
    "_id": "6a8828f00a68d094e9bc0d31",
    "title": "JavaScript",
    "lessons": 20,
    "updatedAt": "2026-08-21T10:35:18.669Z"
  }
}
```

**Not Found — 404**
```json
{
  "success": false,
  "message": "Course not found"
}
```

---

### Delete a Course

```
DELETE /api/courses/:id
```

**Success Response — 200 OK**
```json
{
  "success": true,
  "message": "Course deleted successfully!",
  "course": {
    "_id": "6a8828f00a68d094e9bc0d31",
    "title": "JavaScript",
    "lessons": 20
  }
}
```

**Not Found — 404**
```json
{
  "success": false,
  "message": "Course not found"
}
```

---

## 🧪 Testing Summary

| Method | Endpoint             | Test Case                  | Expected Status |
|--------|-----------------------|-----------------------------|------------------|
| GET    | `/api/courses`         | Fetch all courses           | 200              |
| POST   | `/api/courses`         | Create with valid data      | 201              |
| POST   | `/api/courses`         | Create with missing title   | 400              |
| PUT    | `/api/courses/:id`      | Update existing course      | 200              |
| PUT    | `/api/courses/:id`      | Update non-existing course  | 404              |
| DELETE | `/api/courses/:id`      | Delete existing course      | 200              |
| DELETE | `/api/courses/:id`      | Delete non-existing course  | 404              |

All endpoints tested using **Postman**. Screenshots available in the repository (`CREATE.png`, `READ.png`, `PUT.png`, `DELETE.png`, `Final Verification.png`).

---

## ⚙️ Setup & Installation

```bash
# Clone the repository
git clone https://github.com/Amnakhan1414/Database-Integration.git
cd Database-Integration

# Install dependencies
npm install

# Create a .env file in the root directory
MONGODB_URI=your_mongodb_connection_string
PORT=5000

# Start the server
node server.js
```

> ⚠️ The `.env` file is not included in this repository (see `.gitignore`). You'll need your own MongoDB Atlas connection string to run this project locally.

---

## 🔒 Security Notes

- Database credentials are stored in environment variables, never hardcoded
- `.env` is excluded from version control via `.gitignore`
- Input is validated both at the route level and the schema level (Mongoose), following the principle that **the database should never blindly trust application logic**

---

## 📚 What This Project Demonstrates

- Designing a database schema with appropriate types and constraints
- Connecting a Node.js/Express backend to MongoDB using Mongoose
- Implementing full CRUD operations mapped to REST conventions (GET, POST, PUT, DELETE)
- Handling errors gracefully at both the validation and database level
- Managing environment variables and credentials securely

---

## 👤 Author

**Amna Khan**
Full Stack Development Intern @ Decode Labs
BSIT, National University of Technology (NUTECH), Islamabad

---

*Part of the Decode Labs Full Stack Development Internship — Project 3: Database Integration*
