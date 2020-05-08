class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
    console.log(this.tableElement)
  };

  updateGrades(grades) {
    let tBody = this.tableElement.querySelector("tbody");

    tBody.innerHTML = "";
  };
};
