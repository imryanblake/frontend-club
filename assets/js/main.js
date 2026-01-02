// tooltips
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
tooltipTriggerList.forEach((el) => {
  new bootstrap.Tooltip(el);
});

// Ventana modal
const studentModal = document.getElementById("studentModal");

studentModal.addEventListener("show.bs.modal", function (event) {
  const box = event.relatedTarget;

  document.getElementById("modalName").textContent =
    box.getAttribute("data-name");

  document.getElementById("modalRole").textContent =
    box.getAttribute("data-role");

  document.getElementById("modalAvatar").src = box.getAttribute("data-avatar");

  document.getElementById("modalGithub").href = box.getAttribute("data-github");

  document.getElementById("modalLinkedin").href =
    box.getAttribute("data-linkedin");

  document.getElementById("modalCodepen").href =
    box.getAttribute("data-codepen");
});
