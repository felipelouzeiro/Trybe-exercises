module.exports = (req, res, next) => {
  const {firstName, lastName, email, password} = req.body;

  const fields = [firstName, lastName, email, password];
  if(fields.includes(undefined) || fields.includes("") || fields.includes(null)) {
    return res.status(422).send({
      "message": "Todos os campos devem existir"
    })
  }

  if(typeof password !== 'string' || password.length < 6) {
    return res.status(422).send({
      "message": "O campo 'password' deve ter pelo menos 6 caracteres"
    })
  }
  next();
}





// const ERRO = 'invalid_data';
// const CODE_DATA_INVALID = 422;

// module.exports = async (req, res, next) => {
//     const { name } = req.body;

//     if (name.length <= 5) {
//       return res.status(CODE_DATA_INVALID).send({
//          err: { code: ERRO, message: '"name" length must be at least 5 characters long' } }); 
// }
//     next();
// };
