let pId=[1,2,3,4,5,6,7,8];
let names=["Alen","Deena","Diana","Jack","Jain","Kelvin","Louis","Rex"];
let age=[39,47,21,54,23,61,69,49];

let combinedArr=pId.map((id,index)=>({
    pId: id,
    name: names[index],
    age: age[index]
}));

function renderTable(data) {
    const tableBody = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
    tableBody.innerHTML = ""; // Clear existing data

    data.forEach(item => {
      const row = `<tr>
                    <td>${item.pId}</td>
                    <td>${item.name}</td>
                    <td>${item.age}</td>
                  </tr>`;
      tableBody.innerHTML += row; // Add new row
    });
  }

  function sortDescending(){
    combinedArr.sort((a,b) => b.age - a.age);
    renderTable(combinedArr);
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderTable(combinedArr);
  });

function findPID(){
    let PID = parseInt(document.getElementById("pid").value);
    let flag=false;
    for(let i=0;i<pId.length;i++){
        if(PID==pId[i]){
        document.getElementById("pidOut").innerHTML=`<p>
        P-Id:${PID}<br>
        Name:${names[i]}<br>
        Age:${age[i]}<br>
        </p>`
        flag=true;
        break;
        }
    }
    if(flag==false)
        document.getElementById("pidOut").innerHTML=`<p>P-Id ${PID} not found<p>`;
}
function filterAge(){
    const range = document.getElementById("filter").value;
    let minAge, maxAge;

  // Define age ranges based on selected option
  switch (range) {
    case "1":
      [minAge, maxAge] = [20, 40];
      break;
    case "2":
      [minAge, maxAge] = [40, 60];
      break;
    case "3":
      [minAge, maxAge] = [60, 80];
      break;
    default:
      return;
  }

  // Filter the data based on age range
  const filteredData = combinedArr.filter(item => item.age >= minAge && item.age <= maxAge);

  // Display the filtered data in the table
  renderTable(filteredData);

  // Show the selected range
  document.getElementById("filteredRange").innerHTML = `<p>Showing patients aged between <strong>${minAge}</strong> and <strong>${maxAge}</strong> in the table above.</p>`;
}



