const config = require("./utils/config")
const app = require("./app")
const http = require("http")


const server = http.createServer(app)


app.listen(config.PORT, ()=>{
    console.log(`Server is running on PORT ${config.PORT}`)
})