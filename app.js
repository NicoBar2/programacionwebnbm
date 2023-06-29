const express = require('express');
const bodyParser = require('body-parser');
const clientesRoutes = require('./routes/clientes');

const app = express();

app.use(bodyParser.json());


app.use('/clientes', clientesRoutes);

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
