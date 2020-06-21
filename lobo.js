const Animal=require('./Animal');
class Lobo extends Animal{
    constructor(patas,pelaje,lugar){
        super(patas,pelaje);
        this.lugar=lugar;
    }
    expesarse(){
        return("el lobo auya")
    }

}
module.exports=Lobo; 
