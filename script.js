const header = document.querySelector(".navbar")

// change navbar to dark background after a certain point
window.onscroll = function() {
    var top = window.scrollY;
    if(top >=300) {
        // change background to white and change text to dark 
        header.classList.add('navbarWhite');
        header.classList.remove('navbar-dark');
    }
    else {
        header.classList.add('navbar-dark');
        header.classList.remove('navbarWhite');
    }
}

