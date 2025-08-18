const { validate } = require('gerador-validador-cpf');

module.exports = (req, res, next) => {
  const { cpf } = req.body;
  
  if (!cpf) {
    return res.status(400).json({
      success: false,
      error: 'CPF é obrigatório'
    });
  }

  if (!validate(cpf)) {
    return res.status(400).json({
      success: false,
      error: 'CPF inválido'
    });
  }

  // Remove caracteres não numéricos
  req.body.cpf = cpf.replace(/\D/g, '');
  
  next();
};