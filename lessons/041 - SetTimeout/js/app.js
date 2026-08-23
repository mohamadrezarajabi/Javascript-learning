/*
 * setTimeout(callback, delay, ...args)
 * runs the callback ONCE, after "delay" ms have passed
 * extra args after delay get passed INTO the callback
 */

setTimeout(
  function (num1, num2) {
    console.log(`Timeout Function → ${num1 + num2}`); // runs once after 2s
  },
  2000, // delay --> 2000ms = 2 seconds
  12,   // passed as num1
  9     // passed as num2
);

/*
 * Use case: delaying a single action once
 * e.g. show a "saved!" message then hide it, delay an API retry,
 * show a splash screen for a few seconds before the app loads
 */