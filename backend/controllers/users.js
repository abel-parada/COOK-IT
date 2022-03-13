const bcrypt = require("bcrypt");
const usersRouter = require("express").Router();
const User = require("../models/user");

usersRouter.get("/", async (request, response) => {
  const users = await User.find({});
  response.json(users);
});

usersRouter.post("/register", async (request, response) => {
  const body = request.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(body.password, saltRounds);

  const user = new User({
    fname: body.fname,
    lname: body.lname,
    username: body.username,
    email: body.email,
    passwordHash,
  });

  const savedUser = await user.save();

  response.json(savedUser);
});

// usersRouter.get("/:singleid", async (request, response) => {
//   const singleUser = await User.find(request.params.id);
//   response.json(singleUser);
// });

module.exports = usersRouter;
