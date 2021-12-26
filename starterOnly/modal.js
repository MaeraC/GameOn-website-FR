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

submitBtn.addEventListener('click' , () => {

})