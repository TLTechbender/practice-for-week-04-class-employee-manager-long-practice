class Employee {
    constructor(name,salary,title, manager){
        this.name=name;
        this.salary=salary;
        this.title= title;
        this.manager= !manager ? null:manager; /*I honesly don't understand what this line of code is meant for right now ooo!!!1*/

        if (manager){
            manager.addEmployee(this);
       }
        }
/*I don't know what is going on but my test files don't seem to work and it's really causing me a lot of stress, I'm also having to quickly use the answer guide*/

    calculateBonus(multiplier){
        const bonus = this.salary * multiplier;
        return bonus;
    }
    }
module.exports= Employee;
 const leo = new Employee('Leonardo', 90000, 'Ninja');

 const raph = new Employee('Raphael', 90000, 'Ninja');
 const donny = new Employee('Donatello', 85000, 'Grasshopper');
console.log(leo.calculateBonus(0.5));
console.log(raph.calculateBonus(0.25)); // => 22500
 console.log(donny.calculateBonus(0.15)); // => 12750
