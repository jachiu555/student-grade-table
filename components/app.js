class App {
  constructor(gradeTable, pageHeader) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;

    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  };

  handleGetGradesError(error) {
    console.error(error);
  };

  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);

    let totalGrade = 0;
    let averageGrade = 0;

    for (let i = 0; i < grades.length; i++) {
      totalGrade += grades[i].grade;

      averageGrade = totalGrade / grades.length;
    };

    this.pageHeader.updateAverage(averageGrade);
  };

  getGrades() {
    $.ajax({
      type: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      timeout: 2000,
      data: "none",
      headers: {
        "X-Access-Token": "Npew7LVS"
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    });
  };

  start() {
    this.getGrades();
  }
};
