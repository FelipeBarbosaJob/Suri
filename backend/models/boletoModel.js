const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);
const dataPath = path.join(__dirname, '../db/boletos.json');

class BoletoModel {
  async getAllBoletos() {
    try {
      const data = await readFileAsync(dataPath, 'utf-8');
      return JSON.parse(data);
    } catch (err) {
      throw new Error('Falha ao acessar base de boletos');
    }
  }

  async getBoletoByCpf(cpf) {
    try {
      const boletos = await this.getAllBoletos();
      return boletos.find((item) => item.cpf === cpf);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new BoletoModel();