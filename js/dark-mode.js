document.getElementById("dark-mode-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  // Adjust text colors dynamically
  document.querySelectorAll("*").forEach((el) => {
    const style = window.getComputedStyle(el);
    if (style.color === "rgb(0, 0, 0)" || style.color === "black") {
      el.style.color = "#fff"; // Change black text to white
    }
  });
});
