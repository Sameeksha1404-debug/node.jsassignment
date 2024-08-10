const fs=require('fs')

console.log("hello ladies and gentlemen!")


const content=fs.readFileSync('input.txt')
console.log("content read:"+content)

console.log("Ciao")
//write

fs.writeFileSync('output.txt',"hello this is an output text")

/**
 * o/p
 * Hello, World!
hello ladies and gentlemen!
content read:hello everyone! Sameeksha this side 
Nice to meet you all
Have a marvellos day and keep growing..
Ciao
 */
