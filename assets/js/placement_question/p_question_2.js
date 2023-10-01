// Get all the h2 elements
const h2Elements = document.querySelectorAll('.a-choice, .b-choice, .c-choice, .d-choice');

// Get the bottom-button element
const bottomButton = document.querySelector('.bottom-button');

const nextButton = document.getElementById('nextButton');


// Add click event listeners to the h2 elements
h2Elements.forEach((element) => {
  element.addEventListener('click', () => {
    // Remove the 'selected' class from all h2 elements
    h2Elements.forEach((el) => el.classList.remove('selected'));
    // Add the 'selected' class to the clicked h2 element
    element.classList.add('selected');
    
    // Show the bottom-button
    bottomButton.style.height = '20vh';
  });
});

nextButton.addEventListener('click', function () {
    // Redirect to the desired page (e.g., "asd.html")
    window.location.href = 'p_question_4.html';
});