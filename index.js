import { create } from "domain";
import { DH_CHECK_P_NOT_SAFE_PRIME } from "constants";

/*let s = Symbol("field");

let obj = {
  age: 20,
  [s]: "WFM"
};

console.log(Object.getOwnPropertySymbols(obj));

let num = 1;
let str = "2";
let arr = [1, 2];
let obj = {name: "WFM"};

console.log("Number: ", typeof num[Symbol.iterator]);
console.log("String: ", typeof str[Symbol.iterator]);
console.log("Array: ", typeof arr[Symbol.iterator]);
console.log("Object: ", typeof obj[Symbol.iterator]);

function creatItterator(arr) {
  let count = 0;
  return {
    next() {
      return count < arr.length
       ? {value: arr[count++], done: false} : {value: undefined, done: true};
    }
  };
}
let iter = creatItterator([1,2,3,4]);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
*/
let fib = {
  [Symbol.iterator]() {
    let pre = 0, cur = 1;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return {
          value: cur, done: false
        };
      }
    };
  }
};

for( let n of fib) {
  if(n > 1500) break;
  console.log(n);
}
