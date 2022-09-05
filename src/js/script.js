window.onload = function() {
    if($(window).scrollTop() > 0) 
        document.getElementById("navbar").style.backgroundColor =  "hsla(257, 70%, 9%, 0.671)";
    else 
        document.getElementById("navbar").style.backgroundColor = "transparent";


    mediaQuery("(max-width:870px)");
}

window.onresize = function() {
    mediaQuery("(max-width: 870px)");
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-15vh";
    }
    prevScrollpos = currentScrollPos;

    if($(window).scrollTop() > 0) 
        document.getElementById("navbar").style.backgroundColor =  "hsla(257, 70%, 9%, 0.671)";
    
    else 
        document.getElementById("navbar").style.backgroundColor = "transparent";
    
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



function mediaQuery(width) {
    if(window.matchMedia(width).matches) 
        document.getElementById("contacts").innerHTML = "(305) 558-7798<br>SAYHELLO@3OS.COM";
    else 
        document.getElementById("contacts").innerHTML = "(305) 558-7798 &emsp;|&emsp; SAYHELLO@3OS.COM";
}


