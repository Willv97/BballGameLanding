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

document.addEventListener('DOMContentLoaded', function () {
    const gameModesData = [
        { icon: 'fa-globe-americas', title: 'Story - City/Park Takeover', description: 'Take over parks around the world. Experience the thrill of street basketball in different locations with unique challenges.' },
        { icon: 'fa-globe-americas', title: '3v3', description: '3v3 Full Court. First team to 21pts wins.' },
        { icon: 'fa-globe-americas', title: '1v1', description: '1v1. First to 15pts wins' },
        { icon: 'fa-globe-americas', title: '21', description: 'First to 21pts wins. If you go over 21pts you get knocked back down to 14pts. All shots are worth 2pts. After a made shot, player shots 3 free shots each worth 1pt. Firsrt free shot of the game is worth 3pts. After 3 makes on your free shot, other players can play defense.' },
        { icon: 'fa-globe-americas', title: 'Knockout', description: 'Players shoot 3s. If you miss, youneed to make any shot before the player behind you or you will be eliminated.' },
        { icon: 'fa-globe-americas', title: '3pt/Shootout', description: '3pt Contest. Players shoot 5 times from each spot. Best score wins.' },
        { icon: 'fa-globe-americas', title: 'Horse', description: 'Make increasingly more difficult shots to survive. When you accumulate all 5 letters you lost.' },
        { icon: 'fa-globe-americas', title: '5v5', description: '2 Teams of 5 full court to 21. All shots are worth 1pt or 2pts.' },
        { icon: 'fa-globe-americas', title: 'Online Rival Games', description: 'Compete against rival teams and the winner takes home the bread for your park' },
        // Add other game modes with their data
    ];

    const modesList = document.getElementById('modes-list');

    // Dynamically generate list items based on the game modes data
    gameModesData.forEach(modeData => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div class="mode-header">
                <i class="fas ${modeData.icon}"></i>
                ${modeData.title}
            </div>
            <div class="mode-description">
                <p>${modeData.description}</p>
            </div>
        `;

        modesList.appendChild(listItem);

        // Add click event listener to each mode header
        const modeHeader = listItem.querySelector('.mode-header');
        modeHeader.addEventListener('click', function () {
            this.classList.toggle('active');
            const description = this.nextElementSibling;
            description.style.display = (description.style.display === 'block') ? 'none' : 'block';
        });
    });
});
