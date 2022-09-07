var prevScrollpos = window.pageYOffset;


window.onload = function() {
    changeNavbarColor();

    // mediaQueryContact("(max-width:870px)");
    (async () => {
        appearElements(document.getElementById("navbar"), 250);
        appearElements(document.getElementById("section1"), 250);
    })();
}
// sleep function:
function sleep(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }


// when window is resized always check if media query is true:
// window.onresize = function() {
//     mediaQueryContact("(max-width: 870px)");
// }


window.onscroll = function() {

    // change color of navbar when on top, and make navbar shrink up when scrolling down and appear when scrolling up:
    prevScrollpos = navbarScroll();
    changeNavbarColor()

    // appear elements when scrolling:
    checkIfInView("#section2", "section2");
    checkIfInView("#section3", "section3");
    checkIfInView("#section4", "section4");
}

// change color of navbar when on top:
function changeNavbarColor() {
    if($(window).scrollTop() > 0) 
        document.getElementById("navbar").style.backgroundColor =  "hsla(257, 70%, 9%, 0.671)";
    else 
        document.getElementById("navbar").style.backgroundColor = "transparent";
}


// Make navbar shrink up when scrolling down and appear when scrolling up:
function navbarScroll() {
    var currentScrollPos = window.pageYOffset;
        if($(window).scrollTop() > 75) {
            if (prevScrollpos > currentScrollPos) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-15vh";
            }
        }
    return currentScrollPos;
}







// change shadow direction:
window.onmousemove = function(event) {
    // console.log($(window).scrollTop());
    if(event.clientX > window.innerWidth/2) {
        $(".shadowed-dark-text").css("text-shadow", "-1px 1px 1px rgba(34, 34, 34, 0.15)");
        $(".shadowed-light-text").css("text-shadow", "-1px 1px 1px rgba(255, 255, 255, 0.15)");
        changeShadowDir("drop-shadow(-5px 5px 5px rgba(34, 34, 34, 0.25))", "drop-shadow(-3px 3px 3px rgb(90, 90, 90, 0.2))")
    }
        
    else {
        $(".shadowed-dark-text").css("text-shadow", "1px 1px 1px rgba(34, 34, 34, 0.15)");
        $(".shadowed-light-text").css("text-shadow", "1px 1px 1px rgba(255, 255, 255, 0.15)");
        changeShadowDir("drop-shadow(5px 5px 5px rgba(34, 34, 34, 0.25))", "drop-shadow(3px 3px 3px rgb(90, 90, 90, 0.2))")
    }
}


// change shadow direction of transparent image elements:
function changeShadowDir(shadDark, shadLight) {
    $(".shadowed-dark").css("filter", shadDark);
    $(".shadowed-dark").css("-webkit-filter", shadDark);
    $(".shadowed-light").css("filter", shadLight);
    $(".shadowed-light").css("-webkit-filter", shadLight);
}









// changing text of contant on different witdh of screen:
function mediaQueryContact(width) {
    if(window.matchMedia(width).matches) 
        document.getElementById("contacts").innerHTML = "(305) 558-7798<br>HELLO@3OS.US";
    else 
        document.getElementById("contacts").innerHTML = "(305) 558-7798 &emsp;|&emsp; HELLO@3OS.US";
}










// when loading add class .appear to every element that has class .hide one by one:
async function appearElements(section, speedOfAnimation) {
    var appear = section.getElementsByClassName("hide");
    for(var i = 0; i < appear.length; i++) {
        appear[i].classList.add("appear");
        await sleep(speedOfAnimation);
        // appear[i].classList.remove("hide");
    }
}

function checkIfInView(sectionId, sectionName) {
    if($(sectionId).offset().top - $(window).scrollTop() < 400) {
        appearElements(document.getElementById(sectionName), 500);
    }
}

