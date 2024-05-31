// export * from "load.js";
// export * from "observer.js";
// export * from "hamburger.js";
// export * from "book.js";
const nuuFocus = document.querySelectorAll(".nuu");
const nuuUnder = (entries) => {
  entries.forEach((entry) => {
    const keyframe = {
      opacity: [0, 1],
      translate: ["0 150px", 0],
    };
    if (entry.isIntersecting) {
      entry.target.animate(keyframe, 1000);
      nuuObserver.unobserve(entry.target);
    }
  });
};
const nuuObserver = new IntersectionObserver(nuuUnder);
nuuFocus.forEach((nuuFocu) => {
  nuuObserver.observe(nuuFocu);
});

const load = document.querySelector(".c_load");
const green = document.querySelector(".c_load__green");
const loadText = document.querySelector(".c_load__text");
window.addEventListener("load", () => {
  load.animate(
    {
      visibility: "hidden",
      opacity: [1, 0],
    },
    {
      delay: 1200,
      duration: 1000,
      fill: "forwards",
    }
  );
  green.animate(
    {
      top: ["100vh", "-100vh"],
    },
    {
      delay: 800,
      duration: 2000,
      easing: "ease",
      fill: "forwards",
    }
  );
  loadText.animate(
    {
      opacity: [1, 0],
    },
    {
      duration: 1300,
      fill: "forwards",
    }
  );
});

const hamburger = document.getElementById("hamburger");
const navButton = document.getElementById("navButton");
const headerNav = document.getElementById("headerNav");
hamburger.addEventListener(
  "click",
  () => {
    const expanded = hamburger.getAttribute("aria-expanded");
    if (expanded === "true") {
      hamburger.setAttribute("aria-expanded", "false");
      navButton.setAttribute("aria-expanded", "true");
      headerNav.setAttribute("aria-hidden", "true");
    }
  },
  false
);
navButton.addEventListener(
  "click",
  () => {
    const navButtonExpanded = navButton.getAttribute("aria-expanded");
    if (navButtonExpanded === "true") {
      hamburger.setAttribute("aria-expanded", "true");
      navButton.setAttribute("aria-expanded", "false");
      headerNav.setAttribute("aria-hidden", "false");
    }
  },
  false
);
const goods = [
  "img1.png",
  "img2.jpg",
  "img3.png",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.png",
  "img8.png",
  "img9.jpg",
];
for (let i = 0; i < goods.length; i++) {
  const good = `<img
                src="img/${goods[i]}"
                alt="商品画像"
                class="c_lookBook__photo"
              />`;
  const book = document.querySelector(".c_lookBook__goods");
  book.insertAdjacentHTML("beforeend", good);
}
const focusImage = document.querySelector(".c_lookBook__focus img");
const thumbImages = document.querySelectorAll(".c_lookBook__photo");
const fuwa = {
  opacity: [0, 1],
};
thumbImages.forEach((thumbImage) => {
  thumbImage.addEventListener("mouseover", (event) => {
    focusImage.src = event.target.src;
    focusImage.animate(fuwa, 500);
  });
});
