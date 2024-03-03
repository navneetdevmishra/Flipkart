let slideIndex = 0;

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = "translateX(-" + slideIndex * 100 + "%)";
    }
}

setInterval(() => {
    moveSlide(1);
}, 3000);

showSlides(slideIndex);

account = document.querySelector(".acc01");
account.onclick = function () {
    acc_exp = document.querySelector(".accexp");
    acc_exp.classList.toggle("expand");

}
more = document.querySelector(".more01");
more.onclick = function () {
    more_exp = document.querySelector(".moreexp");
    more_exp.classList.toggle("expand");
}
mob_toggle = document.querySelector(".navbar_togler");
mob_toggle.onclick = function () {
    mob_toggle_exp = document.querySelector(".nav_mob_toogle_link");
    mob_toggle_exp.classList.toggle("expand");
}
function closenav(){
    document.querySelector(".nav_mob_toogle_link").classList.toggle("expand");
}
document.querySelector(".acc01 h3").onclick = function () {
    document.querySelector(".expmr").classList.toggle("exp");
}
document.querySelector(".more01 h3").onclick = function () {
    document.querySelector(".expmr2").classList.toggle("exp");
}