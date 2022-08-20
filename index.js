const sum = (a, b) => {
  return a + b;
};

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
