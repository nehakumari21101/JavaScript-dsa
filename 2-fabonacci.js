// var fib = function (n) {
//   const arr = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[i-1] + arr[i - 2]);
//   }
//   return arr[n];
// };
// fib(5);

// using recursion
const fib = function(n){
    if(n<=1) return n;

    return fib(n-1) + fib(n-2);
}
console.log(fib(3));

// const fib = (n) => (n <=1 ? n: fin(n-1) + fib(n-2));