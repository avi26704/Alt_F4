const asyncHandler = require("express-async-handler");
const Users = require("../models/user");

//@desc Get details of a specific user
//@route GET /api/users
//@access public

const getUserDetails = asyncHandler(async (req,res) => {
    const user = await Users.findById(req.params.id); // to fetch data of a specific user through id
    res.status(200).json(user);
});

//@desc Get all user details
//@route GET /api/users
//@access public

const getUsers = asyncHandler(async (req,res) => {
    const users = await Users.find(); // to fetch data of all users saved in collection
    res.status(200).json(users);
});

//@desc Create new user
//@route POST /api/users
//@access public

const createUser = asyncHandler(async (req,res) => {
    // console.log("User details: ",req.body);

    // Error handling
    // const {name,reg_no,email_id} = req.body;
    // if (!name || !reg_no || !email_id) {
    //     res.status(400);
    //     throw new Error("All fields are mandatory.");
    // }

    const { name, reg_no, password, role, block, phone_no, room_no, email_id } = req.body;
    try {
        const user = await Users.create({
            name, reg_no, password, role, block, phone_no, room_no, email_id
        });
        res.status(201).json(user);
    }
    catch(err) {
        res.send(`Error: ${err}`);
    }
});

//@desc Update user details
//@route PUT /api/users
//@access public

const updateDetails = asyncHandler(async (req,res) => {
    const user = await Users.findById(req.params.id);
    if (!user) {
        res.status(404);
        throw new Error("User not found");
    }
    const updatedUser = await Users.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedUser); // Backtick(``) is used for string interpolation instead of '' and ""
});

//@desc Delete user
//@route DELETE /api/users
//@access public

const deleteUser = asyncHandler(async (req,res) => {
    const user = await Users.findById(req.params.id);
    if (!user) {
        res.status(404);
        throw new Error("User not found.");
    }
    await Users.deleteOne(user);
    res.status(200).json(user);
});

module.exports = {getUserDetails,getUsers,createUser,updateDetails,deleteUser};