(function () {
  var root = document.documentElement;
  var button = document.querySelector("[data-theme-toggle]");
  if (!button) return;

  function current() {
    var set = root.getAttribute("data-theme");
    if (set === "dark" || set === "light") return set;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function paint() {
    var mode = current();
    var next = mode === "dark" ? "light" : "dark";
    button.setAttribute("aria-pressed", mode === "dark" ? "true" : "false");
    button.setAttribute("aria-label", "Switch to " + next + " theme");
    var label = button.querySelector("[data-theme-label]");
    if (label) label.textContent = next === "dark" ? "Dark" : "Light";
  }

  button.addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    paint();
  });

  paint();
})();
