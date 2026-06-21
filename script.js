// =========================
// PORTFOLIO SCRIPT
// Akbarjon Zoirov
// =========================

// Typing Effect

const texts = [
    "Frontend Developer",
    "React Developer",
    "JavaScript Developer",
    "Python Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === texts.length) {
        count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    const title = document.querySelector(".hero-content h2");

    if (title) {
        title.textContent = letter;
    }

    if (letter.length === currentText.length) {

        setTimeout(() => {
            count++;
            index = 0;
            type();
        }, 1500);

    } else {

        setTimeout(type, 100);
    }

})();

// Navbar Shadow

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,.3)";

    } else {

        header.style.boxShadow = "none";
    }
});

// Scroll Reveal

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform =
                "translateY(0px)";
        }
    });

}, {
    threshold: 0.1
});

document
.querySelectorAll("section")
.forEach(section => {

    section.style.opacity = "0";
    section.style.transform =
        "translateY(50px)";
    section.style.transition =
        "all .8s ease";

    observer.observe(section);
});

// Skill Animation

const skills =
document.querySelectorAll(".bar div");

window.addEventListener("load", () => {

    skills.forEach(skill => {

        let width = skill.style.width;

        skill.style.width = "0";

        setTimeout(() => {

            skill.style.width = width;

            skill.style.transition =
                "2s ease";

        }, 500);
    });
});

// Back To Top Button

const topBtn =
document.createElement("button");

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.cursor = "pointer";
topBtn.style.fontSize = "20px";
topBtn.style.display = "none";
topBtn.style.zIndex = "999";
topBtn.style.background = "#38bdf8";
topBtn.style.color = "#000";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Contact Form

const form =
document.querySelector("form");

if (form) {

    form.addEventListener("submit", e => {

        e.preventDefault();

        alert(
            "Xabaringiz muvaffaqiyatli yuborildi!"
        );

        form.reset();
    });
}

// Active Menu

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        if (
            pageYOffset >=
            sectionTop - 200
        ) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");
        }
    });
});

// Welcome Message

window.addEventListener("load", () => {

    console.log(
        "Akbarjon Zoirov Portfolio Loaded Successfully!"
    );
});

// Digital Clock

const clock =
document.createElement("div");

clock.style.position = "fixed";
clock.style.top = "90px";
clock.style.right = "20px";
clock.style.padding = "10px";
clock.style.background = "#1e293b";
clock.style.borderRadius = "10px";
clock.style.color = "#fff";

document.body.appendChild(clock);

setInterval(() => {

    const now = new Date();

    clock.innerHTML =
        now.toLocaleTimeString();

}, 1000);

// Project Hover Effect

document
.querySelectorAll(".project-card")
.forEach(card => {

    card.addEventListener(
        "mouseenter",
        () => {

            card.style.transform =
                "scale(1.05)";
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "scale(1)";
        }
    );
});
