const express = require("express");
const app = express();
const path = require("path");
const PORT = 3030;

// CONFIGURACIONES

app.use(express.static("public"));

// RUTAS
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "home.html"))
);
app.get("/register", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "register.html"))
);
app.get("/login", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "login.html"))
);

app.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "404.html"))
);

app.listen(PORT, () =>
  console.log("Servidor corriendo en http://localhost:" + PORT)
);
