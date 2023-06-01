const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    // change the theme of the website
    document.body.classList.toggle('dark');
});

var preloader = document.querySelector(".preloader") 

window.addEventListener("load", vanish);

function vanish() {
    preloader.classList.add("disappear")
}
