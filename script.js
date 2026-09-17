document.getElementById("year").textContent = String(new Date().getFullYear());

const form = document.querySelector(".contact-form");
if (form) {
  form.addEventListener("submit", (event) => {
    const action = (form.getAttribute("action") || "").trim();
    if (action.startsWith("mailto:")) {
      if (!window.confirm("Откроется почтовая программа. Удобнее позвонить по номеру агентства. Продолжить?")) {
        event.preventDefault();
      }
    }
  });
}
