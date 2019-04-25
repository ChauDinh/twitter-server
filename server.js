const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");

const users = require("./routes/users");
const posts = require("./routes/posts");
// setup environment variables
dotenv.config();

// mongodb connection
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(passport.initialize());
require('./config/passport')(passport);

app.use("/api/users", users);
app.use("/api/posts", posts);

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`The server is listening on port ${PORT}`));

