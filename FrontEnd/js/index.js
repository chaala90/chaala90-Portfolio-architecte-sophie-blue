import { afficheGalleries, affiche, affichecategory, func, addWork} from "./component/galery.js";
import {update} from "./component/edit.js";
const token = sessionStorage.getItem("userToken");
if (token){
  update();
  //document.getElementById("hidden_login").innerText = "logout";
}
else {
  afficheGalleries();
  affichecategory();
  func();
  //addWork(formData);
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
