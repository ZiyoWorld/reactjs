

function Test(name){
    console.log(`hi ${name}`)
    console.log(`hi ${name}`)
    console.log(`hi ${name}`)
    console.log(`hi ${name}`)
}

Test("React");
Test("Angular");
Test("Vue");

class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
 let mycar = new Model("Ford", "Mustang");
  document.getElementById("demo").innerHTML = mycar.show();