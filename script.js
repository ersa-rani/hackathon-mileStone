var button = document.getElementById("button");
var portfolio = document.getElementById("portfolio");
button.addEventListener("click", function () {
    if (portfolio.style.display === "none") {
        portfolio.style.display = "block";
    }
    else {
        portfolio.style.display = "none";
    }
});
