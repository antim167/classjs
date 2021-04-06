//create class
class MyClass {
    //1.property
    name = 'an';
    //2.constructor
     constructor(n){
         this.name=n;
     }

    //3.method
    getName() {

        return this.name;
    }


}
//class end 

//object.property
//module.exports={};
module.exports = MyClass;