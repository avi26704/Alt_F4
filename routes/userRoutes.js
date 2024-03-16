const express = require("express");
const router = express.Router();
const {getUserDetails,getUsers,createUser,updateDetails,deleteUser} = require("../controllers/userController");

// router.route("/:id").get(getDetails);
// router.route("/:id").put(updateDetails);
// router.route("/:id").delete(deleteUser);

// router.route("/api/users").get(getUsers);

router.route("/:id").get(getUserDetails).put(updateDetails).delete(deleteUser); // alternate shorter way to group routes which get request at common URL

router.route("/api/users/:id").get(getUserDetails).delete(deleteUser);

// router.route("/api/users/retrieve").get(retrieveData);

router.route("/").post(createUser).get(getUsers);

module.exports = router;