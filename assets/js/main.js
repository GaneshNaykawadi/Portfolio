/*
// Project Name: Ganesh Naykawadi's Portfolio Website.
// Date Created: 09 Dec, 2020.
// Author: Ganesh B. Naykawadi.
*/


/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title', {});
sr.reveal('.button', {
    delay: 200
});
sr.reveal('.home__img', {
    delay: 400
});
sr.reveal('.home__social-icon', {
    interval: 200
});

/*SCROLL ABOUT*/
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', {
    delay: 400
});
sr.reveal('.about__text', {
    delay: 400
});

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {});
sr.reveal('.skills__data', {
    interval: 200
});
sr.reveal('.skills__img', {
    delay: 600
});

/*SCROLL WORK*/
sr.reveal('.work__img', {
    interval: 200
});

/*SCROLL CONTACT*/
sr.reveal('.contact__input', {
    interval: 200
});


//cursor text effect
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Ganesh Naykawadi.", "Web Designer!", "Software Developer!", "Freelancer!", "Lifelong Learner!"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// function to send mail through js.
function sendEmail() {

    let from = document.getElementById("txtfrom");
    let subject = document.getElementById("txtSubject");
    let message = document.getElementById("txaMessage");

    if (from != null && subject != null && message != null) {
        debugger;
        Email.send({
            Host: "smtp.gmail.com",
            Username: "portfolio.ganesh@gmail.com",
            Password: "yjjujmbbmxhgwrqu",
            To: 'ganeshnaykawadi@gmail.com',
            From: from.value,
            Subject: subject.value,
            Body: message.value
        }).then(function (response) {
            console.log(response);
            if (response == "OK")
                alert("email sent successfully!");
            else
                alert("something went wrong!");
        });
    }

    //clear the form fields
    from.value = "", subject.value = "", message.value = "";
}
