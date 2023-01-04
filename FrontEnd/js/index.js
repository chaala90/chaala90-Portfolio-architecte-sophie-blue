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
let img=document.createElement("img");
let figcaption=document.createElement("figcaption");
gallery.appendChild(figure).appendChild(img).setAttribute("crossorigin", "anonymous", liste[i].imageUrl)
gallery.appendChild(figure).appendChild(figcaption).textcontent(list[i].title)
}

   //affiche()
/*const galery = (list) => {
    let galery = document.querySelector(".gallery");
    list.map((elt)=> {
        let createimg = createelement()
    })

//envoyer une requête HTTP de type GET au service web(fetch: aller chercher)
/*fetch ("http://localhost:5678/api/works")
//récupérer le résultat de la requête au format json
.then(function (Res) {
       return Res.json();  
       console.log(Res)
})
.then(function(data) {
    console.log(data)
  })
  .catch(function(err) {
    // Une erreur est survenue
    console.log(err)
  })*/
