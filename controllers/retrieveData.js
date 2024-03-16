const Users = require("../models/user");
const fs = require("fs");

const retrieveData = async (req,res) => {
    try {
        const users = await Users.find();
        await fs.promises.writeFile("data.json",JSON.stringify(users));
        res.json(users);
    }
    catch(err) {
        res.status(500).send(`Error: ${err}`);
    }
};

module.exports = retrieveData;