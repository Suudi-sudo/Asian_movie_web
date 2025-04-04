const jsonServer = require('json-server');
const cors = require('cors');  // For enabling CORS requests
const server = jsonServer.create();
const router = jsonServer.router('db.json');  // Use the db.json in your backend
const middlewares = jsonServer.defaults();

// Enable CORS for all origins (if frontend is on a different port)
server.use(cors());

// Use default middlewares (logger, static, etc.)
server.use(middlewares);

// Add the router (which uses db.json for the API)
server.use(router);

// Start the server on port 5000
server.listen(5000, () => {
  console.log('JSON Server is running on http://localhost:5000');
});
