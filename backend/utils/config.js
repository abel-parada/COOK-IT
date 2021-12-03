require("dotenv").config()

const PORT = 5000
const MONGODB_URI =`mongodb+srv://kapa:123456kaPA@cluster0.tfjsx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

module.exports={
    PORT, 
    MONGODB_URI
}