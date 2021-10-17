const { Router } = require('express');
const routes = Router();

const controller = require ('../controllers/controller');

routes.post('/cadastro', controller.cadastro);

module.exports = routes;