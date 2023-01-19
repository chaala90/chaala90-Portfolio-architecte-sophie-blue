import { URL } from "./api.js";
import { afficheGalleries, affiche, affichecategory, } from "./galery.js";
//import{login} from "./login.js"
const update = () => {
    //alert("ok");
    //login et logout
    
    afficheGalleries();
    document.getElementById("login").style.display = "none";
    document.getElementById("logout").style.display = "block";
    //creation des elements
    //black header
    let body = document.getElementsByTagName('body');
    const blackdiv = document.createElement('div');
    blackdiv.classList.add('blackheader');
    body[0].insertAdjacentElement("afterbegin", blackdiv);
    //creer les elements de blackheader(icone et bouton de l'entete)
    const divedit = document.createElement("div");
    divedit.classList.add("row");
    divedit.classList.add("modifier");
    divedit.setAttribute("href", "#modal");
    divedit.innerHTML = `<i class="fa-regular fa-pen-to-square "></i>
    <span>modifier</span>`;
    const btn_edit = document.createElement("button");
    btn_edit.innerHTML = "publier les changements";
    blackdiv.appendChild(divedit);
    blackdiv.appendChild(btn_edit);
    //modifier1.insertAdjacentElement("afterbegin", blackdiv);

    //creation  de modif pour photo architecte
    const figure = document.getElementsByTagName("figure");
    const modifier_photo = document.createElement("div");
    modifier_photo.classList.add("modifier");
    divedit.setAttribute("href", "#modal");
    modifier_photo.innerHTML = `<i class="fa-regular fa-pen-to-square "></i>
    <span>modifier</span>`;
    figure[0].insertAdjacentElement("beforeend", modifier_photo);
    //creation  de modif pour texte associée de la photo
    const article = document.getElementsByTagName("article");
    const modifier_text = document.createElement("div");
    modifier_text.classList.add("modifier");
    divedit.setAttribute("href", "#modal");
    modifier_text.innerHTML = `<i class="fa-regular fa-pen-to-square "></i>
    <span>modifier</span>`;
    article[0].insertAdjacentElement("afterbegin", modifier_text);
    //creation  de modif pour images de projet
    const portfolio = document.getElementById(".portfolio");
    const modifier_project = document.createElement("div");
    modifier_project.classList.add("modifier");
    modifier_project.innerHTML = `<i class="fa-regular fa-pen-to-square "></i>
    <span>modifier</span>`;
    portfolio.appendChild(modifier_project);
    divedit.setAttribute("href", "#modal");

   //ouvrir modal au clic
   
   const openmodal = function(e){
    e.preventDefault();
    const gettarget = ()=>{
        const target= document.queryselector(e.target.getAttribute("href"))
        target.style.display = null;
        target.removeAttribute('aria-hidden');
        }
        const all =document.querySelectorAll(".modal");
        

    }

    /*const clic_edit = document.querySelector(".modifier");
    for()
    clic_edit.addEventListener("click", () => {
        openmodal();

    })
    const close_modal = document.querySelector(".close");
    close_modal.addEventListener("click", ()=>{
        document.getElementById("modal").style.display = "none";
    })
     const openmodal = function(e){
        e.preventDefault();
        //document.getElementById("modal").style.display = "block";
        console.log('ok');
        document.getElementById("modal").style.display = "null;
    }
    const modifier = document.getElementsByClassName(".modifier");
    document.querySelectorAll(".modal").forEach(modifier =>{
        modifier.addEventListener('click',openmodal)
    })*/



};
export { update };