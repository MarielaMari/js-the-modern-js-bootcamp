const animals = ["lions", "tigers", "bears"]; //Loop through the entire array of scripts
for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}

console.log();
console.log("------LOOP EXAMPLE------");

const myStudents = [
  {
    firstName: "Johanna",
    grade: 86,
  },
  {
    firstName: "Sonya",
    grade: 88,
  },
  {
    firstName: "Tommy",
    grade: 78,
  },
  {
    firstName: "Peppy",
    grade: 89,
  },
];
console.log();

for (let k = 0; k < myStudents.length; k++) {
  let student = myStudents[k]; //Now student is an object. This allows us to easily access the keys in the Objects
  console.log();
  console.log(student);
  console.log(`${student.firstName} scored ${student.grade}`);
}

console.log();
console.log("-----------Looping through a String; REVERSED WORD--------------");

const word = "stressed";
for (let j = word.length - 1; j >= 0; j--) {
  console.log(word[j]);
}

console.log();
console.log("-----AVERAGE GRADES--------");

let total = 0; //it needs to be outside of the loop to work!
for (let m = 0; m < myStudents.length; m++) {
  let studentsGrade = myStudents[m];
  total += studentsGrade.grade;
}
console.log(total / myStudents.length);
