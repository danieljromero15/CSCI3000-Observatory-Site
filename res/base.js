// need to load header across every page, easier to load this function than copy and paste code every time
// plus when one change is made here the change is made across every page
window.onload = function () {
    loadHeader();
}

function loadHeader() {
    document.getElementById("header").innerHTML =
        "<div id='menu' class='flex-container'>" +
            "<div><a href='index.html'><img alt='University of North Georgia Logo' id='headericon' src='res/UNG-Icon.jpg'> North Georgia Astronomical Observatory</a></div>\n" +
            "<div><a href='contact.html'>Contact Us</a></div>\n" +
            "<div><a href='appointments.html'>Appointments</a></div>\n" +
            "<div><a href='about.html'>About Us</a></div>\n" +
            "<div><a href='calendar.html'>Calendar</a></div>\n" +
            "<div><a href='research.html'>Research</a></div>\n" +
        "</div>";
}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
let header = document.getElementById("myHeader");

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}
