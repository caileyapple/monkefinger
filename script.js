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
