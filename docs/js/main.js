/**
 * Created by g0g11 on 26.02.17.
 */

/** Navigation bar responsive **/
function myNavbar() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    }
    else {
        x.className ="navbar";
    }
}