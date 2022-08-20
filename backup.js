const sum = (a, b) => {
  const values = [1, 3, 4, 5, 6];
  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    console.log({ value: value });
  }
  return a + b;
};
sum(2, 13);

const argumentArray = [1, 2, 3, 4, 5, 6, 77, 7, 3, 2, 4, 5, 6, 4, 5, 2, 3.44];

// This expects the argument to be of the form of an array of numbers
const multiply = (arg) => {
  const argLength = arg.length; // 3

  let ans = 1;

  for (let i = 0; i < argLength; i++) {
    const x = arg[i];
    ans = ans * x;
  }

  console.log({ ans });
  return ans;
};

const arg = [2, 3, 5, 8, 67];
multiply(arg);

// sum of an array of numbers

const addition = (arg) => {
  let ans = 0;
  for (let k = 0; k < arg.length; k++) {
    const r = arg[k];
    ans = ans + r;
  }
  return ans;
};
const y = addition(arg);
console.log({ result: y });

/* 
  Write a function multiply 
  arguments - one argument -> array of numbers
  
  inside the function write a for loop
  and inside for loop get value of each element. 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  */
