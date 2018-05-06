/*const set = new Set([1,2,3,3,4,4,5,3]);

const set = new Set().add(2).add(3);

console.log("Set size: ", set.size);
console.log("Set has: ", set.has(3));
console.log("Set delete: ", set.delete(3));
console.log("Set size: ", set.size);
console.log("Set has: ", set.has(3));
console.log("Set clear: ", set.clear());
console.log("Set size: ", set.size);*/

const set = new WeakSet();

let key = {};
set.add(key);
console.log(set.size);
key = null;
console.log(set.size);
