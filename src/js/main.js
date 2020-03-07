document.addEventListener('DOMContentLoaded', function () {

    // Menu navigate animation
    document.querySelectorAll(".nav-item>.nav-link").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            var id = link.getAttribute("href");
            document.querySelector(id).scrollIntoView({ block: "start", behavior: "smooth" });
        }, false);
    });
});

