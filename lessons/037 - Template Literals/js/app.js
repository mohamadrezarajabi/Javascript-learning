/*
 * Template Literals (` `) make string building much cleaner than using "+".
 * They allow variables to be inserted directly with ${}.
 * They also support multiline strings without manually adding "\n".
 */

let users = ["amin", "amir", "ali"];

let text = "";

let i = 1;

users.forEach(function (user) {

  /*
   * Instead of:
   * text = text + i + ". " + user + "\n";
   *
   * We use a Template Literal:
   * - easier to read
   * - cleaner when combining variables and text
   * - no need for multiple "+" operators
   */
  text = text + `${i}. ${user}\n`;
  i++;
});

alert(text);