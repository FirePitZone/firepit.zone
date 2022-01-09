const PORT = 3000;

const fs = require("fs");
const express = require("express");
const expressApp = express();
expressApp.use(express.static("./")); // Serve Static Files
const httpServer = require("http").createServer(expressApp);

httpServer.listen(PORT, () => {
  console.log(`Server started on port ${PORT}!`);
});