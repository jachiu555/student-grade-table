class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  };

  updateGrades(grades) {
    let tBody = this.tableElement.querySelector("tbody");

    tBody.innerHTML = "";

    for (let i = 0; i < grades.length; i++) {

      tBody.append(this.renderGradeRow(grades[i], this.deleteGrade));

      // if (grades.length > 1) {

      // };
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
    deleteButton.style = "btn btn-danger";
    deleteButton.addEventListener("click", function() {
      deleteGrade(data.id);
    });

    deleteGradeRow.append(newName);
    deleteGradeRow.append(newCourse);
    deleteGradeRow.append(newGrade);
    deleteGradeRow.append(deleteButton);

    return deleteGradeRow;
  };
};
