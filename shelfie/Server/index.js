const bodyParser = require('body-parser');
const express = require('express');
const massive = require('massive');
const inventoryController = require('./controller')
require('dotenv').config();
const app = express();
app.use(bodyParser.json());
massive( process.env.CONNECTION_STRING ).then( dbInstance => app.set('db', dbInstance) );

app.get('/api/inventory', inventoryController.getInventory)
app.post('/api/product', inventoryController.postProduct)
app.delete('/api/product/:id', inventoryController.deleteProduct)


const port = 4000;
app.listen(port, ()=>console.log(`Port ${port} is best port!`))