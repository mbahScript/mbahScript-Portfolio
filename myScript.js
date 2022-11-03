var x = window.matchMedia("(min-width:700px)");
myPixelcheck(x); //call listener func at run time.
x.addListener(myPixelcheck); // attach listener func on state change

function myPixelcheck(){
    if (x.matches){ //if media query matches, do this
        document.getElementById('menu_icon').style.display = "none"; 
    } else { //else do that
        document.getElementById('menu_icon').style.display = "block";
    }
}

function openSidenav(){
    document.getElementById('menu_icon').style.visibility = "hidden";
    document.getElementById('mySidenav').style.width = "250px";
}

function closeSidenav(){
    document.getElementById('close_icon').src = "img/cancel.svg";
    document.getElementById('mySidenav').style.width = "0px";
    document.getElementById('menu_icon').style.visibility = "visible";
}