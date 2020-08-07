const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
 
const app = express();
 
const PORT = process.env.PORT || 3001;
 
// Define middleware here
app.use(express.urlencoded({ 
    extended: true, 
 }));

app.use(express.json());
 
app.get("/api/config", (req, res) => {
    res.json({
        success: true,
    });
});
 
// Serve up static assets (usually on heroku)
 
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.static("client/build")); 
 
app.get("*"), (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
}

// Connect to the Mongo DB
mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost/nameofapp", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Successfully connected to database.");
    })
    .catch((err) => {
    console.log("Unable to connect to database.");
    console.log(err);
    });
 
app.listen(PORT, function() {
  console.log(`Express server is running on http://localhost:${PORT}!`);
});
