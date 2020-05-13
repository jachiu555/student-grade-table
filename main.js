let tableElement = document.getElementsByClassName("table")[0];
let gradeTable = new GradeTable(tableElement);

let pageHeaderElement = document.getElementsByClassName("header")[0];
let pageHeader = new PageHeader(pageHeaderElement);


let gradeFormElement = document.getElementsByClassName("form")[0];
let gradeForm = new GradeForm(gradeFormElement);

let app = new App(gradeTable, pageHeader, gradeForm);

app.start();
