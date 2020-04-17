function responsNav() {
    var x = document.getElementById("navMenu");
    if (x.className === "navbar-menu") {
      x.className += " responsive";
    } else {
      x.className = "navbar-menu";
    }
  }