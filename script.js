/* ===============================
   PORTFOLIO JAVASCRIPT
================================ */


/* ===============================
   ELEMENTS
================================ */

const header = document.getElementById("header");

const progressBar =
  document.getElementById("progressBar");

const menuToggle =
  document.getElementById("menuToggle");

const navLinks =
  document.getElementById("navLinks");

const year =
  document.getElementById("year");


/* ===============================
   CURRENT YEAR
================================ */

year.textContent =
  new Date().getFullYear();


/* ===============================
   SCROLL EFFECTS
================================ */

window.addEventListener("scroll", () => {

  /* Header background */

  if (window.scrollY > 20) {

    header.classList.add("scrolled");

  } else {

    header.classList.remove("scrolled");

  }


  /* Scroll progress */

  const scrollTop =
    window.scrollY;

  const pageHeight =
    document.documentElement.scrollHeight -
    window.innerHeight;

  const progress =
    pageHeight > 0
      ? (scrollTop / pageHeight) * 100
      : 0;

  progressBar.style.width =
    `${progress}%`;

});


/* ===============================
   MOBILE MENU
================================ */

menuToggle.addEventListener("click", () => {

  const isOpen =
    navLinks.classList.toggle("open");

  menuToggle.setAttribute(
    "aria-expanded",
    isOpen
  );

});


/* Close menu after clicking link */

document
  .querySelectorAll("#navLinks a")
  .forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });


/* ===============================
   SCROLL REVEAL ANIMATION
================================ */

const observer =
  new IntersectionObserver(

    (entries, obs) => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "visible"
          );

          obs.unobserve(entry.target);

        }

      });

    },

    {
      threshold: 0.12
    }

  );


document
  .querySelectorAll(".reveal")
  .forEach(element => {

    observer.observe(element);

  });


/* ===============================
   SMOOTH SCROLL
================================ */

document
  .querySelectorAll('a[href^="#"]')
  .forEach(link => {

    link.addEventListener(
      "click",
      event => {

        const target =
          document.querySelector(
            link.getAttribute("href")
          );

        if (!target) {
          return;
        }

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  });


/* ===============================
   CONTACT FORM
================================ */

const form =
  document.getElementById("contactForm");

const formNote =
  document.getElementById("formNote");


form.addEventListener(
  "submit",
  event => {

    event.preventDefault();


    const name =
      document.getElementById("name")
        .value
        .trim();

    const email =
      document.getElementById("email")
        .value
        .trim();

    const message =
      document.getElementById("message")
        .value
        .trim();


    if (
      !name ||
      !email ||
      !message
    ) {

      return;

    }


    const subject =
      encodeURIComponent(
        `Portfolio message from ${name}`
      );


    const body =
      encodeURIComponent(

        `Name: ${name}
Email: ${email}

Message:
${message}`

      );


    window.location.href =
      `mailto:yerasimanjunath@gmail.com?subject=${subject}&body=${body}`;


    formNote.textContent =
      "Opening your email app...";

  }
);