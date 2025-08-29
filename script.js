const aboutText =
  "I am a web designer, content writer, and IT solutions provider with expertise in system security, AI integration, and business networking. I’m passionate about music and technological trends because I graduated in the same field. I enjoy collaborating with others and always seek ways to expand my knowledge and connect with people who share similar goals. Just a passionate hobbyist,music lover, tech enthusiast, always learning new things and connecting with others who share my passions.I’m a friendly and approachable person who loves meeting new people. I tend to be the one who listens and offers support but also enjoy having deep, meaningful conversations.";
let i = 0;
function typeEffect() {
  if (i < aboutText.length) {
    document.getElementById("typed-about").innerHTML =
      aboutText.substring(0, i + 1) + "<span id='cursor'>|</span>";
    i++;
    setTimeout(typeEffect, 50);
  } else {
    document.getElementById("cursor").style.display = "none";
  }
}
window.onload = typeEffect;

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.getElementById("modal-body");
  const closeModal = document.querySelector(".close-modal");

  document.querySelectorAll(".read-more").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      modalTitle.innerText = this.getAttribute("data-title");
      modalBody.innerHTML = this.getAttribute("data-content");
      modal.style.display = "flex";
    });
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

//projects
// Theme toggle functionality
const themeToggle = document.getElementById("themeToggle");
const body = document.body;
const icon = themeToggle.querySelector("i");

// Check for saved theme preference or use preferred color scheme
const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  body.classList.add("dark-theme");
  icon.classList.replace("fa-moon", "fa-sun");
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-theme");
  const isDark = body.classList.contains("dark-theme");

  if (isDark) {
    icon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    icon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light");
  }
});

// Get the modal for the "Read More" section
var infoModal = document.getElementById("infoModal");

// Get the button that opens the modal
var readMoreBtn = document.getElementById("readMoreBtn");

// Get the <span> element that closes the modal
var infoSpan = infoModal.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
readMoreBtn.onclick = function () {
  infoModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
infoSpan.onclick = function () {
  infoModal.style.display = "none";
};

var infoModal2 = document.getElementById("infoModal2");
var readMoreBtn2 = document.getElementById("readMoreBtn2");
var infoSpan2 = infoModal2.getElementsByClassName("close")[0];

readMoreBtn2.onclick = function () {
  infoModal2.style.display = "block";
};
infoSpan2.onclick = function () {
  infoModal2.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == infoModal) {
    infoModal.style.display = "none";
  }
  if (event.target == infoModal2) {
    infoModal2.style.display = "none";
  }
  if (event.target == privacyModal) {
    privacyModal.style.display = "none";
  }
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};

// Get the privacy modal
var privacyModal = document.getElementById("privacyModal");

// Get the link that opens the modal
var privacyLink = document.getElementById("privacyLink");

// Get the <span> element that closes the modal
var privacySpan = privacyModal.getElementsByClassName("close")[0];

// When the user clicks the link, open the modal
if (privacyLink) {
  privacyLink.onclick = function () {
    privacyModal.style.display = "block";
  };
}

// When the user clicks on <span> (x), close the modal
privacySpan.onclick = function () {
  privacyModal.style.display = "none";
};

// Add this to your existing JavaScript
document.querySelectorAll(".close").forEach((closeBtn) => {
  closeBtn.addEventListener("click", function () {
    this.closest(".modal").style.display = "none";
  });
});

const scrollButton = document.querySelector(".scroll-to-top");

// Show button when page is scrolled down
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollButton.classList.add("show");
  } else {
    scrollButton.classList.remove("show");
  }
});

// Scroll to top when clicked
scrollButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
