// need to load header across every page, easier to load this function than copy and paste code every time
// plus when one change is made here the change is made across every page
// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
});

window.onload = function () {
    loadHeader();
}

function loadHeader(){
    document.getElementById("header").innerHTML = "<div id='siteName'><img alt='University of North Georgia Logo' id='headericon' src='res/UNG_SteepleMark_2c_121x200.png'> Georgia Astronomical Observatory</div><div id='menu' class='flex-container'>\n" +
        "     <div><a href='index.html'>Observatory</a></div>\n" +
        "     <div><a href='contact.html'>Contact Us</a></div>\n" +
        "     <div><a href='appointments.html'>Appointments</a></div>\n" +
        "     <div><a href='about.html'>About Us</a></div>\n" +
        "     <div><a href='calendar.html'>Calendar</a></div>\n" +
        "     <div><a href='gallery.html'>Gallery</a></div>\n" +
        "     <div><a href='research.html'>Research</a></div>\n" +
        "    </div>";
}