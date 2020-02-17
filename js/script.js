var name = prompt('Scrivi il tuo nome');
var surname = prompt('Scrivi il tuo cognome');
var favColour = prompt('Scrivi il tuo colore preferito');


var date = new Date();
var year = date.getFullYear();
// console.log(year);

var shortYear = year - 2000;
// console.log(shortYear);

var pwd1 = name + surname + favColour + year;
// console.log(pwd1);

var pwd2 = name + ';' + surname + ';' + favColour + ';' + year;
// console.log(pwd2);

var pwd3 = name + ';' + surname + ';' + favColour + ';' + shortYear;
// console.log(pwd3);


document.getElementById('pwd-1').innerHTML = pwd1;
document.getElementById('pwd-2').innerHTML = pwd2;
document.getElementById('pwd-3').innerHTML = pwd3;
