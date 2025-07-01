# JLabs Intern Full Stack App

This project is a full stack web application with a React frontend and a Node.js/Express backend. Follow the instructions below to set up and run both the client and server locally.

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

---

## 1. Clone the Repository

```
git clone https://github.com/BigDrems/jlabsInternship.git
cd jlabsIntern
```

---

## 2. Install Dependencies

### Server

```
cd server
npm install
```

### Client

```
cd ../client
npm install
```

---

## 3. Running the App

### Start the Server

In the `server` directory:

```
npm start
```

By default, the server runs on [http://localhost:5000](http://localhost:5000).

### Start the Client

In a new terminal, go to the `client` directory:

```
npm start
```

The React app will run on [http://localhost:3000](http://localhost:3000) and proxy API requests to the backend.

---

## 4. Environment Variables

- You may need to set up environment variables for the server (e.g., database connection, JWT secret). Create a `.env` file in the `server` directory as needed.
- Example `.env`:
  ```
  MONGO_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret
  ```

---

## 5. Running Tests

### Client Tests

```
cd client
npm test
```

---

## 6. Project Structure

- `client/` — React frontend
- `server/` — Node.js/Express backend

---

## 7. Troubleshooting

- Ensure both client and server are running on their respective ports.
- Check the terminal for errors if something doesn't work.
- Make sure all dependencies are installed.

---

## 8. License

MIT

---

## 9. Contact

For questions, contact the project maintainer.
