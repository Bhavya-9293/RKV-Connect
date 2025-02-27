let slideIndex = 1;
showSlides(slideIndex);

// Function to navigate slides manually
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// Poll functionality
const pollData = {
    q1: { Python: 30, C: 60, Java: 40, R: 0 },
    q2: { Tableau: 30, "Power BI": 70, Matplotlib: 20, Excel: 85 },
    q3: { MySQL: 15, MongoDB: 35, PostgreSQL: 80, Cassandra: 50 },
};

document.querySelectorAll('.options input[type="radio"]').forEach((radio) => {
    radio.addEventListener('change', (event) => {
        const questionId = event.target.name; // e.g., "q1"
        const selectedOption = event.target.value; // e.g., "Python"
        pollData[questionId][selectedOption]++; // Increment the count for the selected option

        // Update the results display
        updateResults(questionId);
    });
});

function updateResults(questionId) {
    const resultsDiv = document.getElementById(`results-${questionId}`);
    const totalVotes = Object.values(pollData[questionId]).reduce((sum, count) => sum + count, 0);

    let resultsHTML = "<strong>Results:</strong><br>";
    for (const [option, count] of Object.entries(pollData[questionId])) {
        const percentage = totalVotes > 0 ? ((count / totalVotes) * 100).toFixed(2) : 0;
        resultsHTML += `
            <div class="progress-bar">
                <div style="width: ${percentage}%">${percentage}%</div>
            </div>
            ${option}<br>
        `;
    }

    resultsDiv.innerHTML = resultsHTML;
}