class naveTripulada {
    constructor({
        peso,
        potencia,
        volando = false
    }){
        this.peso=peso;
        this.potencia=potencia
    }
    fly=()=>{
        volando= true;
    }
}
module.exports=naveTripulada;