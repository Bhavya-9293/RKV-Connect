// Function to Open the Form when Clicking "Apply Now"
function openForm(jobTitle) {
    document.getElementById("jobTitle").innerText = jobTitle;
    document.getElementById("jobForm").style.display = "block";
}

// Function to Close the Form
function closeForm() {
    document.getElementById("jobForm").style.display = "none";
}

// Handle Form Submission
document.getElementById("applicationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    alert("Application submitted successfully!");

    // Close the form
    closeForm();

    // Clear the form fields
    document.getElementById("applicationForm").reset();
});
