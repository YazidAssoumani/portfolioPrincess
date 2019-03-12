var menu = document.getElementById("menu");
var burger = document.getElementById("burger");
var cross = document.getElementById("cross");
var index, flex, none;

function menuBurger() {
    index = menu.className;
    flex = 'flex';
    none = 'none';

    switch (index) {
        case none:
            menu.className = flex;
            burger.style.display = "none";
            burger.style.opacity = "0";
            cross.style.display = "inline-block";
            cross.style.opacity = "1";
            break;
        case flex:
            menu.className = none;
            burger.style.display = "inline-block";
            burger.style.opacity = "1";
            cross.style.display = "none";
            cross.style.opacity = "0";
            break;
        default:
            break;
    }
}

/***************************************************
******************* STICKY MENU ********************
***************************************************/
    var navbar = document.getElementById("navigation");
    var sticky = window.innerHeight;

    function stickyMenu() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }

    window.onscroll = function() {stickyMenu()};
/***************************************************
******************* STICKY MENU ********************
***************************************************/