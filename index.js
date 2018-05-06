// http://date.jsontest.com/

/*function oldDelay(ms, func) {
  setTimeout(() => func(), ms);
}

oldDelay(3000, () => console.log("Old Delay Passed!"));*/

function delay(ms = 1000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(), ms);
  });
}

delay(4000)
  .then(() => {
    console.log("new delay passed!");
  })
  .catch(() => {
    console.info("error");
  });
