const movieReviews = {
  Arrival: 9.5,
  Alien: 9,
  Amelie: 8,
  "In Bruges": 9,
  Amadeus: 10,
  "Kill Bill": 8,
  "Little Miss Sunshine": 8.5,
  Coraline: 7.5,
};

//METHOD: Object.keys(movieReviews)

console.log();
console.log("=== Method: Object.keys(movieReviews) ===");
for (let movie of Object.keys(movieReviews)) {
  console.log(movie, movieReviews[movie]);
}

console.log();
console.log("=== Method: Object.values(movieReviews) ===");
const ratings = Object.values(movieReviews);
let total = 0;
for (let r of ratings) {
  total += r;
}
total /= ratings.length; //Dividing the total by the length... basically getting an average now
console.log(`The average rating is ${total}`);
