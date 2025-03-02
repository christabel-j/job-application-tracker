// storing UI elements
//buttons
const addApplicationBtn = document.querySelector("#add");
const clearFormBtn = document.querySelector("#clear");
const deleteApplicationBtn = document.querySelector("#delete-application--btn");
const deleteAllBtn = document.querySelector("#delete-all--btn");

//input fields
const companyInput = document.querySelector(".company-input");
const jobTitleInput = document.querySelector(".job-title-input");
const salaryInput = document.querySelector(".salary-input");
const statusInput = document.querySelector("select");

// job applications containter
const allApplicationsContainer = document.querySelector(".All-applications");

let jobApplications = new Set();
