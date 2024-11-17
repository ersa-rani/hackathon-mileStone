const button = document.getElementById("button") as HTMLButtonElement;
const portfolio = document.getElementById("portfolio") as HTMLElement;

button.addEventListener("click", () => {
  if (portfolio.style.display === "none") {
    portfolio.style.display = "block";
  } else {
    portfolio.style.display = "none";
  }
});


