
//purpose: show the menu at startup.
const showMenu = (e, t) => {
    try {
        const n = document.getElementById(e),
            a = document.getElementById(t);
        n && a && n.addEventListener("click", () => {
            a.classList.toggle("show");
        })
    } catch (e) {
        console.log(e);
    }
};
showMenu("nav-toggle", "nav-menu");
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    try {
        navLink.forEach(e => e.classList.remove("active")), this.classList.add("active"),
        document.getElementById("nav-menu").classList.remove("show");
    } catch (e) {
        console.log(e);
    }
}
navLink.forEach(e => e.addEventListener("click", linkAction));
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 1200,
    reset: !0
});
sr.reveal(".home__title", {}), sr.reveal(".button", {
    delay: 200
}), sr.reveal(".home__img", {
    delay: 400
}), sr.reveal(".home__social-icon", {
    interval: 200
}), sr.reveal(".about__img", {}), sr.reveal(".about__subtitle", {
    delay: 400
}), sr.reveal(".about__text", {
    delay: 400
}), sr.reveal(".skills__subtitle", {}), sr.reveal(".skills__text", {}), sr.reveal(".skills__data", {
    interval: 200
}), sr.reveal(".skills__img", {
    interval: 600
}), sr.reveal(".card", {
    interval: 300
}), sr.reveal(".contact__input", {
    interval: 200
});

//purpose: active menu change animation.
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset > sectionTop - 350 ) {
      current = section.getAttribute("id"); }
  });

  navLinks.forEach((a) => {
    a.classList.remove("active");

    if ((a.href).match(current))
      a.classList.add("active");
  });
};

//purpose: Typewriter text animation in the home section.
const typedTextSpan = document.querySelector(".typed-text"),
    cursorSpan = document.querySelector(".cursor"),
    textArray = ["Ganesh Naykawadi.", "Web Designer!", "Software Developer!", "Freelancer!", "Lifelong Learner!"],
    typingDelay = 200,
    erasingDelay = 100,
    newTextDelay = 2e3;
let textArrayIndex = 0,
    charIndex = 0;

function type() {
    try {
        charIndex < textArray[textArrayIndex].length ? (cursorSpan.classList.contains("typing") ||
        cursorSpan.classList.add("typing"), typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex),
        charIndex++, setTimeout(type, typingDelay)) : (cursorSpan.classList.remove("typing"),
        setTimeout(erase, newTextDelay))
    } catch (e) {
        console.log(e);
    }
}

//purpose: Typewriter text erase animation.
function erase() {
    try {
        charIndex > 0 ? (cursorSpan.classList.contains("typing") || cursorSpan.classList.add("typing"),
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1),
        charIndex--, setTimeout(erase, erasingDelay)) : (cursorSpan.classList.remove("typing"),
        ++textArrayIndex >= textArray.length && (textArrayIndex = 0), setTimeout(type, typingDelay + 1100))
    } catch (e) {
        console.log(e);
    }
}
document.addEventListener("DOMContentLoaded", function() {
    textArray.length && setTimeout(type, newTextDelay + 250);
});

//purpose: sending email functionality using SmtpJS.
function sendEmail() {
  debugger;
  let mailContent = {
    emailId: document.getElementById("txtFrom"),
    subject: document.getElementById("txtSubject"),
    message: document.getElementById("txaMessage"),
  };
    isValidInput(mailContent) ? Email.send({
      Host: "smtp.gmail.com",
      Username: "portfolio.ganesh@gmail.com",
      Password: "yjjujmbbmxhgwrqu",
      To: "ganeshnaykawadi@gmail.com",
      From: mailContent.emailId.value,
      Subject: mailContent.subject.value,
      Body: mailContent.message.value,
    }).then(function(msg) {
        "OK"== msg ? $.notify("Thanks for contacting me. I will get back to you shortly!",
         { position: "top right", className: "success" }) :
        $.notify(msg, { position: "top right", className: "error" });
        mailContent.emailId.value = "", mailContent.subject.value = "", mailContent.message.value = "";
      }) : $.notify("Please fill all the details properly!", { position: "top right", className: "error" });
}

function isValidInput(mailContent) {
  if(mailContent.emailId.value !="" && mailContent.subject.value !="" && mailContent.message.value !="") {
    return true;
  }
  else
    return false;
}

//purpose: get current year & display it in footer section.
function getCurrentYear() {
  const date = new Date();
  document.getElementById("cprYear").textContent = date.getFullYear();
}
