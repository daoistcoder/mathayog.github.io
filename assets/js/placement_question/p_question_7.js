// Get all the h2 elements
const h2Elements = document.querySelectorAll('.a-choice, .b-choice, .c-choice, .d-choice');
// Get the bottom-button element
const bottomButton = document.querySelector('.bottom-button');
const nextButton = document.getElementById('nextButton');
// Get the "Check Answer" button and feedback sections
const checkButton = document.getElementById('nextButton');
const correctFeedback = document.querySelector('.correct-feedback');
const incorrectFeedback = document.querySelector('.incorrect-feedback');


let answerSelected = false;

// Add click event listeners to the h2 elements
h2Elements.forEach((element) => {
  element.addEventListener('click', () => {
    // Check if an answer has already been selected
    if (answerSelected) {
      return;
    }
    
    // Remove the 'selected' class from all h2 elements
    h2Elements.forEach((el) => el.classList.remove('selected'));
    // Add the 'selected' class to the clicked h2 element
    element.classList.add('selected');
    
    // Show the bottom-button
    bottomButton.style.height = '20vh';
    
    // Set the answerSelected flag to true
    answerSelected = true;
  });
});


// THIS WILL BE THE BUTTON FOR THE NEXT BUTTON ON THE FEEDBACK SECTION INSTEAD
// nextButton.addEventListener('click', function () {
//     // Redirect to the desired page (e.g., "asd.html")
//     window.location.href = 'p_question_2.html';
// });


checkButton.addEventListener('click', () => {
  // Get the selected choice (if any)
  const selectedChoice = document.querySelector('.selected');
  
  if (!selectedChoice) {
      // No choice selected
      alert('Please select an answer before checking.');
      return;
  }
  
  if (selectedChoice.classList.contains('correct-answer')) {
      // Correct answer selected
      bottomButton.style.display = 'none';
      correctFeedback.style.display = 'flex';
      incorrectFeedback.style.display = 'none';
  } else {
      // Incorrect answer selected
      bottomButton.style.display = 'none';
      correctFeedback.style.display = 'none';
      incorrectFeedback.style.display = 'flex';
  }

  h2Elements.forEach((el) => el.classList.remove('selected'));

});