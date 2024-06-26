import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebaseConfig";
import "../style/style.scss";
initializeApp(firebaseConfig);

const btnOpenModal = document.querySelector(".btn");
const btnCloseModal = document.querySelector(".modal__btn-close");
const modal = document.querySelector(".modal");
const form = document.forms.form;

btnOpenModal.addEventListener("click", toggleModal);
btnCloseModal.addEventListener("click", toggleModal);
form.addEventListener("submit", sendForm);

function toggleModal() {
  modal.classList.toggle("none");
}

function sendForm(e) {
  e.preventDefault();
  const data = new FormData(form);
  const infUser = {};
  for (let [key, value] of data) {
    infUser[key] = value;
  }
  form.reset();
  console.log(infUser);
}
