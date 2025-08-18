const logger = require('../utils/logger');

module.exports = (err, req, res, next) => {
  logger.error(err.stack);

  const statusCode = err.statusCode || 500;
  const message = err.message || 'Erro interno no servidor';

  res.status(statusCode).json({
    success: false,
    error: message
  });
};