import { afficheGalleries, affiche, affichecategory, func, addWork} from "./component/galery.js";
import {update} from "./component/edit.js";
// Récupération du champ à enregistrer: usertoken
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
