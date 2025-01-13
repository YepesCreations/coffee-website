/*=============== LOADER ===============*/

/*========================================= 
                                    Menu Events
========================================= */
/**
 *  Show the mobile menu
 */
// Get elements from the DOM
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");

/**
 * Reusable function to add a click event listener.
 * It ensures the element exists before adding the event listener.
 *
 * @param {HTMLElement} element - The target element to attach the event to.
 * @param {Function} callback - The function to execute when the event is triggered.
 */
function addClickEvent(element, callback) {
    if (element) {
        element.addEventListener("click", callback);
    }
}

// Show the menu when the toggle button is clicked
addClickEvent(navToggle, () => {
    navMenu.classList.add("show-menu"); // Add the 'show-menu' class to display the menu
});

// Hide the menu when the close button is clicked
addClickEvent(navClose, () => {
    navMenu.classList.remove("show-menu"); // Remove the 'show-menu' class to hide the menu
});


/**
 *  Hide the mobile menu
 */
// Select all navigation links with the class 'nav__link'
const navLinks = document.querySelectorAll('.nav__link');

/**
 * Function to hide the mobile menu.
 * It removes the 'show-menu' class from the menu.
 */
const hideMenu = () => {
    // Check if the element exists to avoid errors
    if (navMenu) {
        navMenu.classList.remove('show-menu'); // Remove the 'show-menu' class
    }
};

// Add a click event listener to each navigation link
navLinks.forEach(link => {
    addClickEvent(link, hideMenu ); // Call 'hideMenu' when a link is clicked
});


/*========================================= 
                             Change Background Header
========================================= */
// Function to toggle the 'scroll-header' class on the header element
function scrollHeader() {
    // Get the header element by its ID
    const header = document.getElementById('header');
    
    // Check if the header element exists to avoid errors
    if (header) {
        // If the user has scrolled down 200 pixels or more, add the 'scroll-header' class
        if (window.scrollY >= 50) {
            header.classList.add('scroll-header');
        } 
        // If the user has scrolled less than 200 pixels, remove the 'scroll-header' class
        else {
            header.classList.remove('scroll-header');
        }
    }
}

// Variable to control the throttling state
let isThrottled = false;

// Add an event listener to the window for the 'scroll' event
window.addEventListener('scroll', () => {
    // Check if the function is currently throttled
    if (!isThrottled) {
        // Call the scrollHeader function to toggle the class based on scroll position
        scrollHeader();

        // Set the throttling state to true to prevent immediate re-execution
        isThrottled = true;

        // Reset the throttling state after 100 milliseconds
        setTimeout(() => {
            isThrottled = false;
        }, 100); // You can adjust the delay time as needed
    }
});


/*========================================= 
                             MixItUp Filter Products
========================================= */
var mixer = mixitup('.products__content', {
    selectors: {
        target: '.products__card'
    },
    animation: {
        duration: 300
    }
});

/* Default filter products */
mixer.filter('.delicacies');

/* Link active products */
// Select all elements with the class 'products__item'
const productCategory = document.querySelectorAll(".products__item");

// Function to handle the activation of a product
function activeProduct() {
    // Check if productCategory exists and is not empty
    if (productCategory) {
        // Remove the 'active-product' class from all items
        productCategory.forEach(item => item.classList.remove("active-product"));

        // Add the 'active-product' class to the clicked item
        this.classList.add("active-product");
    }
}

// Add a click event listener to each product item
productCategory.forEach(item => 
    item.addEventListener("click", activeProduct)
);



/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
