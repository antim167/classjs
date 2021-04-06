//create class
class A {
    //1.property
    name = 'an';
    //2.constructor
     constructor(n){
         this.name=n;
         this.getName();
     }

    //3.method
    getName() {
        console.log("hello from a class");
        return this.name;
    }


}
//class end 
//create class
class B extends A {
    //1.property

    //2.constructor
     constructor(n){
         super(n);
         this.getName1();
     }

    //3.methods
    getName1() {
      console.log("helo from b class");
        return this.name;
    }


}
//class end 
//object.property
//module.exports={};
module.exports = B;