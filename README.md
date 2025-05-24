
# 📘 Book Library API

A simple RESTful API for managing a book library, built with Node.js, Express, and MongoDB (Mongoose).  
This API allows you to create, read, update, and delete books in the library.

---

## 🚀 Live Demo

You can access the deployed API here (hosted on Render free tier):  
🔗 [https://utkrshydv-libraryapi.onrender.com/](https://utkrshydv-libraryapi.onrender.com/)

> ⚠️ **Note:** This API is hosted on Render's free tier, so the server may "wake up" slowly after inactivity, and response times may be slower than usual.

---

## 📋 Features

- Fetch all books  
- Fetch books by ISBN, genre, or rating  
- Search books by partial title  
- Add new books  
- Update existing books by ISBN  
- Delete books by ISBN  

---

## 🛣️ API Routes

### GET Requests

| Route                  | Description                     | Example URL                                                                                      |
| ---------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------ |
| `/book`                | Fetch all books                 | [https://utkrshydv-libraryapi.onrender.com/book](https://utkrshydv-libraryapi.onrender.com/book) |
| `/book/isbn/:isbn`     | Fetch a book by ISBN            | `/book/isbn/9780345472328`                                                                       |
| `/book/genre/:genre`   | Fetch books by genre            | `/book/genre/fiction`                                                                            |
| `/book/rating/:rating` | Fetch books with rating ≥ value | `/book/rating/3`                                                                                 |
| `/book/search/:search` | Search books by partial title   | `/book/search/harry potter`                                                                      |

---

### POST Request

Add a new book:

```http
POST /book
Content-Type: application/json
````

Example JSON body:

```json
{
  "name": "Harry Potter",
  "author": "J.K. Rowling",
  "publishedYear": 1997,
  "genres": ["fantasy"],
  "isbn": "9780747532743",
  "rating": 5
}
```

---

### PUT Request

Update a book by ISBN:

```http
PUT /book/isbn/:isbn
Content-Type: application/json
```

Send only the fields you want to update.

---

### DELETE Request

Delete a book by ISBN:

```http
DELETE /book/isbn/:isbn
```

---

## 📝 Notes

* All request bodies **must be in JSON format**.
* Valid genres include: funny, fiction, non-fiction, mystery, fantasy, romance, sci-fi, biography, history, thriller, self-help.
* Rating must be between 0 and 5.
* The API base URL is: `https://utkrshydv-libraryapi.onrender.com`

---

## 🛠️ Development

* Express server code is in `server.js`.
* MongoDB connection is handled in `db.js`.
* Routes are organized in `routes/bookRoutes.js`.
* Static frontend file `home.html` is served from `public/`.

---

## ⚠️ Render Free Tier Warning

This API is hosted on Render's free tier plan, which may cause:

* Delays or timeouts when the server "wakes up" after inactivity.
* Occasional slower responses or 502 errors during cold starts.

If you plan to use it heavily or in production, consider upgrading to a paid plan or deploying on a more robust host.

---

## 🎓 What I Learned

* How to build a RESTful API using **Node.js** and **Express**.
* Connecting and interacting with **MongoDB** using **Mongoose**.
* Organizing routes in separate files for clean code structure.
* Handling asynchronous database connection events and starting the server only after DB is connected.
* Deploying a full-stack API to the **Render** free tier and handling cold start issues.
* Writing clear API documentation with examples for easier usage and testing.
* Understanding common HTTP methods: GET, POST, PUT, DELETE, and working with JSON payloads.
* Basics of environment variables for configuration and security.
* How free hosting plans impact API responsiveness and best practices to mitigate issues.

---

