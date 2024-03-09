// import
const router = require("express").Router();
const apiRoutes = require("./api");
// middle
router.use("/api", apiRoutes);

router.use((req, res) => res.send("Wrong route!"));
// export
module.exports = router;
