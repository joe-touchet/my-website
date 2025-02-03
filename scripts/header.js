document.addEventListener("DOMContentLoaded", function () {
    // Load the header dynamically
    fetch("header.html")
        .then((response) => response.text())
        .then((data) => {
            document.body.insertAdjacentHTML("afterbegin", data);

            // Once the header is loaded, highlight the active menu item
            highlightActiveNav();
        })
        .catch((error) => console.error("Error loading header:", error));
});

// Function to highlight the current nav item
function highlightActiveNav() {
    let currentLocation = window.location.pathname.split("/").pop();
    if (currentLocation === "") currentLocation = "index.html"; // Default to index if empty

    let menuLinks = document.querySelectorAll("nav ul li a");

    menuLinks.forEach(link => {
        if (link.getAttribute("href") === currentLocation) {
            link.classList.add("active");
        }
    });
}
