//create class
class A {
    //1.property
    name = 'an';
    //2.constructor
     constructor(){
         this.getName();
     }

    //3.method
    getName(n) {

        return this.name;
    }


}
//class end 
//create class
class B extends A {
    //1.property

    //2.constructor
     constructor(){
         super();
         this.getName1();
     }

    //3.method
    getName1() {

        return this.name;
    }


}
//class end 
//object.property
//module.exports={};
module.exports = B;