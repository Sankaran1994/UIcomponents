const btnElement = document.querySelector(".btn");
const modalContainer = document.querySelector(".modalContainer");
const btnC = document.querySelector(".btnContainer");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");
const iconx = document.querySelector(".iconx");
console.log(btnElement);

const openModal = function () {
  btnC.classList.add("btninactive");
  modalContainer.classList.add("modalclass");
  overlay.classList.add("bgmodal");
};

const closeModal = function () {
  modalContainer.classList.remove("modalclass");
  overlay.classList.remove("bgmodal");
  btnC.classList.remove("btninactive");
};
btnElement.addEventListener("click", openModal);
overlay.addEventListener("click", closeModal);
iconx.addEventListener("click", closeModal);
