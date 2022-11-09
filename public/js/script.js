// Navbar & To Top Button
window.onscroll = () => {
  const navbar = document.querySelector("#navbar");
  const toTop = document.querySelector("#to-top");
  const fixedTop = navbar.offsetTop;

  if (window.scrollY > fixedTop) {
    toTop.classList.remove("hidden");
  } else {
    toTop.classList.add("hidden");
  }
};

// Nav Menu Toggle on Mobile
const navMenu = document.querySelector("#nav-menu");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
  hamburger.classList.toggle("hamburger-active");
});

// Click Outside Nav Menu to Exit
window.addEventListener("click", (e) => {
  if (e.target !== hamburger && e.target !== navMenu) {
    navMenu.classList.add("hidden");
    hamburger.classList.remove("hamburger-active");
  }
});

// Dark Mode Toggle
const moonToggle = document.querySelector("#moon-toggle");
const sunToggle = document.querySelector("#sun-toggle");

// Theme Vars
const userTheme = localStorage.getItem("theme");

// Icon Toggling
const iconToggle = () => {
  sunToggle.classList.toggle("hidden");
  moonToggle.classList.toggle("hidden");
};

// Initial Theme Check
const themeCheck = () => {
  if (userTheme === "dark") {
    document.documentElement.classList.add("dark");
    moonToggle.classList.add("hidden");
    return;
  }
  sunToggle.classList.add("hidden");
};

// Manual Theme Switch
const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
};

// Call Theme Swicth on Clicking Buttons
sunToggle.addEventListener("click", () => {
  themeSwitch();
});

moonToggle.addEventListener("click", () => {
  themeSwitch();
});

// Invoke Theme Check on Initial Load
themeCheck();

// Education Data & Work Data
const educationIcon = document.querySelector("#education-icon");
const educationData = document.querySelector("#education-data");
const workIcon = document.querySelector("#work-icon");
const workData = document.querySelector("#work-data");

educationIcon.addEventListener("click", () => {
  educationData.classList.remove("hidden");
  workData.classList.add("hidden");
});

workIcon.addEventListener("click", () => {
  educationData.classList.add("hidden");
  workData.classList.add("flex");
  workData.classList.remove("hidden");
});

let slideIndex = 1;

const showContentSlider = (index, content, button) => {
  let sliderContent = document.getElementsByClassName(content);
  let btnSlider = document.getElementsByClassName(button);

  if (index > sliderContent.length) {
    slideIndex = 1;
  }

  if (index > sliderContent.length) {
    slideIndex = 1;
  }

  if (index < 1) {
    slideIndex = sliderContent.length;
  }

  for (let i = 0; i < sliderContent.length; i++) {
    sliderContent[i].classList.add("hidden");
  }

  for (let i = 0; i < btnSlider.length; i++) {
    btnSlider[i].classList.remove("button-slider-active");
  }

  sliderContent[slideIndex - 1].classList.remove("hidden");
  btnSlider[slideIndex - 1].classList.add("button-slider-active");
};

// ACHIEVEMENT
// Carousel Image Achievement
const arrowLeftAchievement = document.querySelector("#arrow-left-achievement");
const arrowRightAchievement = document.querySelector(
  "#arrow-right-achievement"
);
showContentSlider(slideIndex, "achievement-slider", "achievement-btn-slider");

// arrowLeftAchievement
arrowLeftAchievement.addEventListener("click", () => {
  showContentSlider(
    (slideIndex -= 1),
    "achievement-slider",
    "achievement-btn-slider"
  );
});

// arrowRightAchievement
arrowRightAchievement.addEventListener("click", () => {
  showContentSlider(
    (slideIndex += 1),
    "achievement-slider",
    "achievement-btn-slider"
  );
});

// Achievement Button Slider
const achievementBtnSlider1 = document.querySelector(
  "#achievement-btn-slider-1"
);
const achievementBtnSlider2 = document.querySelector(
  "#achievement-btn-slider-2"
);
const achievementBtnSlider3 = document.querySelector(
  "#achievement-btn-slider-3"
);

achievementBtnSlider1.addEventListener("click", () => {
  showContentSlider(
    (slideIndex = 1),
    "achievement-slider",
    "achievement-btn-slider"
  );
});

achievementBtnSlider2.addEventListener("click", () => {
  showContentSlider(
    (slideIndex = 2),
    "achievement-slider",
    "achievement-btn-slider"
  );
});

achievementBtnSlider3.addEventListener("click", () => {
  showContentSlider(
    (slideIndex = 3),
    "achievement-slider",
    "achievement-btn-slider"
  );
});

// PORTFOLIO
// Carousel Image Portfolio
const arrowLeftPortfolio = document.querySelector("#arrow-left-portfolio");
const arrowRightPortfolio = document.querySelector("#arrow-right-portfolio");
showContentSlider(slideIndex, "portfolio-slider", "portfolio-btn-slider");

// arrowLeftPortfolio
arrowLeftPortfolio.addEventListener("click", () => {
  showContentSlider(
    (slideIndex -= 1),
    "portfolio-slider",
    "portfolio-btn-slider"
  );
});

// arrowRightPortfolio
arrowRightPortfolio.addEventListener("click", () => {
  showContentSlider(
    (slideIndex += 1),
    "portfolio-slider",
    "portfolio-btn-slider"
  );
});

// Portfolio Button Slider
const portfolioBtnSlider1 = document.querySelector("#portfolio-btn-slider-1");
const portfolioBtnSlider2 = document.querySelector("#portfolio-btn-slider-2");

portfolioBtnSlider1.addEventListener("click", () => {
  showContentSlider(
    (slideIndex = 1),
    "portfolio-slider",
    "portfolio-btn-slider"
  );
});

portfolioBtnSlider2.addEventListener("click", () => {
  showContentSlider(
    (slideIndex = 2),
    "portfolio-slider",
    "portfolio-btn-slider"
  );
});