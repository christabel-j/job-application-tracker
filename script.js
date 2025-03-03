// storing UI elements
//buttons
const addApplicationBtn = document.querySelector("#add");
const clearFormBtn = document.querySelector("#clear");
const deleteApplicationBtn = document.querySelector("#delete-application--btn");
const deleteAllBtn = document.querySelector("#delete-all--btn");

//input fields
const companyInput = document.querySelector("#company");
const jobTitleInput = document.querySelector("#job-title");
const salaryInput = document.querySelector("#salary");
const statusInput = document.querySelector("select");

// job applications containter
const allApplicationsContainer = document.querySelector(".All-applications");

// duplicate application warning
const duplicateWarning = document.querySelector(".duplicate-warning-container");

let jobApplications = new Set();

// adding a new application
addApplicationBtn.addEventListener("click", () => {
  const formData = JSON.stringify({
    company: companyInput.value,
    jobTitle: jobTitleInput.value,
    salary: salaryInput.value,
    status: statusInput.value,
  });
  console.log(formData);
  if (jobApplications.has(formData)) {
    // console.log("This application already exists");
    duplicateWarning.style.display = "block";
  } else {
    // console.log("This is a unique application");
    jobApplications.add(formData);
    console.log(jobApplications);
    allApplicationsContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="job">
            <p>Company: ${companyInput.value}</p>
            <p>Job title: ${jobTitleInput.value}</p>
            <p>Salary: ${salaryInput.value}</p>
            <p>Status: ${statusInput.value}</p>
            <div class="application-btns">
              <button id="edit">✏️</button>
              <button id="delete-application--btn">🗑️</button>
            </div>
        </div>`
    );
  }
  // clear form inputs
  companyInput.value = "";
  jobTitleInput.value = "";
  salaryInput.value = "";
  statusInput.value = "";
});

// delete individual application functionality
// deleteApplicationBtn.addEventListener("click", () => {});
