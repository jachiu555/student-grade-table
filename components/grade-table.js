class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  };

  updateGrades(grades) {
    let tBody = this.tableElement.querySelector("tbody");

    tBody.innerHTML = "";

    for (let i = 0; i < grades.length; i++) {
      // let tr = document.createElement("tr");
      // let td = document.createElement("td");
      // let td1 = document.createElement("td");
      // let td2 = document.createElement("td");

      // let name = td.append(grades[i].name);
      // let course = td1.append(grades[i].course);
      // let grade = td2.append(grades[i].grade);

      // tr.append(td, td1, td2);

      // tBody.appendChild(tr);

      tBody.append(this.renderGradeRow(grades[i], this.deleteGrade));
    };
  };

  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  };

  renderGradeRow(data, deleteGrade) {
    let deleteGradeRow = document.createElement("tr");
    let deleteButton = document.createElement("button");
    let newName = document.createElement("td");
    let newCourse = document.createElement("td");
    let newGrade = document.createElement("td");

    newName.textContent = data.name;
    newCourse.textContent = data.course;
    newGrade.textContent = data.grade;

    deleteButton.innerHTML = "Delete";
    deleteButton.style.class = "btn btn-danger";
    deleteButton.addEventListener("click", function() {
      deleteGrade(data.id);
    });

    newGradeRow.append(deleteButton);
    newGradeRow.append(newName);
    newGradeRow.append(newCourse);
    newGradeRow.append(newGrade);

    return newGradeRow;
  };
};
