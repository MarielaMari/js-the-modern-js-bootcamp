//Udemy JS for BEGINNERS
//#85 Pangrams

//Pangram sentences where each letter of the alphabet is used only one time. In English there are not that many
//This is why we will use different Pangram, where you allow some letters to be used more than 1 time

console.log("----------------LONG APPROACH:--------------------");
function isPangram1(sentence) {
  if (sentence.indexOf("a") != -1)
    if (sentence.indexOf("b") != -1)
      if (sentence.indexOf("c") != -1)
        if (sentence.indexOf("d") != -1)
          if (sentence.indexOf("e") != -1) return isPangram();
}

console.log(
  "----------------SHORT APPROACH: DYNAMICALLY USING LOOP--------------------"
);
function isPangram2(sentence) {
  let lowerCased = sentence.toLowerCase();
  for (let char of "abcdefghijklmnopqrstvuwxyz") {
    console.log(char);
    if (lowerCased.indexOf(char) === -1) {
      return false;
    }
  }
  return true;
}
console.log(isPangram2("THe five boxing wizards jump quickly"));

console.log(
  "----------------NEWER APPROACH: USE INCLUDES INSTEAD OF INDEXOF BUT IT IS NOT SUPPORTED IN INTERNET EXPLORER, YET--------------------"
);
function isPangram3(sentence) {
  let lowerCased = sentence.toLowerCase();
  for (let char of "abcdefghijklmnopqrstvuwxyz") {
    //console.log(char);
    if (!lowerCased.includes(char)) {
      return false;
    }
  }
  return true;
}
console.log(isPangram3("THe five boxing wizards jump quickly"));
