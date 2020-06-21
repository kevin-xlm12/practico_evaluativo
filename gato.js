const Animal=require('./Animal');
class Gato extends Animal{
    constructor(patas,pelaje,tipo){
       super(patas,pelaje);
       this.tipo=tipo;

    }
    expesarse(){
        return("el gato mauyea")
    }

}
module.exports=Gato; 
