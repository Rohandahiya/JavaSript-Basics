
// simple concatenation
let company = 'Infoedge Pvt. Ltd.';
let address = 'sector-45';

let addressCompany = "I work in " + company + " in " +address;

console.log(addressCompany);


// using template literal
let addressCompanyLiteral = `I work in ${company} in ${address}`;

let multiLine = `this is 
the address ${company} multipline`

console.log(addressCompanyLiteral);
console.log(multiLine)