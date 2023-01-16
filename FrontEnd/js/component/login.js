import { URL } from "./api.js";

const form = document.getElementById('form')
const submit_button = document.getElementById('submit_button');
const login = () =>{
submit_button.addEventListener("click", (e)=>{
  e.preventDefault();
  const user = {
    email: document.querySelector("#email_field").value,
    password: document.querySelector("#password_field").value
  }
   //ecrire les valeurs dans le local storage
  localStorage.setItem("user", JSON.stringify(user));
  const get_user = localStorage.getItem("user");
  console.log(user);

//  envoyer user au serveur
//fonction login
const login_func = async (e) => {
  const response = await fetch(URL + "/users/login", {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
  })
    .then((res) => res.json());
  return response;
}
if (response.userId == 1) {
  //recupre le token dans le localStorage
  localStorage.setItem("token", response.token);
  //lien ver la page accueil
  location.href = "../../index.html";}
  else {
    error.innerText = " Erreur dans l’identifiant ou le mot de passe";
  }
  
});
}
export{login_func, login};


/*const form = document.getElementById('form');
//au clic sur le bouton
// Récupération des pièces éventuellement stockées dans le localStorage
const utilisateur = window.localStorage.getItem("user");
const login = () =>{
form.addEventListener("submit", (e) => {
  // Désactivation du comportement par défaut du navigateur
  e.preventDefault();
const email_value = document.getElementById('email_field').value;
const password_value = document.getElementById('password_field').value;
const submit_button = document.getElementById('submit_button');
const user = new FormData(form);
  
})}
//

const email_value = document.getElementById('email_field').value;
const password_value = document.getElementById('password_field').value;
  //ecrire les valeurs dans le local storage
  window.localStorage.setItem("email", email_value);
  window.localStorage.setItem("password", password_value);
  

export {login_user, login};*/