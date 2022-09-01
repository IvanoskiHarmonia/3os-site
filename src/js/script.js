


// focus on name when arrow clicked:
function focusName() {
    document.getElementById("name").focus();
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    console.log("scrolling");
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-15vh";
    }
    prevScrollpos = currentScrollPos;
}

// change shadow direction:
window.onmousemove = function(event) {
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



