const { updateById } = require("../models/User");

module.exports = async (req, res, next) => {
  try{
    const { id } = req.params;
    const {firstName, lastName, email, password} = req.body;
  
    const updatedUser = await updateById({id, firstName, lastName, email, password});
    return res.status(200).json(updatedUser)
  }catch(err){
    next(err)
  }
}