let nam = "Nikhil Lanje";

console.log(nam); //print Nikhil Lanje

let nam2 = nam.toLowerCase()
console.log(nam2); //print nikhil lanje

let nam3 = nam.toLocaleUpperCase()
console.log(nam3); //print NIKHIL LANJE

let nam4 = nam.indexOf("h");
console.log(nam4); //print 3

let nam5 = nam.indexOf("z");
console.log(nam5); //print -1

let nam6 = nam.toUpperCase().trim();
console.log(nam6);  // print NIKHIL LANJE

let nam7 = nam.toLowerCase().trim();
console.log(nam7);  //print nikhil lanje

let nam8 = nam.slice(6);
console.log(nam8);  //print Lanje

let nam9 = nam.slice(1,4);
console.log(nam9); //print ikh

let nam10 = nam.replace("Nikhil","Vedant");
console.log(nam10);  // print Vedant Lanje