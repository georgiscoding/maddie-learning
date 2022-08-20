/* 

Tips
if you forget or encounter  error while trying to cd into project directory and run the code, run the following command
cd ~/learning/jslearning/playground && code .

To run the programme 
node index.js


Homework -> 

1) Read and go through the code again. then delete the code. then write the function to sum an array of numbers.


2) write a function. details below

function name -> calculator

accept no arguments for this function.

return an object of this form -> 
{
    sumFunction: (a,b) => {
        return a+b;
    },
    multiplyFunction: (a,b) = > {
        return a*b;
    }

}

so if i call the function like below

const r = calculator();

const sumResult = r.sumFunction(3,4);
const multiplyResult = r.multiplyFunction(4,5);

console.log({sumResult: sumResult, multiplyResult: multiplyResult});

should be {sumResult: 7, multiplyResult: 20}


*/
