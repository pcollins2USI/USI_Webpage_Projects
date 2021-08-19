function navChange() {
    var navcolor = document.getElementById("navcolor").value;
    if (navcolor == "red") {
        document.getElementById("navbar-nav").style.backgroundColor = "red";
    } else if (navcolor == "blue") {
        document.getElementById("navbar-nav").style.backgroundColor = "blue";
    } else if (navcolor == "green") {
        document.getElementById("navbar-nav").style.backgroundColor = "green";
    }
}

function navCustom() {
    var navcolor = document.getElementById("hcolor").value;
    document.getElementById("navbar-nav").style.backgroundColor = navcolor;
}