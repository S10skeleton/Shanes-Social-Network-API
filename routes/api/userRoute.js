// imports
const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
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
// route to add a friend
router.route("/:userId/friends/:friendId").post(addFriend);
// route to delete a friend
router.route("/:userId/friends/:friendId").delete(deleteFriend);

// export
module.exports = router;
