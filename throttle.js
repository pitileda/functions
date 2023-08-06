/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var throttle = function(fn, t) {
    let timeoutInProgress = null;
    let argsToProcess = null;
    
    const timeoutFunction = () => {
      if (argsToProcess === null) {
        timeoutInProgress = null; // enter the waiting phase
      } else {
        fn(...argsToProcess);
        argsToProcess = null;
        timeoutInProgress = setTimeout(timeoutFunction, t);
      }
    };
  
    return function throttled(...args) {
      if (timeoutInProgress) {
        argsToProcess = args;
      } else {
        fn(...args); // enter the looping phase
        timeoutInProgress = setTimeout(timeoutFunction, t);
      }
    }
  };

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  

   const throttled = throttle(console.log, 2000);
   throttled("log"); // logged immediately.
   sleep(1000);
   throttled("Ihor"); // logged at t=5000ms.
   sleep(200);
   throttled("Hello"); // logged at t=5000ms.