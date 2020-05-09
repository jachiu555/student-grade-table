class App {
  constructor(gradeTable) {
    this.gradeTable = gradeTable;

    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  };

  handleGetGradesError(error) {
    console.error(error);
  };

  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
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
