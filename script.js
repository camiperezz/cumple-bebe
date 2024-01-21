document.addEventListener("DOMContentLoaded", function () {
    const hearts = document.querySelectorAll(".heart");

    window.addEventListener("scroll", function () {
        hearts.forEach(heart => {
            const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            const filledPercentage = Math.max(0, Math.min(scrollPercentage, 100));

            heart.style.clipPath = `polygon(0 100%, 100% 100%, 100% ${100 - filledPercentage}%, 0 ${100 - filledPercentage}%)`;

            if (filledPercentage === 100) {
                heart.classList.add("filled");
            } else {
                heart.classList.remove("filled");
            }
        });
    });
});
