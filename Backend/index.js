import express from "express";
import mongoose from "mongoose";
import bookRoute from "./Route/Book.Route.js";
import userRoute from "./Route/User.Route.js";
import cors from "cors";
import dotenv from "dotenv"; // Import dotenv correctly

// Initialize dotenv to load environment variables
dotenv.config(); // You don't need to pass a path, it defaults to .env in the root directory

const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());

// Set port and MongoDB URI from environment variables
const PORT = process.env.PORT || 4000; 
const URI = process.env.MongoDBURI; // MongoDB URI should be in the .env file

// MongoDB connection
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((error) => {
    console.log("Error connecting to MongoDB: ", error);
});

// Routes
app.use("/book", bookRoute);
app.use("/users", userRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
