import { URL } from api.js ;
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
}
//creations des 3 elements 
image.src=list[i].imageUrl;
titre= list[i].title;
for (let i = 0; i <= id-1; i++) {
let figure = document.createElement("figure");
let image=document.createElement("img");
let titre=document.createElement("figcaption");
figure.appendChild(image);
figure.appendChild(titre);
}











   //affiche()
/*const galery = (list) => {
    let galery = document.querySelector(".gallery");
    list.map((elt)=> {
        let createimg = createelement()
    })
    createelement
    appendchild

    //creer les elements html dans la fonction
    //modifier tableau
    let tab_galery = new Set([]);
    for (let i of images.children) {
        //recuperer l'attribut class qui se trouve dans images
        const id_images = Number (i.getAttribute("class").split("-").pop())
        
    }
}*/
