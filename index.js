document.addEventListener('DOMContentLoaded', function () {
    const feedbackForm = document.getElementById('feedbackForm');

    feedbackForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const feedbackTextarea = document.getElementById('feedback');
        const userFeedback = feedbackTextarea.value;

        // You can now use 'userFeedback' to send feedback to your server or perform other actions.
        console.log('User Feedback:', userFeedback);

        // Optionally, you can clear the textarea after submission
        feedbackTextarea.value = '';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const joinForumButton = document.querySelector('.cta-button');

    joinForumButton.addEventListener('click', function () {
        // Add logic to navigate to the forum section or open a new window with the forum URL
        alert('Redirect to the forum or open a new window with the forum URL.');
    });
});
