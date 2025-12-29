// Example: Show an alert when page loads
 window.onload = function() {
  console.log("Welcome to my portfolio!");
 };
 Example: Smooth scroll for navigation
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener("click", function(e) {
     e.preventDefault();
     document.querySelector(this.getAttribute("href")).scrollIntoView({
       behavior: "smooth"
    });
   });
});
