let promise = getPromise();
promise.then((res) => {
 console.log("promise fulfilled",res);
});

promise.catch((err) => {
 console.log("rejected", err); 
});