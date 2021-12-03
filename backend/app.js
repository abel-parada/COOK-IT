const express = require("express")
const cors = require("cors")
const app = express()
const mongoose = require("mongoose")
const config = require("./utils/config")
const logger = require("./utils/logger")

mongoose
  .connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
  })
  .then(() => {
    logger.info("connceted to mongodb");
  })
  .catch((error) => {
    logger.error("error connecting to mongoDB", error.message);
  });

app.use(cors())

app.use(express.json())

app.get("/", (req,res)=>{
    res.send("<h1>hello world!! </h1>")
})



module.exports = app;