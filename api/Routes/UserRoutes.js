const Routes = require("express").Router()
const Cloudinary = require("cloudinary").v2
const UserModels = require("../Models/UserModels")


Routes.post("/user", async (req, res) => {
    const { image, name, email, password } = req.body
    Cloudinary.uploader.upload(image, {
        unique_filename: true,
        folder: "upload-project/" + name + "/profile"
    }, (err, result) => {
        if (err) return res.send({ message: err })
        if (result) {
            UserModels.create({
                name, email, password, avatar: result.secure_url
            })
            res.send({ message: "Account Created !!" })
        }
    })

})

Routes.get("/user", async (req, res) => {
    const users = await UserModels.find()
    res.send(users)
})






module.exports = Routes
