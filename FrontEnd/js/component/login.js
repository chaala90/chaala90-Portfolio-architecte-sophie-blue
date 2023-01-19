import { URL } from "./api.js";
const error = document.getElementById("error");
const formulaire = document.forms["form"];
const mail = formulaire.email;
const passw = formulaire.password;
let email;
let password;
mail.addEventListener("input", (e) =>(email=e.target.value));
//recupere ce que j'ai tapé dans le champs et le mettre dans la variable
passw.addEventListener("input", (e) =>(password=e.target.value));
formulaire.addEventListener("submit", (e)=>{
    e.preventDefault();
    if (mail.reportValidity() && passw.reportValidity())
    {
        //appeler fonction
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
        error.innerText = " Erreur dans l’identifiant ou le mot de passe";
        //displayErrorMessage("Erreur dans l'identifiant ou le mot de passe");
        return null;
      }
      else {
        return res.json();
      }
    });
    if (reponse?.token) {
       // localStorage.setItem("user", JSON.stringify(user));
       sessionStorage.setItem("userToken", reponse.token);
       window.location.replace("/FrontEnd/index.html");
      }
}
