const express = require("express");
const router = express.Router();
const {getDetails,createUser,updateDetails,deleteUser} = require("../controllers/userController");

// router.route("/:id").get(getDetails);
// router.route("/:id").put(updateDetails);
// router.route("/:id").delete(deleteUser);

router.route("/:id").get(getDetails).put(updateDetails).delete(deleteUser); // alternate shorter way to group routes which get request at common URL

router.route("/api/users/:id").get(getDetails).delete(deleteUser);

router.route("/").post(createUser);

module.exports = router;