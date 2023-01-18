import { URL } from "./api.js";
import { afficheGalleries, affiche, affichecategory, } from "./galery.js";
//import{login} from "./login.js"
const update = () => {
    //alert("ok");
    document.getElementById("login").style.display = "none";
    document.getElementById("logout").style.display = "block";
    //creation des elements
    //black header
    const modifier1 = document.querySelector(".modifier1");
    const blackdiv = document.createElement("div");
    blackdiv.classList.add("blackheader");
    modifier1.insertAdjacentElement("afterbegin", blackdiv);
//creer les elements de blackheader
    const divedit = document.createElement("div");
    divedit.classList.add("row");
    divedit.innerHTML=`<i class="fa-regular fa-pen-to-square "></i>
    <span>Mode édition</span>`;
    const btn_edit = document.createElement("button");
    btn_edit.innerHTML = "publier les changements";
    blackdiv.appendChild(divedit);
    blackdiv.appendChild(btn_edit);
    modifier1.insertAdjacentElement("afterbegin", blackdiv);

//creation  des autres elements
const modifier2 = document.querySelector(".modifier2");
const modifier_photo = document.createElement("div");
    modifier_photo.classList.add("toright");
    modifier_photo.innerHTML=`<i class="fa-regular fa-pen-to-square "></i>
    <span>modifier</span>`;
    modifier2.insertAdjacentElement("beforeend", modifier_photo);


const modifier3 = document.querySelector(".modifier3");
const modifier_text = document.createElement("div");
    modifier_text.classList.add("modifier");
    modifier_text.innerHTML=`<i class="fa-regular fa-pen-to-square "></i>
    <span>modifier</span>`;
    modifier3.insertAdjacentElement("beforebegin", modifier_text);

const modifier4 = document.querySelector(".modifier4");
const modifier_project = document.createElement("div");
    modifier_project.classList.add("modifier");
    modifier_project.innerHTML=`<i class="fa-regular fa-pen-to-square "></i>
    <span>modifier</span>`;
    modifier4.appendChild(modifier_project);



    
    

};


export { update };