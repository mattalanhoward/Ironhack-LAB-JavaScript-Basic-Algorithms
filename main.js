
console.log(`---Iteration 1: Names and Input---`)
// 1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = "Matthew";


// 1.2 Print `"The driver's name is XXXX"`.
console.log(`The driver's name is ${hacker1}`);


// 1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = "Jonah";


// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`The navigator's name is ${hacker2}`);



console.log(`\n---Iteration 2: Conditionals---`)
/*2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.*/

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `The navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}



console.log(`\n---Iteration 3: Loops---`)
/*3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"*/

let capsSeparated = "";
for (let i = 0; i < hacker1.length; i++) {
  capsSeparated += hacker1[i].toUpperCase() + " ";
}
console.log(capsSeparated);

//without loop
//console.log(hacker1.toUpperCase().split("").join(" "));


//3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
let reverseNav = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverseNav += hacker2[i];
}
console.log(reverseNav);


/*3.3 Depending on the lexicographic (alphabetical) order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?*/
// console.log(hacker1.localeCompare(hacker2));

if (hacker1.localeCompare(hacker2) < 0) {
  console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) > 0) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}



console.log(`\n\n*******Bonus Time!******* \n\n---Bonus 1:---`)

//Generate 3 paragraphs. Store the text in a variable type of string.

let loremParagraphs = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque augue et purus feugiat, sit amet volutpat est consectetur. Nullam congue porta tellus, pulvinar tempor lorem aliquet ut. Sed condimentum dolor in tellus et tincidunt, rutrum tempor eros placerat. Morbi iaculis nulla in vulputate hendrerit. Nullam luctus elit quis nulla aliquam accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur rhoncus lacus at odio tempus, nec pharetra nunc sagittis. Nunc ac luctus massa. Ut ex dui, tristique non cursus sit amet, feugiat eu nisl. Nunc semper nisi eu eros efficitur lobortis. Maecenas vitae lorem feugiat, fermentum erat a, dapibus magna. Nulla dapibus vulputate ante in bibendum. Aenean eget lacus quis ex aliquam iaculis ac ac ex. Nunc consectetur egestas diam, nec tincidunt et felis dapibus vel. Nulla at rhoncus ligula. Aliquam viverra ante eget ipsum pretium ultricies.

Etiam sit amet ante vehicula, tempus enim quis, molestie ipsum. Nulla nunc magna, auctor quis tempus nec, mollis efficitur est. Phasellus bibendum accumsan enim, ac hendrerit nisi laoreet facilisis. Morbi hendrerit ultrices convallis. Nullam sit amet massa vel ipsum dictum malesuada in imperdiet urna. Mauris accumsan diam cursus odio pharetra ultrices. Aenean non porta metus, non fermentum nisl. Suspendisse in justo non tellus dignissim vestibulum at quis sem. Phasellus non mauris blandit, fermentum nisi nec, faucibus massa. Nam eu consectetur quam. Nunc sollicitudin dolor sapien, eu dapibus lacus accumsan eget. Cras turpis quam, posuere eu massa sed, placerat maximus dui. In molestie elit nec pretium suscipit. Suspendisse feugiat purus in fermentum bibendum. Donec facilisis cursus sollicitudin. Suspendisse viverra orci eget urna dignissim sodales.

Sed tortor neque, accumsan et luctus et vel, mollis porta ligula. Sed viverra enim sed ornare elementum. Nulla facilisi. Curabitur lectus odio, sodales nec mauris at, rhoncus semper tortor. Morbi dolor turpis, dapibus non enim ut, consequat auctor eros. Suspendisse sed vehicula sapien. Vestibulum rutrum, erat vitae pulvinar egestas, erat dui venenatis odio, sit et amet sollicitudin ipsum nibh nec turpis.`;

//Make your program count the number of words in the string.
let wordCount = 1;
for (let i = 0; i < loremParagraphs.length; i++) {
  if (loremParagraphs[i] === " ") {
    wordCount++;
  }
}

console.log(`Wordcount with a loop ${wordCount}`);

//without loop and with less code
console.log(`Wordcount without a loop ${loremParagraphs.split(" ").length}`);

// Make your program count the number of times the Latin word et appears.

(searchFor = " et "), (etCount = 0), (pos = loremParagraphs.indexOf(searchFor));

while (pos > -1) {
  ++etCount;
  pos = loremParagraphs.indexOf(searchFor, ++pos);
}
console.log(`There are ${etCount} instances of the word 'et'`);

//another way with the help of google.
let etCount1 = (loremParagraphs.match(/ et /g) || []).length;
console.log(
  `This is the 2nd way.  "et" is used ${etCount1} times`
);
//a 3rd way with google.
let etCount2 = loremParagraphs.split(" et ").length - 1;
console.log(`This is the 3rd way.  "et" is used ${etCount2} times`);



console.log(`\n---Bonus 2:---`)
/*Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon".*/

let phraseToCheck = "Was it a car or a cat I saw?";
let newStr = "";
let noPuncForward = "";
let noPuncReverse = "";

for (i = 0; i < phraseToCheck.length; i++) {
  switch (phraseToCheck[i]) {
    case " ":
    case "?":
    case ",":
    case "'":
    case "!":
      newStr += "";
      break;
    default:
      newStr += phraseToCheck[i];
  }
}

noPuncForward = newStr.toLowerCase();
console.log(`Forward ${noPuncForward}`);
for (let i = noPuncForward.length - 1; i >= 0; i--) {
  noPuncReverse += noPuncForward[i];
}
console.log(`Reverse ${noPuncReverse}`);

if (noPuncReverse === noPuncForward) {
  console.log(`The phrase "${phraseToCheck}" is a super cool palindrome!`);
} else {
  console.log(`Palindromes are hard. :( Try again. `);
}

//I fell down into the rabbit hole and created this.

let phraseToCheck1 = "Nerd Matthew";
let forward;
let reverse;

forward = phraseToCheck1.toLowerCase().replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");
console.log(`\nThis is the phrase forward "${forward}""`);

reverse = forward.split("").reverse().join("")
console.log(`This is the phrase backwards "${reverse}""`);

if (reverse === forward) {
  console.log(`The phrase "${phraseToCheck1}" is a super cool palindrome!`)
} else {
  console.log(`Palindromes are hard. :( Try again. `)
}
