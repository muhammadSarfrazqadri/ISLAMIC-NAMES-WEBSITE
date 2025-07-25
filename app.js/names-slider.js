const prevArrow = document.getElementById("prevArrow");
const nextArrow = document.getElementById("nextArrow");
const namesSection = document.getElementById("namesSection");

function scrollByCard(direction = "next") {
  const card = namesSection.querySelector(".name-card");
  if (!card) return;

  const cardWidth = card.offsetWidth + 24;

  namesSection.scrollBy({
    left: direction === "next" ? cardWidth : -cardWidth,
    behavior: "smooth",
  });

  // Optional: Auto-loop back when reaching end
  const scrollLeft = namesSection.scrollLeft;
  const maxScrollLeft = namesSection.scrollWidth - namesSection.clientWidth;

  if (direction === "next" && scrollLeft >= maxScrollLeft - cardWidth) {
    // Scroll back to start
    setTimeout(() => {
      namesSection.scrollTo({ left: 0, behavior: "smooth" });
    }, 600); // wait till scroll ends
  }
}

nextArrow.addEventListener("click", () => scrollByCard("next"));
prevArrow.addEventListener("click", () => scrollByCard("prev"));


setInterval(() => {
  scrollByCard("next");
}, 3000);

























// const namesSection = document.getElementById("namesSection");
// const prevArrow = document.getElementById("prevArrow");
// const nextArrow = document.getElementById("nextArrow");

// // async function loadAllNames() {
// //   try {
// //     const response = await fetch("../json/names.json"); // adjust path if needed
// //     const names = await response.json();

// //     names.forEach((name) => {
// //       const card = document.createElement("div");
// //       card.className = "name-card";
// //       card.innerHTML = `
// //         <h2>${name.name_en}</h2>
// //         <p class="meaning"><i class="fa-solid fa-book-open-reader"></i> ${name.meaning_en}</p>
// //         <a class="details-btn" href="htmls/detail.html?id=${name.id}">More Details</a>
// //       `;
// //       namesSection.appendChild(card);
// //     });
// //   } catch (error) {
// //     console.error(`Failed to fetch names: ${error}`);
// //   }
// // }

// // Auto scroll
// let autoScrollInterval = null;
// function startAutoScroll() {
//   autoScrollInterval = setInterval(() => {
//     namesSection.scrollBy({ left: 300, behavior: "smooth" });
//   }, 3000);
// }

// function stopAutoScroll() {
//   clearInterval(autoScrollInterval);
// }

// prevArrow.addEventListener("click", () => {
//   namesSection.scrollBy({ left: -300, behavior: "smooth" });
//   stopAutoScroll();
//   startAutoScroll();
// });

// nextArrow.addEventListener("click", () => {
//   namesSection.scrollBy({ left: 300, behavior: "smooth" });
//   stopAutoScroll();
//   startAutoScroll();
// });

// namesSection.addEventListener("wheel", () => {
//   stopAutoScroll();
//   startAutoScroll();
// });

// document.addEventListener("DOMContentLoaded", () => {
//   // loadAllNames();
//   startAutoScroll();
// });
