const Employee = require("./employee");

class Manager extends Employee{
constructor(name,salary,title,manager,employees=[]){

    super(name,salary,title,manager);
this.employees=employees;

}

addEmployee(employee){
   this.employees.push(employee);
}
/* The test for this file is not initiallizing at all, but it has taught me a valuable lesson of reading spec files*/

_totalSubSalary() {
    let sum = 0;
    return this.employees.reduce(( prev, current ) => {
      if (current instanceof Manager) {
        return prev + ( current.salary + current._totalSubSalary() );
      } else {
        return prev + current.salary;
      }
    }, sum);
  }

  calculateBonus(multiplier) {
    const bonus = ( this.salary + this._totalSubSalary() ) * multiplier
    return bonus;
  }
}



module.exports= Manager;
const splinter = new Manager('Splinter', 100000, 'Sensei');


const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
const raph = new Manager('Raphael', 90000, 'Ninja', leo);
const mikey = new Employee('Michelangelo', 85000, 'Grasshopper', raph);
const donnie = new Employee('Donatello', 85000, 'Grasshopper', raph);

console.log('After: ', splinter);

 console.log(splinter.calculateBonus(0.05)); // => 22500
 console.log(leo.calculateBonus(0.05)); // => 17500
 console.log(raph.calculateBonus(0.05)); // => 13000
