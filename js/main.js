// Function to toggle the navigation menu when the hamburger icon is clicked
function toggleNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Add event listener to the hamburger icon
document.querySelector(".icon").addEventListener("click", toggleNav);


function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
  }

// Get the modal
var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};