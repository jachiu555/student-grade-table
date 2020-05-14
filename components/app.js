class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;

    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
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
    };

    averageGrade = totalGrade / grades.length;

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

  createGrade(name, course, grade) {
    $.ajax({
      method: "POST",
      url: "https://sgt.lfzprototypes.com/api/grades",
      timeout: 2000,
      headers: {
        "X-Access-Token": "Npew7LVS"
      },
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    });
  };

  deleteGrade(id) {
    console.log(id);
  };

  handleCreateGradeError(error) {
    console.error(error);
  };

  handleCreateGradeSuccess() {
    this.getGrades();
  };

  handleDeleteGradeError(error) {
    console.log(error);
  };

  handleDeleteGradeSuccess() {
    this.getGrades();
  };

  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
  }
};
