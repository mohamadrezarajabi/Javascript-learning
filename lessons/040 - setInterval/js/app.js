/*
 * setInterval(callback, delay, ...args)
 * runs the callback again and again every "delay" ms, forever
 * extra args after delay get passed INTO the callback
 */

let i = 0;
const timer = setInterval(
  function (step) {
    console.log(i++);       // prints 0,1,2,... then increases i
    if (i >= step) {
      clearInterval(timer); // stops the interval --> without this it never stops
    }
  },
  1000, // delay --> runs every 1000ms (1 second)
  10    // step  --> passed as the "step" argument above --> stop at 10
);

// 1S  = 1000ms
// 25S = 25000ms

/*
 * clearInterval(id) --> stops a setInterval using the id setInterval returned
 * without clearInterval, the timer keeps running forever (memory leak risk)
 */