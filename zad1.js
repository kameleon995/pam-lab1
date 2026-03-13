const user = {
  firstName: "Jan",
  lastName: "Kowalski",
  city: "Katowice",
  age: 21,
  fieldOfStudy: "informatyka"
};

console.log(`User name: ${user.firstName} ${user.lastName}`);
console.log(`User studies ${user.fieldOfStudy} in ${user.city}`);
console.log(`User is a ${{...user, gender: "dude"}.gender}`);