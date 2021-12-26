function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const close = document.querySelector('.close');
const submitBtn = document.getElementById('submit');
const inputFirst = document.getElementById('first');
const firstMissing = document.getElementById('first-missing');
const inputLast = document.getElementById('last');
const lastMissing = document.getElementById('last-missing');
const inputEmail = document.getElementById('email');
const emailMissing = document.getElementById('email-missing');
const inputBirthdate = document.getElementById('birthdate');
const birthdateMissing = document.getElementById('birthdate-missing');
const inputQuantity = document.getElementById('quantity');
const quantityMissing = document.getElementById('quantity-missing');
const inputCheckbox = document.getElementById('checkbox1');
const checkboxMissing = document.getElementById('checkbox-missing');


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

////////////////////////////////////////////////////////////////////////////////////////

close.addEventListener('click' , () => {
  modalbg.style.display = "none";
})
/*J'ai créé un event sur la croix "close" afin qu'au clique la modale se ferme.
Pour qu'elle se ferme, j'ai modifié la propriété CSS display en none, ce qui a 
permit de la faire disparaître. */

submitBtn.addEventListener('click' , firstChars);
function firstChars(e) {
  
  if(inputFirst.value.length < 2 ) {
    e.preventDefault();
    firstMissing.textContent = "Veuillez entrer au minimum deux caractères.";
    firstMissing.style.color = "red";
    firstMissing.style.fontSize = "14px";
  }
}

submitBtn.addEventListener('click' , firstEmpty );
function firstEmpty(e) {

  if(inputFirst.value == ""){
    e.preventDefault();
    firstMissing.textContent = "Veuillez entrer votre prénom.";
    firstMissing.style.color = "red";
    firstMissing.style.fontSize = "14px";
  } 
}

submitBtn.addEventListener('click' , lastChars);
function lastChars(e) {

  if(inputLast.value.length < 2) {
    e.preventDefault();
    lastMissing.textContent = "Veuillez entrer au minimum deux caractères.";
    lastMissing.style.color = "red";
    lastMissing.style.fontSize = "14px";
  }
}

submitBtn.addEventListener('click' , lastEmpty );
function lastEmpty(e) {

  if(inputLast.value == ""){
    e.preventDefault();
    lastMissing.textContent = "Veuillez entrer votre nom.";
    lastMissing.style.color = "red";
    lastMissing.style.fontSize = "14px";
  } 
}

submitBtn.addEventListener('click' , emailEmpty );
function emailEmpty(e) {

  if(inputEmail.value == ""){
    e.preventDefault();
    emailMissing.textContent = "Veuillez entrer votre adresse e-mail.";
    emailMissing.style.color = "red";
    emailMissing.style.fontSize = "14px";
  } 
}

submitBtn.addEventListener('click' , birthdateEmpty );
function birthdateEmpty(e) {

  if(inputBirthdate.value == ""){
    e.preventDefault();
    birthdateMissing.textContent = "Veuillez entrer votre date de naissance.";
    birthdateMissing.style.color = "red";
    birthdateMissing.style.fontSize = "14px";
  } 
}
 
submitBtn.addEventListener('click' , quantityEmpty );
function quantityEmpty(e) {

  if(inputQuantity.value == ""){
    e.preventDefault();
    quantityMissing.textContent = "Veuillez entrer un nombre entre 0 et 99.";
    quantityMissing.style.color = "red";
    quantityMissing.style.fontSize = "14px";
  } 
}

submitBtn.addEventListener('click' , checkboxEmpty );
function checkboxEmpty(e) {

  if(inputCheckbox.checked == false){
    e.preventDefault();
    checkboxMissing.textContent = "Veuillez accepter nos conditions d'utilisation.";
    checkboxMissing.style.color = "red";
    checkboxMissing.style.fontSize = "14px";
  } 
}






