const boletoModel = require('../models/boletoModel');
const logger = require('../utils/logger');

exports.getSegundaVia = async (req, res, next) => {
  try {
    const { cpf } = req.body;

    logger.info(`Buscando segunda via para CPF: ${cpf}`);
    
    const boleto = await boletoModel.getBoletoByCpf(cpf);

    if (!boleto) {
      logger.warn(`CPF não encontrado: ${cpf}`);
      return res.status(404).json({ 
        success: false,
        error: 'CPF não encontrado na base de boletos' 
      });
    }

    logger.info(`Boleto encontrado para CPF: ${cpf}`);
    
    return res.json({
      success: true,
      message: 'Segue sua segunda via do boleto:',
      data: {
        boleto_url: boleto.boleto_url
      }
    });

  } catch (err) {
    logger.error(`Erro ao buscar boleto: ${err.message}`);
    next(err);
  }
};