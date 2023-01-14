import { URL } from "./api.js";
const form = document.getElementById('form');
//au clic sur le bouton
// Récupération des pièces éventuellement stockées dans le localStorage
const utilisateur = window.localStorage.getItem("user");
form.addEventListener("submit", (e) => {
  // Désactivation du comportement par défaut du navigateur
  e.preventDefault();
  const email_value = document.getElementById('email_field').value;
const password_value = document.getElementById('password_field').value;
const submit_button = document.getElementById('submit_button');
})
//fonction login
const login_user = async (e) => {
  const response = await fetch(URL + "/users/login", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(jsonBody)
  })
    .then((res) => res.json());
  return response;
}
const user = {
  email: e.target.queryselector("[email]").value,
  password: e.target.queryselector("[password]").value,
  };
  //ecrire les valeurs dans le local storage
  window.localStorage.setItem("email", email_value);
  window.localStorage.setItem("password", password_value);
  
  if (response.userId == 1) {
    //recupre le token dans le localStorage
    localStorage.setItem("token", response.token);
    //lien ver la page accueil
    location.href = "../../index.html";}
    else {
      error.innerText = " Erreur dans l’identifiant ou le mot de passe";
    }

export {login_user};