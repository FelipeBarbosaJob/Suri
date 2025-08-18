const express = require('express');
const router = express.Router();
const boletoController = require('../controllers/boletoController');
const validateCPF = require('../middlewares/validateCPF');

router.post('/segunda-via', 
  validateCPF,
  boletoController.getSegundaVia
);

module.exports = router;