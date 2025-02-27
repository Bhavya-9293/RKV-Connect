// Get the modal and form elements
const modal = document.getElementById("form-modal");
const form = document.getElementById("join-form");
const modalTitle = document.getElementById("modal-title");
const closeBtn = document.querySelector(".close");

// Store the club name
let currentClub = "";

// Open modal when "Join Now" is clicked
document.querySelectorAll('.join-button').forEach(button => {
    button.addEventListener('click', () => {
        currentClub = button.getAttribute("data-club");
        modalTitle.textContent = `Join ${currentClub}`;
        modal.style.display = "flex";
    });
});

// Close modal when the close button is clicked
closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

// Close modal when clicking outside the modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Handle form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form data
    const name = document.getElementById("name").value;
    const id = document.getElementById("id").value;
    const department = document.getElementById("department").value;
    const year = document.getElementById("year").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Display alert with club name and form data
    alert(`You have joined ${currentClub}!\n\nName: ${name}\nStudent ID: ${id}\nDepartment: ${department}\nYear: ${year}\nEmail: ${email}\nPhone: ${phone}`);

    // Reset the form and close the modal
    form.reset();
    modal.style.display = "none";
});