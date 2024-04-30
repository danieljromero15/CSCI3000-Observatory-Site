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
    loadAppointment();

    let header = document.querySelector("#header");
    let sticky = header.offsetTop;

    window.onscroll = function() {
        let header_buttons = document.getElementsByClassName("header-button");

        if (window.scrollY > sticky) {
            document.getElementById("menu").style.background = "linear-gradient(white, whitesmoke)"
            document.getElementById("menu").style.borderBottom = '2px solid goldenrod';
            document.querySelector('.header-button').style.color = 'black';
            for(let i = 0; i < header_buttons.length; i++) {
                header_buttons[i].style.color = 'black';
            }
        }
        else {
            document.getElementById("menu").style.background = 'transparent';
            document.getElementById("menu").style.borderBottom = '';
            for(let i = 0; i < header_buttons.length; i++) {
                header_buttons[i].style.color = 'white';
            }
        }
    }
});

function loadHeader() {
    document.getElementById("header").innerHTML =
        "<span id='menu'>" +
        "<div><a href='index.html#top' class='header-button'><img alt='University of North Georgia Logo' id='headericon' src='res/icons/UNG-Icon.jpg'> North Georgia Astronomical Observatory</a></div>\n" +
        "<div class='flex-container'>" +
        "<div><a href='index.html#telescopes' class='header-button'>About Us</a></div>\n" +
        "<div><a href='index.html#gallery_section' class='header-button'>Gallery</a></div>\n" +
        "<div><a href='index.html#appointments' class='header-button'>Appointments</a></div>\n" +
        "<div><a href='index.html#contact' class='header-button'>Contact Us</a></div>\n" +
        "<div><a href='index.html#contact' class='header-button'>Calendar</a></div>\n" +
        "</div>" +
        "</span>";
}

function chooseImage() {
    const headers = ["crab-nebula-mosaic.webp", "carina-nebula.webp", "MeerKAT on SDSS.webp", "bubble-nebula.webp", "orion-nebula.webp"];

    let random = Math.floor(Math.random() * headers.length);
    document.getElementById("header_image").setAttribute("src", "res/images/" + headers[random]);
}

function saveAppointment(){
    console.log("onchange running");
    localStorage.setItem("savedName", document.getElementById("name").value);
    localStorage.setItem("savedDate", document.getElementById("appointment_time").value);
}

function deleteAppointment(){
    localStorage.removeItem("savedName");
    localStorage.removeItem("savedDate");
}

function loadAppointment(){
    document.getElementById("name").value = localStorage.getItem("savedName");
    document.getElementById("appointment_time").value = localStorage.getItem("savedDate");
}