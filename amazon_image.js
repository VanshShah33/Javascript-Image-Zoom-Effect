
const main = document.getElementById("mainimage")
const small = document.querySelectorAll(".image img")
const move = document.querySelector(".move")

small.forEach(function(img)
{
    img.addEventListener("mouseover",function() // or click use
    {
        main.src = img.src
    })
})

main.addEventListener("mouseenter", function () {
    move.style.display = "block";
    move.style.backgroundImage = `url(${main.src})`;
});

main.addEventListener("mouseleave", function () {
    move.style.display = "none";
});

main.addEventListener("mousemove", function (e) {
    let rect = main.getBoundingClientRect();

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    let xPercent = (x / main.width) * 100;
    let yPercent = (y / main.height) * 100;

    move.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
});

main.addEventListener("load", () => {
    move.style.backgroundImage = `url(${main.src})`;
});

