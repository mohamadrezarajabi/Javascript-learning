let sentence = prompt("Enter sentence: ");
let word = prompt("Enter the word you want to find.");

if (sentence.includes(word) === true){
    alert("the word is in the sentence")
} else {
    alert("the word isn't in the sentence")
}

// case sensitive   --> capital and small letters are DIFFERENT
//                      "JavaScript" !== "javascript" --> not the same
// case insensitive --> capital and small letters are THE SAME
//                      "JavaScript" === "javascript" --> same
// !NOTE: JavaScript is case sensitive by default.
//        methods like includes() and search() treat "Node" and "node" as different words.