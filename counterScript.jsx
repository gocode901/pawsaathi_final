// counterScript.js
document.addEventListener("DOMContentLoaded", () => {
  var counterEl = document.getElementById("counter");
  var decrementBtn = document.getElementById("decrement-btn");
  var incrementBtn = document.getElementById("increment-btn");
  let count = 1;

  decrementBtn.addEventListener("click", () => {
    if (count > 1) {
      count--;
      counterEl.textContent = count;
    }
  });

  incrementBtn.addEventListener("click", () => {
    count++;
    counterEl.textContent = count;
  });
});
