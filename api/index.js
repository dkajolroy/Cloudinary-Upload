const express = require("express")
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const cors = require("cors")
const cloudinaryConnect = require("./Config/Cloudinary")
const { mongoConnect } = require("./Config/Database")
app.use(express.json())
app.use(cors())


// Database Connect()
mongoConnect()
cloudinaryConnect()

// Router Method
const UserRoutes = require("./Routes/UserRoutes")

app.use("/", UserRoutes)

// Listen Server
app.listen(process.env.PORT, () => {
    console.log("Server Listen Port=> " + process.env.PORT)
})