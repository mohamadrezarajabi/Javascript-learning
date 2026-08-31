/*
 * preventDefault --> stops the BROWSER's built-in default behavior for an event
 * for a <form>, the default behavior on submit is: reload the whole page
 */

const button = document.querySelector("button");
const input = document.querySelector(".text-input");
const form = document.querySelector(".demo-form");
const formStatus = document.querySelector("#status");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stops the page reload --> without this, the page refreshes instantly

  formStatus.textContent = `Submitted value: "${input.value}"`; // shown on the page, not console
});

/*
 * !NOTE: if you comment out event.preventDefault(), the browser reloads the page
 * the instant you submit --> the status text you just set gets wiped out immediately,
 * so you'd never even see it. that's WHY preventDefault is essential for JS-handled forms
 *
 * this same pattern applies to <a href="..."> links --> preventDefault stops the page navigation
 */