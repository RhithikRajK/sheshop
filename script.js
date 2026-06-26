const cartTrigger = document.getElementById("cartTrigger");
const shopNowTrigger = document.getElementById("shopNowTrigger");
const modal = document.getElementById("comingSoonModal");
const modalClose = document.getElementById("modalClose");
const modalOk = document.getElementById("modalOk");
const year = document.getElementById("year");

const openModal = () => {
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
};

const closeModal = () => {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
};

[cartTrigger, shopNowTrigger].forEach((button) => {
  if (button) {
    button.addEventListener("click", openModal);
  }
});

[modalClose, modalOk].forEach((button) => {
  if (button) {
    button.addEventListener("click", closeModal);
  }
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("active")) {
    closeModal();
  }
});

year.textContent = new Date().getFullYear();
