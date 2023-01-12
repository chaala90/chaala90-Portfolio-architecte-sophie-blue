import { URL } from "./api.js";
const form = document.getElementById('form');
const email_field = document.getElementById('email_field').value;
const password_field = document.getElementById('password_field').value;
const submit_button = document.getElementById('submit_button');


form.addEventListener("submit", (e) => {
  // Désactivation du comportement par défaut du navigateur
  e.preventDefault();

  const user = {
    email: e.target.queryselector("[email]").value,
    password: e.target.queryselector("[password]").value,
    };
    // Création de la charge utile au format JSON
const chargeUtile = JSON.stringify(user);
// Récupération des pièces éventuellement stockées dans le localStorage
const utilisateur = window.localStorage.getItem("user");
//fonction login
const login_user = async () => {
  const response = await fetch(URL + "/users/login", {
    method: 'POST',
    body: chargeUtile,
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
    .then((res) => res.json());
  return response;
  //login_user();
}

  localStorage.setItem("email", email_field);
  localStorage.setItem("password", password_field);
  })
  if (response.userId == 1) {
    //recupre le token dans le localStorage
    localStorage.setItem("token", response.token);
    //lien ver la page model
    location.href = "../../index.html";}
    else {
      error.innerText = " Erreur dans l’identifiant ou le mot de passe";
    }
export {login_user};

