// Import dependencies
const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/user"); // Adjust the path to match the location of your User model
const Thought = require("./models/thought"); // Adjust the path as necessary

// Create an Express application
const app = express();

// Use JSON middleware
app.use(express.json());

// MongoDB URI
const mongoURI = "mongodb://localhost:27017/thoughtsdb";

// Connect to MongoDB
mongoose
    .connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.error("MongoDB connection error:", err));

// Endpoint to get all users
app.get("/users", (req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
});

// Endpoint to get all thoughts
app.get("/thoughts", (req, res) => {
    Thought.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
});

// Endpoint to get a single user by id
app.get("/user/:id", (req, res) => {
    User.findById(req.params.id)
        .then((user) => {
            if (user) {
                res.json(user);
            } else {
                res.status(404).send("User not found");
            }
        })
        .catch((err) => res.status(500).json(err));
});

// Endpoint to update a single user by id
app.put("/user/:id", (req, res) => {
    const { username, email, thoughts, friends } = req.body;

    // Find the user by id and update it with the new data
    // { new: true } ensures the method returns the updated document
    User.findByIdAndUpdate(
        req.params.id,
        { username, email, thoughts, friends },
        { new: true, runValidators: true }
    )
        .then((updatedUser) => {
            if (updatedUser) {
                res.json(updatedUser);
            } else {
                res.status(404).send("User not found");
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                message: "Error updating user",
                error: err,
            });
        });
});

// Endpoint to delete a single user by id
app.delete("/user/:id", (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then((user) => {
            if (user) {
                res.status(200).send(`User deleted successfully`);
            } else {
                res.status(404).send("User not found");
            }
        })
        .catch((err) => res.status(500).json(err));
});

// Endpoint to add new User
app.post("/user", (req, res) => {
    // extract request json given into js variables
    const { username, email, thoughts, friends } = req.body;

    // make instance of mongoose User class (call it newUser)
    const newUser = new User({ username, email, thoughts, friends });

    // save User instance to mongodb
    newUser
        .save()
        .then((user) => res.status(201).json(user))
        .catch((err) => res.status(400).json(err));
});

// Endpoint to post a new thought
app.post("/thought", (req, res) => {
    const { thoughtText, username, reactions } = req.body;
    const newThought = new Thought({
        thoughtText,
        username,
        reactions,
    });

    newThought
        .save()
        .then((thought) => res.status(201).json(thought))
        .catch((err) => {
            console.error("Error details:", err);
            res.status(400).json({
                message: "Error creating new thought",
                error: err.message,
            });
        });
});

// Define a port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
