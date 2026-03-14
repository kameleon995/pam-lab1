const movies = [
  { title: "Arrival", category: "sci-fi", rating: 8.1, watched: true },
  { title: "Whiplash", category: "drama", rating: 8.5, watched: false },
  { title: "Dune", category: "sci-fi", rating: 8.0, watched: false },
  { title: "Inside Out", category: "animation", rating: 8.1, watched: true }
];

let unwatchedMovies = movies.filter(movie => !movie.watched);
console.log("Unwatched movies:");
unwatchedMovies.forEach(movie => console.log(` * ${movie.title} (${movie.category}, rating: ${movie.rating})`));

let goodMovies = movies.filter(movie => movie.rating > 8);
console.log("\nGood movies (rated over 8.0):");
goodMovies.forEach(movie => console.log(` * ${movie.title} (${movie.category}, rating: ${movie.rating})${movie.watched ? " - watched" : ""}`));

let sciFiMovies = movies.filter(movie => movie.category === "sci-fi");
let movieTitles = sciFiMovies.map(movie => movie.title);
console.log("\nMovie titles:")
movieTitles.forEach(title => console.log(` * ${title}`));

let goodSciFiMovies = sciFiMovies.filter(movie => movie.rating > 8);
console.log("\nGood sci-fi movies:");
goodSciFiMovies.forEach(movie => console.log(` * ${movie.title} (${movie.category}, rating: ${movie.rating})${movie.watched ? " - watched" : ""}`));