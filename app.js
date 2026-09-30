const nav = document.getElementById("navLinks");
document.querySelectorAll("[data-nav-toggle]").forEach((btn) => {
  btn.addEventListener("click", () => nav?.classList.toggle("open"));
});

const form = document.getElementById("quoteForm");
const toast = document.getElementById("toast");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!toast) return;
  toast.style.display = "block";
  setTimeout(() => {
    toast.style.display = "none";
  }, 4200);
  form.reset();
});
