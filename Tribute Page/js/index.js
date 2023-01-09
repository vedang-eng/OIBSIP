let scrollEl = document.getElementById('navMe');



window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
        scrollEl.classList.add('navbar-scrolled');
        scrollEl.classList.remove('navbar-dark');
        scrollEl.classList.add('navbar-light');

    } else if (window.scrollY < 500) {
        scrollEl.classList.remove('navbar-scrolled');
        scrollEl.classList.add('navbar-dark');
        scrollEl.classList.remove('navbar-light');
    }
});


const menuItem = document.querySelector(".navbar__menu-item");

function followImageCursor(event, menuItem) {
    const contentBox = menuItem.getBoundingClientRect();
    const dx = event.pageX - contentBox.x;
    const dy = event.pageY - contentBox.y;
    menuItem.children[1].style.transform = `translate(${dx}px, ${dy}px)`;
}

menuItem.addEventListener("mousemove", (event) => {
    setInterval(followImageCursor(event, menuItem), 1000);
});