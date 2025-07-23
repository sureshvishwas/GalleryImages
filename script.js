// script.js
let currentPage = 0;
const containers = [
  document.getElementById("container-one"),
  document.getElementById("container-two"),
  document.getElementById("container-three"),
  document.getElementById("container-four")
];
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const searchInput = document.getElementById("myInput");

function showPage(index) {
  containers.forEach((container, i) => {
    container.classList.toggle("hidden", i !== index);
  });

  // Disable buttons when at first or last page
  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === containers.length - 1;
}

prevBtn.addEventListener("click", () => {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < containers.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
});

// Initial setup
showPage(currentPage);

// Search filter
function myFunction() {
  const filter = searchInput.value.toLowerCase();
  containers.forEach((container, i) => {
    const boxes = container.querySelectorAll(".box");
    let hasVisible = false;

    boxes.forEach(box => {
      const text = box.textContent.toLowerCase();
      const match = text.includes(filter);
      box.style.display = match ? "" : "none";
      if (match) hasVisible = true;
    });

    // Show only the first container with visible results
    container.classList.toggle("hidden", !hasVisible);
  });

  // If search is empty, reset to page 0
  if (!filter) {
    currentPage = 0;
    showPage(currentPage);
  } else {
    // Disable buttons when in search mode
    prevBtn.disabled = true;
    nextBtn.disabled = true;
  }
}
