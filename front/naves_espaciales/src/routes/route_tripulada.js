const express = require('express')
const route = express.Router()
const controllerTripulada = require('../controllers/tripulada')

route.get('/', controllerTripulada.obtenerTodas)

module.exports=route;