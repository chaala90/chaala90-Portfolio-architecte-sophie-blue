//pour voir les travaux d'une maniere dynamique
const affiche = async () => {
    const list = await fetch ( URL + "/works", {
        method: "GET",
        headers:{
          "content-type": "application/json",  
        }

    }) 
    .then((res) => res.json());
    return list;
   // console.log(list);
}
//creations des 3 elements et la boucle pour les 11 elt
for (let i = 0; i <liste.length; i++) {
const gallery = document.querySelector("#gallery");
let figure = document.createElement("figure");
let img=document.createElement("img");
img.src=list[i].imageUrl;
let title=document.createElement("figcaption");
title.innerHTML= list[i].title;
gallery.appendChild(figure).appendChild(img);
gallery.appendChild(figure).appendChild(figcaption);
}
//fonction filtre

const tout = document.querySelector(".btn-tout");
const objets = document.querySelector(".btn-objets");
const appartement = document.querySelector(".btn-appartements");
const hotels = document.querySelector(".btn-hotels");

tout.addEventListener("click", function () {
    /*const  = list.filter(function () {*/
        return list[i];
   
});
;
