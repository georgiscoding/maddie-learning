const sum = (a, b) => {
  return a + b;
};

// sum function
// new laptop
const s = sum(1, 2);
// const message = "i am the best";
// console.log(`sum is ${s} and ${message}`);
// console.log("sum is " + s);
// console.log("sum is ${s}");
// console.log(s);
// console.log("s");
// console.log("i love gugu");

const getSumFunction = () => {
  //   const sum = (a, b) => {
  //     return a + b;
  //   };
  //   const x = 5;
  const sum = (t, r) => {
    return t + r;
  };
  return sum;
};

const sumFunction = getSumFunction();

const getDiffFunction = () => {
  const diff = (q, t) => {
    return q - t;
  };
  return diff;
};
const diffFunction = getDiffFunction();
const answer = diffFunction(10, 7);
console.log(answer);

//const result = sumFunction(4, 6);

// console.log({ result: result, message: "gugu is the best" });
// console.log([result, "gugu is the best"]);

// console.log({ result: result, message: "gugu is the best" });
// console.log([result, "gugu is the best"]);

//const series = [34, 45, 24, 67, 12];

//const sum = (arg) => {
//let ans = 0;

//for (let i = 0; i < arg.length; i++) {
//   ans += arg[i];
//}

// return ans;
//};

//const result = sum(series);
//console.log({ result, answer: sum(series) });

console.log("Hello world");

var sumOfNumbers = 80 + 34;
console.log(sumOfNumbers);

var difference = 65 - 34;
console.log(difference);

var multiply = 45 * 65;
console.log(multiply);

var divide = 3574 / 27;
console.log(divide);

var myNumber = 35;
myNumber = myNumber + 1;

console.log(myNumber);

var myOdd = 65;
myOdd--;
console.log(myOdd);
