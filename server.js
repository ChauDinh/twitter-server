const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const users = require("./routes/users");

// setup environment variables
dotenv.config();

// mongodb connection
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/users", users);

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`The server is listening on port ${PORT}`));

