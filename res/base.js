// need to load header across every page, easier to load this function than copy and paste code every time
// plus when one change is made here the change is made across every page

/*
document.getElementById("appointments").addEventListener("click", function(){
    document.getElementById("appointments").scrollIntoView({behavior: "smooth"})
});
 */

document.addEventListener("DOMContentLoaded", function() {
    loadHeader();
    chooseImage();
});

function loadHeader() {
    document.getElementById("header").innerHTML =
        "<span id='menu'>" +
        "<div><a href='index.html'><img alt='University of North Georgia Logo' id='headericon' src='res/icons/UNG-Icon.jpg'> North Georgia Astronomical Observatory</a></div>\n" +
        "<div class='flex-container'>" +
        "<div><a href='contact.html'>Contact Us</a></div>\n" +
        "<div><a href='index.html#appointments'>Appointments</a></div>\n" +
        "<div><a href='about.html'>About Us</a></div>\n" +
        "<div><a href='calendar.html'>Calendar</a></div>\n" +
        "<div><a href='research.html'>Research</a></div>\n" +
        "</div>" +
        "</span>";
}
function chooseImage() {
    const headers = ["crab-nebula-mosaic.webp", "carina-nebula.jpg", "MeerKAT on SDSS.webp", "bubble-nebula.jpg", "orion-nebula.jpg"];

    let random = Math.floor(Math.random() * headers.length);
    document.getElementById("header_image").setAttribute("src", "res/images/" + headers[random]);
}

let header = document.getElementById("menu");
let sticky = header.offsetTop;

window.onscroll = function() {
    if (window.scrollY > sticky) {
        document.getElementById("menu").style.background = 'transparent';
        console.log("Transparent!");
    } else {
        document.getElementById("menu").style.background = 'linear-gradient(white, whitesmoke)';
        console.log("Solid!");
    }
}