const { getAll } = require("../models/User")

module.exports = async (_req, res, next) => {
  try{
    const listUsers = await getAll();
    return res.status(200).send(listUsers)
  }catch(err){
      next(err)
  }
}