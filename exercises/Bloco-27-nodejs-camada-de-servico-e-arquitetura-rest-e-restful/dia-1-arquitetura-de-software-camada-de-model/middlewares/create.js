const { create } = require("../models/User")
module.exports = async(req, res, next) => {
try{
  const {firstName, lastName, email, password} = req.body;
  const newUser = await create({firstName, lastName, email, password});
  return res.status(201).json(newUser);
} catch(err) {
  next(err)
}
}
