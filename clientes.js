const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');


router.post('/', clientesController.createCliente);


router.post('/editar/:id', clientesController.editClienteById);


router.post('/eliminar/:id', clientesController.deleteClienteById);


router.post('/listar', clientesController.getAllClientes);


router.post('/editar/nombre', clientesController.editClienteByName);

module.exports = router;
