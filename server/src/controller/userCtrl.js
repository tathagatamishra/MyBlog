const userModel = require('../model/userModel');

exports.createUser = async (req, res) => {
    try {

        const data = req.body

        let createdData = await userModel.create(data)

        res.status(201).send({ status: true, message: "Your account created successfully 😃", data: createdData })
    }
    catch (err) {
        res.status(500).send({ status: false, message: "Internal Server Error!", error: err.message })
    }
} 