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

    let header = document.querySelector("#header");
    let sticky = header.offsetTop;

    window.onscroll = function() {
        if (window.scrollY > sticky) {
            document.getElementById("menu").style.background = "linear-gradient(white, whitesmoke)"
            document.getElementById("menu").style.borderBottom = '2px solid goldenrod';
            document.getElementById("title-color").style.color = 'black';
            document.getElementById("contact-color").style.color = 'black';
            document.getElementById("appt-color").style.color = 'black';
            document.getElementById("tele-color").style.color = 'black';
            document.getElementById("calendar-color").style.color = 'black';
            document.getElementById("research-color").style.color = 'black';
        }
        else {
            document.getElementById("menu").style.background = 'transparent';
            document.getElementById("menu").style.borderBottom = '';
            document.getElementById("title-color").style.color = 'white';
            document.getElementById("contact-color").style.color = 'white';
            document.getElementById("appt-color").style.color = 'white';
            document.getElementById("tele-color").style.color = 'white';
            document.getElementById("calendar-color").style.color = 'white';
            document.getElementById("research-color").style.color = 'white';
        }
    }
});

function loadHeader() {
    document.getElementById("header").innerHTML =
        "<span id='menu'>" +
        "<div><a href='index.html' id='title-color'><img alt='University of North Georgia Logo' id='headericon' src='res/icons/UNG-Icon.jpg'> North Georgia Astronomical Observatory</a></div>\n" +
        "<div class='flex-container'>" +
        "<div><a href='index.html#contact' id='contact-color'>Contact Us</a></div>\n" +
        "<div><a href='index.html#appointments' id='appt-color'>Appointments</a></div>\n" +
        "<div><a href='index.html#telescopes' id='tele-color'>About Us</a></div>\n" +
        "<div><a href='index.html#contact' id='calendar-color'>Calendar</a></div>\n" +
        "<div><a href='research.html' id='research-color'>Gallery</a></div>\n" +
        "</div>" +
        "</span>";
}
function chooseImage() {
    const headers = ["crab-nebula-mosaic.webp", "carina-nebula.webp", "MeerKAT on SDSS.webp", "bubble-nebula.webp", "orion-nebula.webp"];

    let random = Math.floor(Math.random() * headers.length);
    document.getElementById("header_image").setAttribute("src", "res/images/" + headers[random]);
}