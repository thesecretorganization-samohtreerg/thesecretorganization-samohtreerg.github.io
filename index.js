const dangerPage = `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Danger | The Organization</title>
        <link rel="icon" type="image/png" href="icon.png">
        <link rel="stylesheet" href="style.css">
        <script defer src="org-state.js"></script>
    </head>

    <body style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh">

        <img src="icon.png" style="width: 80%; max-width: 1000px;">
        <h1>we are always watching</h1>
        <audio src="./scary-ambience.mp3" autoplay></audio>

    </body>

    <script>
        // When the user presses back:
        window.addEventListener("popstate", () => {
            // Reload or restore the original page
            location.reload();
        });
    </script>

    </html>
`;

// Redirect to danger when icon animation goes too long
const icons = document.querySelectorAll('.top-icon-container');
const scaryBuildup = new Audio('./scary-buildup.mp3');
icons.forEach(icon => {
    icon.addEventListener('click', () => {
        scaryBuildup.play();
        icon.classList.add('active');
        setTimeout(() => {
            history.pushState({}, "", location.href); // add undo point
            document.open();
            document.write(dangerPage);
            document.close();
        }, 8000);
    });
});

// Countdown timer to the "Event"
const countdownDate = new Date('2025-11-17').getTime(); // change as needed
const timerElelements = document.querySelectorAll('.timer');

const updateTimer = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElelements.forEach(timerEl => {
        timerEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    });
};

const x = setInterval(updateTimer, 1000);
updateTimer();

// Deep menu
const deepMessages = [
    { message: 'Do not.', button: 'More' },
    { message: 'Stop.', button: 'More' },
    { message: 'Turn back.', button: 'More' },
    { message: 'Don\'t open.', button: 'More' },
    { message: 'Click off.', button: 'More' },
    { message: 'Go away.', button: 'More' },
    { message: 'Don\'t look', button: 'More' },
    { message: 'Close this menu.', button: 'More' },
];
const deepMenu = document.getElementById("deep-menu");
const deepMenuChildren = [...deepMenu.children];
let menu = deepMenu;
for (const { message, button } of deepMessages) {
    menu.innerHTML = `
                <li class="menu-item"><h4>${message}</h4></li>
                <li class="menu-item">
                    <button class="menu-toggle">${button}</button>
                    <ul class="menu"></ul>
                </li>
            `;
    menu = menu.querySelector('.menu');
};
menu.append(...deepMenuChildren);

// Reveal internal2 when necessary
const internal2 = document.getElementById('internal2');

function restore() {
    try {
        const v = localStorage.getItem('org_internal_total_v1');
        if (v) {
            revealInternal2();
        }
    } catch (e) { }
}

function revealInternal2() {
    internal2.classList.remove('hidden');
}

restore();
