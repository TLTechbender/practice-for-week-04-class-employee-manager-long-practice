/* I learnt this from the answer guide, it's a brilliant way to organize code, by keeping CLI tests in a separate file*/
const Employee = require("./classes/employee");
const Manager = require("./classes/manager");

const hobbes = new Manager('Hobbes', 1000000, 'Founder', null);
const calvin = new Manager('Calvin', 130000, 'Director', hobbes);
const susie = new Manager('Susie', 100000, 'TA Manager', calvin);
const lily = new Employee('Lily', 90000, 'TA', susie);
const clifford = new Employee('Clifford', 90000, 'TA', susie);

 console.log(hobbes.calculateBonus(0.05)); // => 70500
 console.log(calvin.calculateBonus(0.05)); // => 20500
 console.log(susie.calculateBonus(0.05)); // => 14000
 console.log(lily.calculateBonus(0.05)); // => 4500
 console.log(clifford.calculateBonus(0.05)); // => 4500


