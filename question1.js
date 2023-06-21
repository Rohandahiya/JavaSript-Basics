// programs reads three string and print the smallest string

const readLineSync = require('readline-sync')

const s1 = readLineSync.question("Enter first string: ");
const s2 = readLineSync.question("Enter second string: ");
const s3 = readLineSync.question("Enter third string: ");

if(s1.length <= s2.length && s1.length <= s3.length){
    console.log(`${s1} is the smallest string`)
}else if(s2.length <= s1.length && s2.length <= s3.length){
    console.log(`${s2} is the smallest string`)
}else{
    console.log(`${s3} is the smallest string`)
}