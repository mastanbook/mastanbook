// Smooth reveal animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll("section, .card, .socials a").forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});

// Scroll to top button
const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:100px;
right:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#D4AF37;
color:#111;
font-size:24px;
font-weight:bold;
cursor:pointer;
display:none;
z-index:999;
box-shadow:0 5px 20px rgba(0,0,0,.3);
`;

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
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

// Header background on scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.style.background = "rgba(0,0,0,.92)";
    } else {
        header.style.background = "rgba(0,0,0,.75)";
    }
});

// Active navigation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// Add animation styles dynamically
const style = document.createElement("style");

style.innerHTML = `
.hidden{
opacity:0;
transform:translateY(40px);
transition:all .8s ease;
}

.show{
opacity:1;
transform:translateY(0);
}

nav ul li a.active{
color:#D4AF37;
font-weight:700;
}
`;

document.head.appendChild(style);

// Footer year
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = footer.innerHTML.replace("2026", new Date().getFullYear());
}

console.log("Mastan Book Website Loaded Successfully");