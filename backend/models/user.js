const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fname: {
      type: String,
      required:true,
    },
    lname:{
      type: String,
      required:true,
    },
    username: {
      type: String,
      required:true,
    },
    email:{
      type: String,
      required:true,
    },
    passwordHash: {
      type: String,
      required:true,
    },
});

userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash;
  },
});

module.exports = mongoose.model("User", userSchema);