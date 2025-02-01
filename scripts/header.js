// Load the header dynamically on all pages
fetch("header.html")
    .then(response => response.text())
    .then(data => {
        document.body.insertAdjacentHTML("afterbegin", data);

        // Highlight the active menu item
        let currentPage = window.location.pathname.split("/").pop();
        let navLinks = document.querySelectorAll(".navbar ul li a");

        navLinks.forEach(link => {
            if (link.getAttribute("href") === currentPage) {
                link.classList.add("active");
            }
        });
    })
    .catch(error => console.error("Error loading header:", error));

