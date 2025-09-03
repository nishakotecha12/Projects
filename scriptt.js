// Function to handle the mobile navigation menu toggle
function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    // 'show' class ko toggle karne ke bajay, main 'active' class use karunga
    // kyunki aapke HTML mein 'active' class ka reference tha.
    // Agar aapka CSS 'show' class use karta hai, to aap is line ko badal sakte hain:
    // navLinks.classList.toggle("show");
    navLinks.classList.toggle("active");
}

// Hamburger menu click event listener
const hamburger = document.querySelector('.hamburger');
if (hamburger) {
    hamburger.addEventListener('click', () => {
        toggleMenu();
    });
}

// Close the mobile menu when a link is clicked
const mobileLinks = document.querySelectorAll('.nav-links a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Isse mobile menu band ho jayega jab koi link click ho
        const navLinks = document.getElementById("nav-links");
        navLinks.classList.remove("active");
    });
});


// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
