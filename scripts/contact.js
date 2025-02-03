document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.getElementById("contact-button");
    const contactLanding = document.getElementById("contact-landing");
    const contactForm = document.getElementById("contact-form");

    if (contactButton && contactLanding && contactForm) {
        contactButton.addEventListener("click", function () {
            // Hide the landing section (message and button)
            contactLanding.style.display = "none";

            // Show the contact form
            contactForm.style.display = "block";
        });
    }
});
