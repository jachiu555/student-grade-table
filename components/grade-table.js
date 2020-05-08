class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
    console.log(this.tableElement)
  };

  updateGrades(grades) {
    let tBody = this.tableElement.querySelector("tbody");

    tBody.innerHTML = "";

    console.log(grades);

    for (let i = 0; i < grades.length; i++) {
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      let td1 = document.createElement("td");
      let td2 = document.createElement("td");

      let name = td.append(grades[i].name);
      let course = td1.append(grades[i].course);
      let grade = td2.append(grades[i].grade);

      tr.append(td, td1, td2);

      tBody.appendChild(tr);
    };
  };
};
