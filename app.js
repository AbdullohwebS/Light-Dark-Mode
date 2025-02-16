 const darkModeToggle = document.querySelector(".dark-toggle");
        const body = document.body;

        // To‘g‘ri yo‘llar
        const darkImg = "/Dark.png";
        const lightImg = "/Light.png";

        // Brauzer localStorage tekshirish
        if (localStorage.getItem("theme") === "light") {
            body.classList.add("light-mode");
            darkModeToggle.src = lightImg;
        }

        // Click event
        darkModeToggle.addEventListener("click", () => {
            if (body.classList.contains("light-mode")) {
                body.classList.remove("light-mode");
                darkModeToggle.src = darkImg;
                localStorage.setItem("theme", "dark");
            } else {
                body.classList.add("light-mode");
                darkModeToggle.src = lightImg;
                localStorage.setItem("theme", "light");
            }
        });
