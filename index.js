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
