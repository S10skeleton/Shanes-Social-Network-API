// Import express module and routes for users and thoughts
const router = require("express").Router();
const userRoutes = require("./userRoute");
const thoughtRoutes = require("./thoughtRoutes");
// middleware
router.use("/thoughts", thoughtRoutes);
router.use("/users", userRoutes);
// Export of router
module.exports = router;
