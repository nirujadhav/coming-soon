document.addEventListener("DOMContentLoaded", () => {
    // 1. Cinematic Fade & Blur Reveal
    const reveals = document.querySelectorAll(".reveal");
    
    // Wait for initial render, then trigger the sequence
    setTimeout(() => {
        reveals.forEach(element => {
            element.classList.add("is-visible");
        });
    }, 200);

    // 2. Subtle Mouse Parallax Effect
    const parallaxElement = document.getElementById("parallax");
    
    // Only run parallax on non-touch devices for better performance
    if (window.matchMedia("(hover: hover)").matches) {
        document.addEventListener("mousemove", (e) => {
            // Calculate mouse position relative to center of screen
            const x = (e.clientX / window.innerWidth - 0.5) * 1.5; // Modifier controls intensity
            const y = (e.clientY / window.innerHeight - 0.5) * 1.5;
            
            // Apply a very slight inverse translation for depth
            parallaxElement.style.transform = `translate(${x}%, ${y}%)`;
        });
    }
});