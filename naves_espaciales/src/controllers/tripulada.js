const naveTripulada = require('../js/tripuladas')
const primerNave = new naveTripulada({
    potencia:1000,
    peso:200,
})
let tripulada ={
    obtenerTodas : function(req,res){        
        return res.json({
            peso:primerNave.peso,
            potencia:primerNave.potencia,
            status:200
        })        
    }
}

module.exports = tripulada;