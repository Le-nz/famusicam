function Eins() {
    window.alert("Servus")
}
window.onhashchange = () => {
    pages(location.hash);
};
function pages(e) {
    const menu = document.querySelectorAll('#menu li a');
    const page = document.querySelectorAll('#main page')
    // menu
    for (let i = 0; i < menu.length; i++) {
        if (menu[i].getAttribute('href') == e) {
            menu[i].setAttribute('class', 'active')
        } else {
            menu[i].removeAttribute('class')
        }
    }
    for (let i = 0; i < page.length; i++) {
        if (page[i].getAttribute('page') == e) {
            page[i].style.display = 'block';
        } else {
            page[i].style.display = 'none';
        }
    }
    location.hash = e;
}
pages('#about')
// EXPERIMENT

