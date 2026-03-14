const hasLaptop = true;
const hasCharger = false;
const hasNotebook = true;
const hasPen = true;
const dayType = "laboratories";

let isReady = false;

if (hasLaptop && hasCharger && hasNotebook && hasPen) {
	isReady = true;
} else {
	isReady = false;
}

console.log(`The student is ${isReady ? "" : "not "}ready.`);

!hasLaptop && console.log("Student forgot his laptop.");
!hasCharger && console.log("Student forgot his charger.");
!hasNotebook && console.log("Student forgot his notebook.");
!hasPen && console.log("Student forgot his pen.");

console.log(`Today the student has ${dayType} today.`);