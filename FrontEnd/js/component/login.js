import { URL } from "./api.js";
const error = document.getElementById("error");
//recupere le formulaire, email et psw
const formulaire = document.forms["form"];
const mail = formulaire.email;
const passw = formulaire.password;
let email;
let password;
//e.target.value: recupere ce que j'ai tapé dans le champs et le mettre dans la variable
mail.addEventListener("input", (e) =>
(email=e.target.value));
passw.addEventListener("input", (e) =>
(password=e.target.value));
formulaire.addEventListener("submit", (e)=>{
    e.preventDefault();
    //reportvalidity: methode qui retourne true or false indiquant si input valide ou pas 
    if (mail.reportValidity() && passw.reportValidity())
    {
        //appeler fonction login ci-dessous(envoyer le formulaire)
        login(email, password);
    } 
})
//definir login
async function login(m, p){
    const user = {
        email: m,
        password: p
      }
    const head = new Headers({ "content-type": 'application/json' });
    const send = {
      method: 'POST',
      headers: head,
      body: JSON.stringify({email, password}),
    };
    const reponse = await fetch(URL + "/users/login", send)
    .then((res) => {
      if (res.status === 401 || res.status === 404){
        //displayErrorMessage("Erreur dans l'identifiant ou le mot de passe!");
        error.innerText = " Erreur dans l’identifiant ou le mot de passe !";
        return null;
      }
      else {
        return res.json();
      }
    });
    //chaînage optionnel ?. si reponse existe, on e 
    if (reponse?.token) {
       // localStorage.setItem("user", JSON.stringify(user));
       //Enregistrer/cree des données dans sessionStorage: (clé, valeur)
       sessionStorage.setItem("userToken", reponse.token);
       //methode qui remplace la ressource actuelle par celle de l'URL fournie
       window.location.replace("/FrontEnd/index.html");
      }
}
