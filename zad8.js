const grades = [3.0, 4.0, 5.0, 3.5, 4.5];

function didStudentPass(studentGrades) {
	let average = studentGrades.reduce((sum, grade) => sum + grade, 0) / studentGrades.length;
	return finalGrade = (average < 3) ? "nzal" : "zal";
}

function calculateFinalGrade(studentGrades) {
	let average = studentGrades.reduce((sum, grade) => sum + grade, 0) / studentGrades.length;
	if (average == 5) {
		return "bdb";
	} else if (average >= 4.5) {
		return "db+";
	} else if (average >= 4.0) {
		return "db";
	} else if (average >= 3.5) {
		return "dst+";
	} else if (average >= 3.0) {
		return "dst";
	} else {
		return "ndst";
	}
}

let pass = didStudentPass(grades);
let grade = calculateFinalGrade(grades);

if (pass === "zal") {
	console.log(`Student passed and got a ${grade} grade.`);
} else if (pass === "nzal") {
	console.log(`Student did not pass.`);
} else {
	console.log("Student broke reality and is in a state of having passed and of having failed simultaneously.");
}