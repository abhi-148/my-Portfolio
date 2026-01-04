let currentPage = 0;
const pages = document.querySelectorAll(".page");

function showPage(index) {
  pages.forEach((p, i) => {
    p.classList.toggle("active", i === index);
  });
}

showPage(currentPage);

/* ===== MOUSE WHEEL ===== */
window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0 && currentPage < pages.length - 1) {
    currentPage++;
  } else if (e.deltaY < 0 && currentPage > 0) {
    currentPage--;
  }
  showPage(currentPage);
});

/* ===== KEYBOARD ===== */
window.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight" && currentPage < pages.length - 1) {
    currentPage++;
  }
  if (e.key === "ArrowLeft" && currentPage > 0) {
    currentPage--;
  }
  showPage(currentPage);
});
