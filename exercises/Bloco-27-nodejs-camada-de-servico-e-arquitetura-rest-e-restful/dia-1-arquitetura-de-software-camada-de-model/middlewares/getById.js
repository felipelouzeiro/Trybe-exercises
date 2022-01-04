const { getById } = require("../models/User");

module.exports = async (req, res, next) => {
try{ 
  const { id } = req.params;
  const user = await getById(id);
  if(!user){
    return res.status(404).json({
      "message": "Usuário não encontrado"
  })
  }

 return res.status(200).json(user);
}catch(err){
  next(err)
}
}