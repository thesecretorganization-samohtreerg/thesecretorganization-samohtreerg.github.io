// Automatically mark dropdown buttons
document.querySelectorAll('.menu-item > button').forEach(btn => {
    if (btn.nextElementSibling && btn.nextElementSibling.classList.contains('menu')) {
        btn.classList.add('has-dropdown');
    }
});

// Expand/Collapse Menu
function expandMenu(menu) {
    menu.classList.add('open');
    menu.style.maxHeight = menu.scrollHeight + 'px';
    menu.addEventListener('transitionend', () => {
        menu.style.maxHeight = 'none';
    }, { once: true });
}

function collapseMenu(menu) {
    menu.style.maxHeight = menu.scrollHeight + 'px';
    menu.offsetHeight; // force reflow
    menu.style.maxHeight = '0';
    menu.classList.remove('open');
}

const menuToggles = document.querySelectorAll('.menu-toggle');

window.addEventListener('click', (e) => {
    menuToggles.forEach(toggle => {
        const menu = toggle.nextElementSibling;
        if (!menu) return;

        if (toggle.contains(e.target)) {
            const isOpen = menu.classList.contains('open');
            if (isOpen) {
                collapseMenu(menu);
                toggle.classList.remove('expanded');
            } else {
                expandMenu(menu);
                toggle.classList.add('expanded');
            }
        } else if (!menu.contains(e.target)) {
            collapseMenu(menu);
            toggle.classList.remove('expanded');
        }
    });
});
