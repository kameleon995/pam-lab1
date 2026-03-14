const tasks = ["zajęcia", "zakupy", "trening"];

function createDayPlan(name, tasks = "none") {
  let dayPlan = `|==========(  ${name}  )==========|\n`
  if (tasks === "none") {
    dayPlan += "No tasks to do";
    return dayPlan;
  }
  let count = 0;
  tasks.forEach(task => {
    dayPlan += `[ ] ${++count}. ${task}\n`;
  });
  dayPlan += `----------  Task count: ${count}`
  return dayPlan;
}

console.log(createDayPlan("Greg",tasks));
console.log("\n ");
console.log(createDayPlan("defaultuser0"));
