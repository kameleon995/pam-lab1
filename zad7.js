const repairs = [
  { id: 1, client: "Anna", device: "laptop", status: "new" },
  { id: 2, client: "Piotr", device: "phone", status: "in progress" },
  { id: 3, client: "Ola", device: "tablet", status: "finished" }
];

function getRepair(id, repairList = repairs) {
  return repairList.filter(repair => repair.id == id).at(0);
}

function countInProgress(repairs) {
  return repairs.filter(repair => repair.status === "in progress").length;
}

function changeStatus(id, newStatus) {
  const repairsUpdate = [...repairs]
  repairsUpdate.filter(repair => repair.id === id)
          .map(repair => {
            repair.status = newStatus;
            return repair;
          });
  return repairsUpdate;
}

function printRepair(repair) {
  console.log(`Repair ${repair.id}:\nClient: ${repair.client}\nDevice: ${repair.device}\nStatus: ${repair.status}\n`); 
}

let randomRepair = getRepair(3);
printRepair(randomRepair);

let updatedRepairs = changeStatus(1, "in progress");

let updatedRepair = getRepair(1, updatedRepairs);
printRepair(updatedRepair);