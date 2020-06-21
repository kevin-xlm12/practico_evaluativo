const Animal=require('./Animal');
class Perro extends Animal{
    constructor(patas,pelaje,raza){
        super(patas,pelaje);
        this.raza=raza;
    }
  expesarse(){
     return("el perro torea")
 }

}
module.exports=Perro; 
