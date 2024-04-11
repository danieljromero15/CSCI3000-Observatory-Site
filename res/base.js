// need to load header across every page, easier to load this function than copy and paste code every time
// plus when one change is made here the change is made across every page
window.onload = function () {
    loadHeader();
}

function loadHeader(){
    document.getElementById("header").innerHTML = "<div id='siteName'><img alt='University of North Georgia Logo' id='headericon' src='res/UNG_SteepleMark_2c_121x200.png'> North Georgia Astronomical Observatory</div><div id='menu' class='flex-container'>\n" +
        "        <div><a href='index.html'>Observatory</a></div>\n" +
        "        <div><a href='contact.html'>Contact Us</a></div>\n" +
        "        <div><a href='appointments.html'>Appointments</a></div>\n" +
        "        <div><a href='about.html'>About Us</a></div>\n" +
        "        <div><a href='calendar.html'>Calendar</a></div>\n" +
        "        <div><a href='research.html'>Research</a></div>\n" +
        "    </div>";
}

