// need to load header across every page, easier to load this function than copy and paste code every time
// plus when one change is made here the change is made across every page
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
        "<div><a href='appointments.html'>Appointments</a></div>\n" +
        "<div><a href='about.html'>About Us</a></div>\n" +
        "<div><a href='calendar.html'>Calendar</a></div>\n" +
        "<div><a href='research.html'>Research</a></div>\n" +
        "</div>" +
        "</span>";
}

function chooseImage() {
    const headers = ["crab_chandra.webp", "crab-nebula-mosaic.webp", "hubble deep field.webp", "MeerKAT on SDSS.webp", "sombrero-galaxy.webp", "Space1.webp"];

    let random = Math.floor(Math.random() * headers.length);
    document.getElementById("header_image").setAttribute("src", "res/images/" + headers[random]);
}
