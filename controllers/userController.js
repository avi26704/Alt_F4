//@desc Get all user details
//@route GET /api/users
//@access public

const getDetails = (req,res) => {
    res.status(200).send(`Details of the user ${req.params.id}`)
};

//@desc Create new user
//@route POST /api/users
//@access public

const createUser = (req,res) => {
    console.log("User details: ",req.body);
    res.json({"message":"New user created"})
};

//@desc Update user details
//@route PUT /api/users
//@access public

const updateDetails = (req,res) => {
    res.json({"message":`User details updated for ${req.params.id}`}); // Backtick(``) is used for string interpolation instead of '' and ""
};

//@desc Delete user
//@route DELETE /api/users
//@access public

const deleteUser = (req,res) => {
    res.json({"message":`Deleted user ${req.params.id}`})
};

module.exports = {getDetails,createUser,updateDetails,deleteUser};