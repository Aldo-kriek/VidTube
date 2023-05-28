/* ---------------- variables [start] ----------------- */

var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

/* ---------------- variables [end] ----------------- */



/* ---------------- hide sidebar [start] ----------------- */

menuIcon.onClick = function() {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container")
}

/* ---------------- hide sidebar [end] ----------------- */

