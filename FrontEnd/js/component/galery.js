//pour voir les travaux d'une maniere dynamique
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
    const work = await affiche();
    for (let i = 0; i < work.length; i++) {
        const gallery = document.querySelector("#gallery");
        const figure = document.createElement("figure");
        gallery.appendChild(figure);
        let img = document.createElement("img");
        figure.appendChild(img);
        img.src = work[i].imageUrl;
        let title = document.createElement("figcaption");
        figure.appendChild(title);
        title.innerHTML = work[i].title;
    }
}
//fonction filtre
const filrer = async () => {
    const categories = await fetch(URL + "/categories", {
        method: "GET",
        headers: {
            "content-type": "application/json",
        }

    })
        .then((res) => res.json());
    return categories[i].nom;
}
export { afficheGalleries, affiche };

//Function de modification de l'element actif du menu de filtres
function activation(element) {
    console.log(element);
    document.querySelector(".filtres .active").classList.remove("active");
    document.getElementById(element).classList.add("active");
}
const btntout = document.querySelector("#btn-tout");
btntout.addEventListener("click", function () {
    document.querySelector('.gallery');
    activation("btn-tout");

});
const btnobjets = document.querySelector("#btn-objets");
btnobjets.addEventListener("click", function () {
    //const filter_object= list.filter(function () {
    const filter_objects = .map(piece => piece.nom);

});
const btnappartement = document.querySelector("#btn-appartements");
btnappartement.addEventListener("click", function () {
    //const filter_appartement = list.filter(function () {
    const filterappartement = work.map(piece => piece.nom);

});

const btnhotels = document.querySelector("#btn-hotels");
btnhotels.addEventListener("click", function () {
    //const filter_hotel= list.filter(function () {
    const filter_hotel = work.map(piece => piece.nom);

});
