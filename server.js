const express = require("express");
const userRoutes = require("./routes/api/userRoute");
const thoughtRoutes = require("./routes/api/thoughtRoutes");
const connection = require("./config/connection");

const app = express();

// Routes and connections
app.use(express.json());
app.use("/api/users", userRoutes);
app.use("/api/thoughts", thoughtRoutes);

connection.on("connected", () => {
  console.log("Mongoose connected to DB.");
});

connection.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

connection.on("disconnected", () => {
  console.log("Mongoose disconnected from DB.");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
