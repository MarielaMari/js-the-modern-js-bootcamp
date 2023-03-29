//PRACTICE
//Write isValidPassword function
//It accepts 2 arguments: password and username
//Password must:
// - be at least 8 characters long
//- cannot contain spaces
//-cannot contain the username
//If all requirements are met return true
//Otherwise return false
//isValidPassword(')

console.log("------------------1st APPROACH---------------------");

function isValidPassword(password, username) {
  if (password.length < 8) {
    return false;
  }
  if (password.indexOf(" ") !== -1) {
    //indexOf would give (negative) -1 if no spaces
    return false;
  }
  if (password.indexOf(username) !== -1) {
    return false;
  }
  return true;
}

console.log(isValidPassword("chicken", "marieelalkksgjasdfas1234"));

console.log("-------------------2 REFACTORING:------------------");

//CAN REFACTOR IT:
function isValidPassword(password, username) {
  if (
    password.length < 8 ||
    password.indexOf(" ") !== -1 ||
    password.indexOf(username) !== -1
  ) {
    return false;
  }
  return true;
}

console.log(isValidPassword("marieela", "marieelalkksgjasdfas1234"));

//ANOTHER APPROACH

console.log("----------------3 ANOTHER APPROACH:-------------------");
function isValidPassword3(password, username) {
  const tooShort = password.length < 8;
  const hasSpace = password.indexOf(" ") !== -1;
  const containsUsername = password.indexOf(username) !== -1;
  if (too) {
    return false;
  }
  {
    return true;
  }
}
console.log(isValidPassword("cat", "dosg .kj;akf"));

//ANOTHER APPROACH: REVERSE IT

console.log("----------------4 ANOTHER APPROACH: REVERSE IT-------------------");
function isValidPassword3(password, username) {
  const tooShort = password.length < 8;
  const hasSpace = password.indexOf(" ") !== -1;
  const containsUsername = password.indexOf(username) !== -1;
  if (!tooShort && !hasSpace && !containsUsername) {
    return true;
  }
  {
    return false;
  }
}
console.log(isValidPassword("cat", "lkjadsa;fljo;iaua121313"));

//USING RETURN

console.log("----------------5 USING RETURN-------------------");
function isValidPassword3(password, username) {
  const tooShort = password.length < 8;
  const hasSpace = password.indexOf(" ") !== -1;
  const containsUsername = password.indexOf(username) !== -1;
  return !tooShort && !hasSpace && !containsUsername;
}

console.log(isValidPassword("catrvjvfyt42244", "jhktd"));
