function showTab(tabId) {
  let tabs = document.querySelectorAll(".tab-content");
  tabs.forEach(tab => {
    tab.classList.remove("active");  // hide all
  });
  document.getElementById(tabId).classList.add("active"); // show selected
}

document.addEventListener("DOMContentLoaded", () => {
  // your showTab function here
});

function dropBananas(count = 20) {
  for (let i = 0; i < count; i++) {
    const banana = document.createElement("div");
    banana.classList.add("banana");
    banana.textContent = "🍌";

    // random horizontal position
    banana.style.left = Math.random() * 100 + "vw";

    // random animation duration
    banana.style.animationDuration = (2 + Math.random() * 3) + "s";

    document.body.appendChild(banana);

    // remove after animation
    setTimeout(() => {
      banana.remove();
    }, 5000);
  }
}

window.addEventListener("load", () => {
  dropBananas(25);
});

document.getElementById("homeBtn").addEventListener("click", () => {
  dropBananas(25);
});
