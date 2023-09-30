document.addEventListener('DOMContentLoaded', function () {
    // Get all the avatar elements
    const avatarElements = document.querySelectorAll('.avatar-element');

    // Get the bottom button
    const bottomButton = document.querySelector('.bottom-button');

    // Add click event listeners to the avatar elements
    avatarElements.forEach((element) => {
        element.addEventListener('click', () => {
            // Remove the 'selected' class from all avatar elements
            avatarElements.forEach((el) => el.classList.remove('selected'));
            // Add the 'selected' class to the clicked avatar element
            element.classList.add('selected');

            // Show the bottom button
            bottomButton.style.display = 'flex';
        });
    });

    // Add a click event listener to the "Next" button
    const nextButton = document.getElementById('nextButton');
    nextButton.addEventListener('click', function () {
        // Redirect to the desired page (e.g., "nextPage.html")
        window.location.href = 'nextPage.html';
    });
});