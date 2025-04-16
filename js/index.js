document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".stat-number");
  counters.forEach((counter) => {
    counter.innerText = "0";
    const update = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / 100;
      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(update, 20);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector('form[action*="formspree.io"]');
  const successMessage = document.getElementById("formSuccess");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          successMessage.classList.remove("d-none");
          form.reset();
        } else {
          alert("Oops! Something went wrong. Please try again.");
        }
      })
      .catch((error) => {
        alert("Failed to send. Please check your internet connection.");
      });
  });
});

window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  const navLinks = document.querySelectorAll(".nav-link");
  const navbarCollapse = document.getElementById("navbarNav");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.getComputedStyle(toggler).display !== "none") {
        new bootstrap.Collapse(navbarCollapse).hide();
      }
    });
  });
});
