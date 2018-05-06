/*const map = new Map();

map.set("name", "WFM");
map.set("age", 20);


const obj1 = {};
const obj2 = {};

map.set(obj1, 10);
map.set(obj2, 50);

console.log("Size: ", map.size);
console.log("Has: ", map.has(obj2));
console.log("Delete: ", map.delete(obj2));
console.log("Size: ", map.size);

const map = new Map([
  ["name", "WFM"],
  ["age", 20]
]);

for(let val of map.values()) {
  console.log("Values: ", val);
}
for(let key of map.keys()) {
  console.log("Keys: ", key);
}
for(let entr of map.entries()) {
  console.log(`${entr[0]} - ${entr[1]}`);
}*/

const map = new WeakMap();
let key = {};
map.set(key, "key");
console.log("Size: ", map.size);
key = null;
console.log("Size: ", map.size);
