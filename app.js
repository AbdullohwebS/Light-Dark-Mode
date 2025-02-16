document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.querySelector(".dark img");
  const body = document.body;

  if (!darkModeToggle) return; // Agar tugma mavjud bo'lmasa, kodni bajarish shart emas

  const darkImg = "images/Dark.png";
  const lightImg = "images/Light.png";

  // Mahalliy xotirada saqlangan rejimni o'qish
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    darkModeToggle.src = lightImg;
  }

  // Tugma bosilganda rejimni almashtirish
  darkModeToggle.addEventListener("click", () => {
    const isLightMode = body.classList.toggle("light-mode");
    darkModeToggle.src = isLightMode ? lightImg : darkImg;
    localStorage.setItem("theme", isLightMode ? "light" : "dark");
  });
});
