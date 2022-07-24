const express = require('express')
const app = express()
const cors = require('cors')
const rutaTripulada = require('./src/routes/route_tripulada')

app.use(cors())
app.use('/tripulada',rutaTripulada)

app.listen('3001',()=>{
    console.log(`escuchando en el puerto 3001`);
})
