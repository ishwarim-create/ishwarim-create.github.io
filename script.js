// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Add a click event to a button with id 'greetButton' if it exists
    const greetButton = document.getElementById("greetButton");
    if (greetButton) {
        greetButton.addEventListener("click", () => {
            alert("Hello, welcome back!");
        });
    }
});
