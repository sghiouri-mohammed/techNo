window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navbar");
    let a = document.getElementById("techTonik_right");
    let b = document.getElementById("brand_title");
    let git = document.getElementById("github");
    let face = document.getElementById("face");
    let instagram = document.getElementById("instagram");

    if (window.pageYOffset > 0) {
        a.classList.add("black");
        b.classList.add("black");
        git.classList.add("black");
        face.classList.add("black");
        instagram.classList.add("black");
        // c.classList.add("black");
        navbar.classList.add("navbar-white");
        navbar.classList.remove("navbar-transparent");
    } else {
        git.classList.remove("black");
        face.classList.remove("black");
        instagram.classList.remove("black");
        a.classList.remove("black");
        b.classList.remove("black");
        navbar.classList.add("navbar-transparent");
        navbar.classList.remove("navbar-white");
    }
  });