const Clientes = require('../models/clientes');

exports.createCliente = (req, res) => {
  const { nombre, telefono, registroCompras } = req.body;
  const cliente = new Clientes(nombre, telefono, registroCompras);
  cliente.save()
    .then(() => {
      res.status(201).json({ message: 'Cliente creado exitosamente.' });
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error al crear el cliente.', error });
    });
};

exports.editClienteById = (req, res) => {
  const clienteId = req.params.id;
  const { nombre, telefono, registroCompras } = req.body;
  Clientes.updateById(clienteId, nombre, telefono, registroCompras)
    .then(() => {
      res.json({ message: 'Cliente actualizado exitosamente.' });
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error al actualizar el cliente.', error });
    });
};


exports.deleteClienteById = (req, res) => {
  const clienteId = req.params.id;
  Clientes.deleteById(clienteId)
    .then(() => {
      res.json({ message: 'Cliente eliminado exitosamente.' });
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error al eliminar el cliente.', error });
    });
};


exports.getAllClientes = (req, res) => {
  Clientes.findAll()
    .then((clientes) => {
      res.json(clientes);
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error al obtener los clientes.', error });
    });
};


exports.editClienteByName = (req, res) => {
  const { nombre, telefono, registroCompras } = req.body;
  Clientes.findByName(nombre)
    .then((clientes) => {
      if (clientes.length === 0) {
        res.status(404).json({ message: 'No se encontró ningún cliente con ese nombre.' });
      } else {
        const clienteId = clientes[0]._id;
        Clientes.updateById(clienteId, nombre, telefono, registroCompras)
          .then(() => {
            res.json({ message: 'Cliente actualizado exitosamente.' });
          })
          .catch((error) => {
            res.status(500).json({ message: 'Error al actualizar el cliente.', error });
          });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error al buscar el cliente por nombre.', error });
    });
};
