// storing UI elements
//buttons
const addApplicationBtn = document.querySelector("#add");
const clearFormBtn = document.querySelector("#clear");
const deleteApplicationBtn = document.querySelector("#delete-application--btn");
const deleteAllBtn = document.querySelector("#delete-all--btn");
const editApplicationBtn = document.querySelector(".edit");
const dismissWarning = document.getElementById("dismiss");

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
  // console.log(formData);
  if (jobApplications.has(formData)) {
    // console.log("This application already exists");
    duplicateWarning.style.display = "block";
  } else {
    // console.log("This is a unique application");
    jobApplications.add(formData);
    // console.log(jobApplications);
    allApplicationsContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="job">
            <p class="company">Company: ${companyInput.value}</p>
            <p class="job-title">Job title: ${jobTitleInput.value}</p>
            <p class="salary">Salary: ${salaryInput.value}</p>
            <p class="status">Status: ${statusInput.value}</p>
            <div class="application-btns">
              <button class="edit">✏️</button>
              <button class="delete-application--btn">🗑️</button>
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

// Function to delete a specific job application
function deleteApplication(event) {
  // Find the closest job listing container
  const jobCard = event.target.closest(".job"); // event.target = the button that is clicked; .closest(".application-card") finds the nearest parent div with that class

  // Extract job details from the UI
  const company = jobCard.querySelector(".company").textContent.split(": ")[1];
  const jobTitle = jobCard
    .querySelector(".job-title")
    .textContent.split(": ")[1];
  const salary = jobCard.querySelector(".salary").textContent.split(": ")[1];
  const status = jobCard.querySelector(".status").textContent.split(": ")[1];

  //recreate the stored JSON string
  const jobString = JSON.stringify({
    company: company,
    jobTitle: jobTitle,
    salary: salary,
    status: status,
  });

  // Find and remove from Set
  for (let job of jobApplications) {
    if (job === jobString) {
      jobApplications.delete(job);
      break;
    }
  }

  // Remove from UI
  jobCard.remove();
}

allApplicationsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-application--btn")) {
    deleteApplication(event);
  }
});

// DELETE ALL APPLICATIONS
deleteAllBtn.addEventListener("click", () => {
  jobApplications.clear();
  allApplicationsContainer.innerHTML = "";
});

// EDIT SPECIFIC APPLICATION
function editApplication(event) {
  // Find the closest job listing container
  const jobCard = event.target.closest(".job");

  // Extract job details from the UI
  const company = jobCard.querySelector(".company").textContent.split(": ")[1];
  const jobTitle = jobCard
    .querySelector(".job-title")
    .textContent.split(": ")[1];
  const salary = jobCard.querySelector(".salary").textContent.split(": ")[1];
  const status = jobCard.querySelector(".status").textContent.split(": ")[1];

  //recreate the stored JSON string
  const jobString = JSON.stringify({
    company: company,
    jobTitle: jobTitle,
    salary: salary,
    status: status,
  });

  // Find and remove from Set
  for (let job of jobApplications) {
    if (job === jobString) {
      jobApplications.delete(job);
      break;
    }
  }

  //remove old former version from the UI list
  jobCard.remove();

  // fill in inputs with old details which user can change
  companyInput.value = company;
  jobTitleInput.value = jobTitle;
  salaryInput.value = salary;
  statusInput.value = status;
}

allApplicationsContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("edit")) {
    editApplication(event);
  }
});

// CLEAR FORM FUNCTIONALITY
clearFormBtn.addEventListener("click", () => {
  companyInput.value = "";
  jobTitleInput.value = "";
  salaryInput.value = "";
  statusInput.value = "";
});

// DISMISS DUPLICATE JOB WARNING
dismissWarning.addEventListener("click", () => {
  duplicateWarning.remove();
});
