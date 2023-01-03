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
const galery = (listwork) => {
    let images = document.querySelector(".galery");
    listwork.map((elt)=> {
        let createimg = createelement()
    })
    createelement
    appendchild

    //creer les elements html dans la fonction
    //modifier tableau
    let tab_galery = new Set([]);
    /*for (let i of images.children) {
        //recuperer l'attribut class qui se trouve dans images
        const id_images = Number (i.getAttribute("class").split("-").pop())
        
    }*/
}


   
