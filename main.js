

// const navMenu = document.getElementById('nav-menu')
// const navToggle = document.getElementById('nav__toggle')
//  const navClose = document.getElementById('nav-close')

// // Menu show
// if(navToggle){
//     navToggle.addEventListener('click', () =>{
//         navMenu.classList.add('show-menu')
//     })
// }

// // Menu hidden

// if(navClose) {
//     navClose.addEventListener('click', () =>{
//         navMenu.classList.remove('show-menu')
//     })
// }

// // Remove menu mobile
// const navLink = document.querySelectorAll('.nav__link')

// const linkAction = () => {
//     const navMenu = document.getElementById('nav-menu')
//     //when you click on each nav__link, we remove the show-menu
//  navMenu.classList.remove('show-menu')
// }

// navLink.forEach(n => n.addEventListener('click', linkAction))

// // change background header
// const scrollHeader = () => {
//     const header = document.getElementById('header')
//     //add a class if the bottom ofset is greater

//     this.scrollY >= 50 ? header.classList.add('bg-header')
//                        : header.classList.remove ('bg=header')
// }

// window.addEventListener('scroll', bgHeader)
// bgHeader()


// Get elements
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav__toggle');
const navClose = document.getElementById('nav-close');

// Menu show
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Menu hidden
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Remove menu mobile & smooth scroll to sections when clicking nav links
const navLinks = document.querySelectorAll('.nav__link');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Only prevent default if the link is to an anchor on the same page
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            
            // Get the target section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            // Close the mobile menu
            navMenu.classList.remove('show-menu');
            
            // Smooth scroll to section
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Change background header on scroll
const scrollHeader = () => {
    const header = document.getElementById('header');
    // Add a class if scroll position is greater than 50px
    window.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header');
};

window.addEventListener('scroll', scrollHeader);
// Initial call to set header state on page load
scrollHeader();