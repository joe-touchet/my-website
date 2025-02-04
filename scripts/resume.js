document.addEventListener("DOMContentLoaded", function () {
    let resumeButton = document.getElementById("resume-button");

    if (window.innerWidth < 768) {
        resumeButton.textContent = "Joe Touchet - Resume"; // Change text for small screens
    }

    // Update dynamically if screen is resized
    window.addEventListener("resize", function () {
        if (window.innerWidth < 768) {
            resumeButton.textContent = "Joe Touchet - Resume";
        } else {
            resumeButton.textContent = "Download Resume"; // Reset for larger screens
        }
    });
});

<script>
  document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.querySelector(".btn-download");
    
    if (window.innerWidth <= 768) {
      downloadButton.textContent = "Joe Touchet - Resume";
    }
  });
</script>
