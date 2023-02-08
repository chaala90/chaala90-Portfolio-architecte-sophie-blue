import { afficheGalleries, affiche, affichecategory, func} from "./component/galery.js";
import { update} from "./component/edit.js";
// Récupération du champ à enregistrer: usertoken
const token = sessionStorage.getItem("userToken");
if (token){
  update();
  const blackheader=document.querySelector('.blackheader');
  const modifier = document.querySelectorAll('.modifier');
  const login=document.getElementById("login");
 // const logout=document.getElementById("logout");
    login.innerText="logout";
  //document.getElementById("hidden_login").innerText = "logout";
  login.addEventListener('click', ()=>{
    window.location.replace("/FrontEnd/index.html");
    sessionStorage.removeItem("userToken");
    login.innerText="login";
    blackheader.style.display="none";
    for(let i=0; i<modifier.length; i++){
      modifier[i].style.display="none";
    }
    
  })
}
else {
  afficheGalleries();
  affichecategory();
  func();
}






























/*const galery = (list) => {
    let galery = document.querySelector(".gallery");
    list.map((elt)=> {
        let createimg = createelement()
    })

//envoyer une requête HTTP de type GET au service web(fetch: aller chercher)
/*fetch ("http://localhost:5678/api/works")
//récupérer le résultat de la requête au format json
.then(function (Res) {
       return Res.json();  
       console.log(Res)
})
.then(function(data) {
    console.log(data)
  })
  .catch(function(err) {
    // Une erreur est survenue
    console.log(err)
  })*/
