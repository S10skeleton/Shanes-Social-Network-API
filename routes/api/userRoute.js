// imports
const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController.js");

// route to get all users
router.route("/").get(getAllUsers);
// route to get user by Id
router.route("/:userId").get(getUserById);
// route to create a new user
router.route("/").post(createUser);
// route to update user by Id
router.route("/:userId").put(updateUser);
// route to delete a user by Id
router.route("/:userId").delete(deleteUser);
// export
module.exports = router;
