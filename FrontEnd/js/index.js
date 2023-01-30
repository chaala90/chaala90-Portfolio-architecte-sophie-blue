import { afficheGalleries, affiche, afficheGalleriesfiltre,affichecategory, func, addWork} from "./component/galery.js";
import {update,  logoutAccount} from "./component/edit.js";
// Récupération du champ à enregistrer: usertoken
const token = sessionStorage.getItem("userToken");
if (token){
  update();
  const login=document.getElementById("login").style.display = "none";
  const logout=document.getElementById("logout").style.display = "block";
  //document.getElementById("hidden_login").innerText = "logout";
}
else {
  logoutAccount();
  afficheGalleries();
  affichecategory();
  func();
  //addWork(formData);
}
