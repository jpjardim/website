function openNav() {
    document.getElementById("myNav").style.height = "100%";
    document.getElementById("burger-menu-icon").style.display = "none";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("burger-menu-icon").style.display = "block";
}

$(document).ready(function() {
    $("body").tooltip({ selector: '[data-toggle=tooltip]' });
});
