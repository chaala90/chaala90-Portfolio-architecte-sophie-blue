//pour voir les travaux d'une maniere dynamique
import { URL } from "./api.js";
const affiche = async () => {
    const list = await fetch(URL + "/works", {
        method: "GET",
        headers: {
            "content-type": "application/json",
        }

    })
        .then((res) => res.json());
    return list;
    // console.log(list);
}
//creations des 3 elements et la boucle pour les 11 elt
const afficheGalleries = async () => {
    const work =  await affiche();
    for (let i = 0; i < work.length; i++) {
        const gallery = document.querySelector(".gallery");
        const figure = document.createElement("figure");
        gallery.appendChild(figure);
        let img = document.createElement("img");
        figure.appendChild(img);
       // img.src = work[i].imageUrl;
        img.setAttribute("crossorigin", "anonymous"); //to prevent ERR_BLOCKED_BY_RESPONSE.NotSameOrigin
        img.setAttribute("src", work[i].imageUrl);
        
        let title = document.createElement("figcaption");
        title.innerHTML = work[i].title;
        figure.appendChild(title);
    }
}

const afficheGalleriesfiltre = async (galerie) => {
    const work = galerie;
    for (let i = 0; i < work.length; i++) {
        const gallery = document.querySelector(".gallery");
        const figure = document.createElement("figure");
        gallery.appendChild(figure);
        let img = document.createElement("img");
        figure.appendChild(img);
       // img.src = work[i].imageUrl;
        img.setAttribute("crossorigin", "anonymous"); //to prevent ERR_BLOCKED_BY_RESPONSE.NotSameOrigin
        img.setAttribute("src", work[i].imageUrl);
        
        let title = document.createElement("figcaption");
        title.innerHTML = work[i].title;
        figure.appendChild(title);
    }
}


const filtrer = async () => {
    const category = await fetch(URL + "/categories", {
        method: "GET",
        headers: {
            "content-type": "application/json",
        }

    })
        .then((res) => res.json());
    return category;
}
const affichecategory = async (elt_category) => {
    const list_category = await filtrer ();

const gallery = document.querySelector(".gallery");
const creerdiv = document.createElement("div");
/*creerdiv.classList.add("filtres");*/
const btnall = document.createElement("button");
btnall.innerHTML= "Tous";
btnall.classList.add("bouton_filtre");
creerdiv.appendChild(btnall);
//pour cibler les boutons
btnall.setAttribute("data-name", "Tous");

for (let i = 0; i < list_category.length; i++) {
    const btn = document.createElement("button");
    btn.innerHTML= list_category[i].name;
    creerdiv.appendChild(btn);
    btn.classList.add("bouton_filtre");
    btn.setAttribute("data-name", list_category[i].name );
}
//inserer cote a cote avant gallery
gallery.insertAdjacentElement("beforebegin",creerdiv);


}
//fonction filtrer
const func = async () =>{
    const data_work = await affiche();
    
    let boutons = document.getElementsByClassName("bouton_filtre");
    for (let i=0; i<boutons.length; i++ ){
        const elt = boutons[i];
        boutons[i].addEventListener("click", () =>{
            console.log(data_work);
            if (elt.getAttribute("data-name") != "Tous") {
                console.log("hgfd");
                document.querySelector(".gallery").innerHTML="";
                const objet = data_work.filter(compteur => compteur.category.name === elt.dataset.name);
                return  afficheGalleriesfiltre(objet);
            

                
            }
            

           else {
            document.querySelector(".gallery").innerHTML="";
                return afficheGalleries();
                
            }
        })
        
    }
}


export { afficheGalleries, affiche, affichecategory, filtrer, func };