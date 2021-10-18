const { Router } = require('express');
const routes = Router();

const controller = require ('../controllers/controller');

routes.post('/cadastrado', controller.cadastro);
routes.get('/cadastro', controller.exibir);
routes.get('/index', controller.index);

module.exports = routes;