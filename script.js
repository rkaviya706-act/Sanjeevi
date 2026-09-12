/* ================================= */
/* GIFT OPEN */
/* ================================= */

function openGift() {

    const gift = document.querySelector(".gift-area");

    gift.classList.add("opened");


    // Extra hearts

    createHearts(30);


    setTimeout(() => {

        document.getElementById("intro").style.display = "none";

        document.getElementById("mainContent").style.display = "block";

        window.scrollTo(0, 0);

        // Start music

        const music = document.getElementById("music");

        music.play().catch(() => {});

        document.getElementById("musicText").innerText =
            "Pause Song";

    }, 1200);

}



/* ================================= */
/* MUSIC */
/* ================================= */

function toggleMusic() {

    const music =
        document.getElementById("music");

    const text =
        document.getElementById("musicText");


    if (music.paused) {

        music.play();

        text.innerText = "Pause Song";

    } else {

        music.pause();

        text.innerText = "Play Our Song";

    }

}



/* ================================= */
/* SCROLL */
/* ================================= */

function scrollToSection(id) {

    document
        .getElementById(id)
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* ================================= */
/* LOVE LETTER */
/* ================================= */

function openLetter() {

    const letter =
        document.getElementById("letter");


    if (letter.style.display === "block") {

        letter.style.display = "none";

    } else {

        letter.style.display = "block";

        createHearts(40);

    }

}



/* ================================= */
/* FLOATING HEARTS */
/* ================================= */

function createHeart() {

    const heart =
        document.createElement("div");


    heart.className =
        "floating-heart";


    const icons = [

        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "✨",
        "💞"

    ];


    heart.innerText =
        icons[
            Math.floor(
                Math.random() * icons.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.fontSize =
        15 + Math.random() * 25 + "px";


    heart.style.animationDuration =
        5 + Math.random() * 5 + "s";


    document.body.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, 10000);

}


setInterval(createHeart, 900);



/* ================================= */
/* MANY HEARTS */
/* ================================= */

function createHearts(amount) {

    for (let i = 0; i < amount; i++) {

        setTimeout(
            createHeart,
            i * 100
        );

    }

}



/* ================================= */
/* DAYS COUNTER */
/* ================================= */

/*
   CHANGE THIS DATE
   TO YOUR RELATIONSHIP START DATE
*/

const startDate =
    new Date("2025-01-01");


function updateDays() {

    const today =
        new Date();


    const difference =
        today - startDate;


    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    document.getElementById("days")
        .innerText =
        days.toString()
            .padStart(3, "0");

}


updateDays();