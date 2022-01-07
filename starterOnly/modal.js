"use strict";

/************ CONSTANTS ************/

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const close = document.querySelector('.close');
const submitBtn = document.getElementById('submit');
const form = document.getElementById('form');
const content = document.querySelector('.content');

// Inputs du formulaire
const inputFirst = document.getElementById('first');
const inputLast = document.getElementById('last');
const inputEmail = document.getElementById('email');
const inputBirthdate = document.getElementById('birthdate');
const inputQuantity = document.getElementById('quantity');
const inputCheckbox = document.getElementById('checkbox1');

// Span erreur du formulaire
const firstMissing = document.getElementById('first-missing');
const lastMissing = document.getElementById('last-missing');
const emailMissing = document.getElementById('email-missing');
const birthdateMissing = document.getElementById('birthdate-missing');
const quantityMissing = document.getElementById('quantity-missing');
const checkboxMissing = document.getElementById('checkbox-missing');

// Message de confirmation
const confirmation = document.querySelector('.confirmation');
const confirmationBtn = document.querySelector('.confirmation-btn');
const confirmationClose = document.querySelector('.confirmation-close');

/************ FUNCTIONS ************/

function editNav() {
  var x = document.getElementById("myTopnav");

  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// VALIDATION DU FORMULAIRE
function validate(e) {
  e.preventDefault();

  let isInputFirstValid = false ;
  let isInputLastValid = false ;
  let isInputEmailValid = false ;
  let isInputBirthdateValid = false ;
  let isInputQuantityValid = false ;
  let isInputCheckboxValid = false ;

  // Vérification du champs PRENOM
  if(inputFirst.value.length < 2 ) {
    firstMissing.textContent = "Veuillez entrer au minimum deux caractères.";
    firstMissing.style.color = "red";
    firstMissing.style.fontSize = "12px";
    isInputFirstValid = false ;
  }
  else if(inputFirst.value == "") {
    firstMissing.textContent = "Veuillez entrer votre prénom.";
    firstMissing.style.color = "red";
    firstMissing.style.fontSize = "12px";
    isInputFirstValid = false ;
  }
  else{
    isInputFirstValid = true ;
    firstMissing.textContent = "" ;
  } 

  // Vérification du champs NOM
  if(inputLast.value.length < 2) {
    lastMissing.textContent = "Veuillez entrer au minimum deux caractères.";
    lastMissing.style.color = "red";
    lastMissing.style.fontSize = "12px";
    isInputLastValid = false ;
  }
  else if(inputLast.value == "") {
    lastMissing.textContent = "Veuillez entrer votre nom.";
    lastMissing.style.color = "red";
    lastMissing.style.fontSize = "12px";
    isInputLastValid = false ;
  }
  else {
    isInputLastValid = true ;
    lastMissing.textContent = "";
  }

  // Vérification du champs EMAIL
  if(inputEmail.value == ""){
    emailMissing.textContent = "Veuillez entrer votre adresse e-mail.";
    emailMissing.style.color = "red";
    emailMissing.style.fontSize = "12px";
    isInputEmailValid = false ;
  }  
  else {
    isInputEmailValid = true ;
    emailMissing.textContent = "";
  }

  // Vérification du champs DATE DE NAISSANCE
  if(inputBirthdate.value == ""){
    birthdateMissing.textContent = "Veuillez entrer votre date de naissance.";
    birthdateMissing.style.color = "red";
    birthdateMissing.style.fontSize = "12px";
    isInputBirthdateValid = false ;
  } 
  else {
    isInputBirthdateValid = true ;
    birthdateMissing.textContent = "";
  }

  // Vérification du champs VILLES
  if(inputQuantity.value == ""){
    quantityMissing.textContent = "Veuillez entrer un nombre entre 0 et 99.";
    quantityMissing.style.color = "red";
    quantityMissing.style.fontSize = "12px";
    isInputQuantityValid = false ;
  } 
  else {
    isInputQuantityValid = true ;
    quantityMissing.textContent = "";
  }

  // Vérification du champs CHECKBOX
  if(inputCheckbox.checked == false){
    checkboxMissing.textContent = "Veuillez accepter nos conditions d'utilisation.";
    checkboxMissing.style.color = "red";
    checkboxMissing.style.fontSize = "12px";
    isInputCheckboxValid = false ;
  } 
  else {
    isInputCheckboxValid = true ;
    checkboxMissing.textContent = "";
  }

  // Message de confirmation 
  if (isInputFirstValid &&
      isInputLastValid &&
      isInputEmailValid &&
      isInputBirthdateValid &&
      isInputQuantityValid &&
      isInputCheckboxValid ) {

        content.style.display = "none";
        confirmation.style.display = "block" ;
      }
  
}

/************ MAIN ************/

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// FERMETURE DU FORMUALAIRE

close.addEventListener('click', () => {
  modalbg.style.display = "none";
})



submitBtn.addEventListener('click', validate);


// FERMETURE MESSAGE DE CONFIRMATION

confirmationBtn.addEventListener('click', () => {
  modalbg.style.display = "none";
  confirmation.style.display = "none";
  content.style.display = "block";
  form.reset();
})

confirmationClose.addEventListener('click', () => {
  modalbg.style.display = "none";
  confirmation.style.display = "none";
  content.style.display = "block";
  form.reset();
})





