fetch("header.html")
.then(res => res.text())
.then(data => {
    document.getElementById("header").innerHTML = data
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navlinks");
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuToggle.textContent = navLinks.classList.contains("active")? "✖" : "☰";
    });
});

fetch("footer.html")
.then(res => res.text())
.then(data => document.getElementById("footer").innerHTML = data);

