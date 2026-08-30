/*
 * submit event --> fires on the <form> itself when a submit-type button
 * is clicked OR Enter is pressed inside any input field of that form
 */

const form = document.querySelector(".signup-form");
const status = document.querySelector(".status");

form.addEventListener("submit", function () {
  console.log("Submit Event");
  status.textContent = "Form submitted ✓";
});

/*
 !NOTE: difference from onclick:
 * onclick fires on ONE specific button, only reacts to a mouse click
 * submit fires on the FORM, triggered by button click OR pressing Enter in any field
 * submit also lets you call event.preventDefault() to stop the default page reload,
 * something a plain onclick on a button doesn't automatically need/handle
 */
