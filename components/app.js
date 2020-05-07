class App {
  constructor(gradeTable) {
    gradeTable = this.gradeTable;

    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  };

  handleGetGradesError(error) {
    console.error(error);
  };

  handleGetGradesSuccess(grades) {
    console.log(grades);
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
