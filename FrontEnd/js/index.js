import { afficheGalleries, affiche, affichecategory, func,  addWork} from "./component/galery.js";
import {update} from "./component/edit.js";
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
  //affichecategory();

}
else {
  afficheGalleries();
  affichecategory();
  func();
  //addWork(formData: mettre update dans edit.js
}
