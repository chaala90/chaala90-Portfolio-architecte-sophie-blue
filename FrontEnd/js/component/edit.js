import { URL } from "./api.js";
import { afficheGalleries } from "./galery.js";
//import{login} from "./login.js"
const update = () => {
    //login et logout
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
    divedit.setAttribute("href", "#modal1");
    divedit.innerHTML = `<i class="fa-regular fa-pen-to-square "></i>
    <span>modifier</span>`;
    const btn_edit = document.createElement("button");
    btn_edit.innerHTML = "publier les changements";
    blackdiv.appendChild(divedit);
    blackdiv.appendChild(btn_edit);

    //creation  de modif pour photo architecte
    const figure = document.getElementsByTagName("figure");
    const modifier_photo = document.createElement("div");
    modifier_photo.classList.add("modifier");
    modifier_photo.classList.add("deplacer1");
    divedit.setAttribute("href", "#modal1");
    modifier_photo.innerHTML = `<i class="fa-regular fa-pen-to-square "></i>
    <span>modifier</span>`;
    figure[0].insertAdjacentElement("beforeend", modifier_photo);
    //creation  de modif pour texte associée de la photo
    const article = document.getElementsByTagName("article");
    const modifier_text = document.createElement("div");
    modifier_text.classList.add("modifier");
    divedit.setAttribute("href", "#modal1");
    modifier_text.innerHTML = `<i class="fa-regular fa-pen-to-square "></i>
    <span>modifier</span>`;
    article[0].insertAdjacentElement("afterbegin", modifier_text);
    //creation  de modif pour images de projet
    const portfolio = document.getElementById("portfolio");
    const modifier_project = document.createElement("div");
    modifier_project.classList.add("modifier");
    modifier_project.classList.add("deplacer2");
    modifier_project.innerHTML = `<i class="fa-regular fa-pen-to-square "></i>
    <span>modifier</span>`;
    portfolio.insertAdjacentElement("afterbegin",modifier_project);
    divedit.setAttribute("href", "#modal1");
    afficheGalleries();
    const modal = document.querySelector("#modal1");
   //ouvrir modal au clic
   const modifier = document.querySelectorAll(".modifier");
   const open_modale = ()=>{
    //e.preventDefault();
    document.getElementById("modal1").style.display = "block";
   }
for (let i = 0; i < modifier.length; i++) {
    modifier[i].addEventListener("click", () => {
        open_modale();
    });
  }
  //fermer modale avec l'icone x
  const close_modale = ()=>{
    //e.preventDefault();
    document.getElementById("modal1").style.display = "none";
  }
  const close = document.querySelector(".modal-close");
  close.addEventListener("click", () => {
    close_modale();
});
//close
/*window.addEventListener("keydown", function (e) {
    if (e.key === "Escape" || e.key === "Esc") {
      console.log(close_modale(e);
    }
   /* if (e.key === "Tab" && modal != null) {
      focusInModal(e);
    }

  });
  if (open_modale){
    
  }*/
}  
//afficher images dans le modal
const affiche = async () => {
const list = await fetch(URL + "/works", {
        method: "GET",
        headers: {
            "content-type": "application/json",
        }
    })
        .then((res) => res.json())
        return list;
}
        const afficheGalleries_modal = async () => {
            const work = await affiche();
            for (let i = 0; i < work.length; i++) {
                const modal_gallery = document.querySelector("#modal-gallery");
                const figure = document.createElement("figure");
                modal_gallery.appendChild(figure);
                let img = document.createElement("img");
                figure.appendChild(img);
                img.setAttribute("crossorigin", "anonymous");
                img.setAttribute("src", work[i].imageUrl);
                figure.innerHTML = `<i class="fa-solid fa-arrows-up-down-left-right"></i>
	            <i class="fa-solid fa-trash-can"></i>`;
                let title = document.createElement("p");
                title.innerHTML = "editer";
                figure.appendChild(title);
            }
        }
        const afficheGalleries_modal2 = async (modall) => {
            const work = modall;
            for (let i = 0; i < work.length; i++) {
                const modal_gallery = document.querySelector("#modal-gallery");
                const figure = document.createElement("figure");
                modal_gallery.appendChild(figure);
                let img = document.createElement("img");
                figure.appendChild(img);
                img.setAttribute("crossorigin", "anonymous");
                img.setAttribute("src", work[i].imageUrl);
                figure.innerHTML = `<i class="fa-solid fa-arrows-up-down-left-right"></i>
	            <i class="fa-solid fa-trash-can"></i>`;
                let title = document.createElement("p");
                title.innerHTML = "editer";
                figure.appendChild(title);
            }
        }


export { update };