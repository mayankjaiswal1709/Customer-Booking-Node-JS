let User = require('../models/customerSchema');

// customer add 
const addUser = async (req, res) => {
    console.log("new useradded**", req.body);
    const newUser = new User(req.body);
    await newUser.save()
    res.status(201).json({
        success: true,
        message: "customer added successully",
    })

}

// Update customer details

const userInfoEdit = async (req, res) => {
    console.log(req.params.id);
    try {
        const crud = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        });
        res.json(crud);


    } catch (error) {
        res.send("error" + error)
    }
}

// Delete customer

const userDelete = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    try {
        res.status(202).send({
            success: true,
            message: 'customer Deleted Successfuly'
        })

    } catch (error) {
        res.status(500).send({
            success: false,
            message: "customer not deleted please try again" + error
        })
    }
}

// get All customer details

const userList = async (req, res) => {
    const allUser = await User.find()
    res.status(200).send({
        success: true,
        message: "all customer are find successfully  list  below",
        userData: allUser,
    })
}
// get one customer details


const oneuser = async (req, res) => {
    const singleUser = await User.findById(req.params.id)
    res.status(200).send({
        success: true,
        message: "all customer are find successfully  list  below",
        userData: singleUser,
    })
}


module.exports = {
    addUser,
    userInfoEdit,
    userDelete,
    userList,oneuser,
}