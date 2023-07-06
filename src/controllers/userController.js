const { conn } = require('../db');

const getAllUsers = async function (req, res) {
    try {
        let user = conn.users
        console.log(user,6)
        const result = await user.find() 
        res.status(200).send({
            success: true,
            data: result,
        });
    } catch (error) {
        console.error('Error retrieving users:', error);
       
    }
};

getAllUsers() 
module.exports = {
    getAllUsers,
};
