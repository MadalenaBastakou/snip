const express = require("express");
const connectToDb = require("./config/connectToDb");
require("dotenv").config();
const userController = require("./controllers/userController");
const snipsController = require("./controllers/snipsController");
const cookieParser = require("cookie-parser");
const requireAuth = require("./middleware/requireAuth");
const cors = require("cors");
const path = require("path");


const app = express();
connectToDb();

const __variableOfChoice = path.resolve()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:5173", "https://snip-xmnt.onrender.com"], credentials: true }));
app.use(express.static(path.join(__variableOfChoice,  '/frontend/dist')));

//user authentication paths
app.post("/signup", userController.signup);
app.post("/login", userController.login);
app.get("/checkAuth", requireAuth, userController.checkAuth);
app.get("/logout", userController.logout);
app.get("/user/:id", userController.getUser);

//creating snips paths
app.get("/snips", requireAuth, snipsController.getSnips);
app.get("/snips/search", requireAuth, snipsController.searchSnips);
app.get("/snips/:title", requireAuth, snipsController.getSnipByTitle);
app.get("/snips/:id", requireAuth, snipsController.getOneSnip);
app.post("/snips", requireAuth, snipsController.createSnip);
app.put("/snips/:id", requireAuth, snipsController.updateSnip);
app.delete("/snips/:id", requireAuth, snipsController.deleteSnip);

app.get("*", function (req, res) {
  res.sendFile(path.join(__variableOfChoice, 'frontend', 'dist', 'index.html'));
});

app.listen(process.env.PORT);
