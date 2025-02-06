document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("h1").classList.add("fade-in");
    document.querySelector("p").classList.add("fade-in");

    document.querySelector(".surprise-btn").addEventListener("click", function () {
        document.querySelector(".hidden-message").style.opacity = "1";
    });

    function createHeart() {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");
        document.body.appendChild(heart);

        const size = Math.random() * 20 + 10 + "px";
        heart.style.fontSize = size;
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 2 + 3 + "s";

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 300);
});
