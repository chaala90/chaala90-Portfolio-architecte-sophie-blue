import { URL } from "./api.js";
import { update, close_modal2 } from "./edit.js";
import { afficheGalleries_modal, close_modal, open_modal } from "./modal.js";
const affiche = async () => {
    //recuperer les données avec fetch d'une maniere dynamique
    const list = await fetch(URL + "/works", {
        method: "GET",
        headers: {
            "content-type": "application/json",
        }
    })
        //recuperer la reponse au format JSON
        .then((res) => res.json());
    return list;
    // console.log(list);
}
//creations des 3 elements et la boucle pour les 11 elt
//afficher les données sur la page web
//affiche toute la galerie
const afficheGalleries = async () => {
    //recuperer le resultat dans work
    const work = await affiche();
    for (let i = 0; i < work.length; i++) {
        const gallery = document.querySelector(".gallery");
        const figure = document.createElement("figure");
        figure.setAttribute("data-id", work[i].id);
        gallery.appendChild(figure);
        let img = document.createElement("img");
        figure.appendChild(img);
        // img.src = work[i].imageUrl;
        img.setAttribute("crossorigin", "anonymous");
        img.setAttribute("src", work[i].imageUrl);
        let title = document.createElement("figcaption");
        title.innerHTML = work[i].title;
        figure.appendChild(title);
    }
}
//affiche la galerie en fonction de filtre selectionné
const afficheGalleriesfiltre = async (galerie) => {
    const work = galerie;
    for (let i = 0; i < work.length; i++) {
        const gallery = document.querySelector(".gallery");
        const figure = document.createElement("figure");
        figure.setAttribute("data-id", work[i].id);
        gallery.appendChild(figure);
        let img = document.createElement("img");
        figure.appendChild(img);
        img.setAttribute("crossorigin", "anonymous");
        img.setAttribute("src", work[i].imageUrl);
        let title = document.createElement("figcaption");
        title.innerHTML = work[i].title;
        figure.appendChild(title);
    }
}

//recuperer les données de la categorie
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
//afficher les données de categorie
const affichecategory = async (elt_category) => {
    const list_category = await filtrer();

    //creer le bouton "tous" en dehors de boucle
    const gallery = document.querySelector(".gallery");
    const creerdiv = document.createElement("div");
    creerdiv.classList.add("filtres");
    const btnall = document.createElement("button");
    btnall.innerHTML = "Tous";
    btnall.classList.add("bouton_filtre");
    creerdiv.appendChild(btnall);
    //pour cibler les boutons
    btnall.setAttribute("data-name", "Tous");

    //creer les 3 boutons de filtre
    for (let i = 0; i < list_category.length; i++) {
        const btn = document.createElement("button");
        btn.innerHTML = list_category[i].name;
        creerdiv.appendChild(btn);
        btn.classList.add("bouton_filtre");
        btn.setAttribute("data-name", list_category[i].name);
    }
    //inserer cote a cote avant gallery
    gallery.insertAdjacentElement("beforebegin", creerdiv);
}
//fonction afficher les images de chaque filtre au clic sur le bouton
const func = async () => {
    const data_work = await affiche();

    let boutons = document.getElementsByClassName("bouton_filtre");
    for (let i = 0; i < boutons.length; i++) {
        const elt = boutons[i];
        boutons[i].addEventListener("click", () => {
            console.log(data_work);
            if (elt.getAttribute("data-name") != "Tous") {
                //console.log("show");
                document.querySelector(".gallery").innerHTML = "";
                const objet = data_work.filter(compteur => compteur.category.name === elt.dataset.name);
                return afficheGalleriesfiltre(objet);
            }
            else {
                document.querySelector(".gallery").innerHTML = "";
                return afficheGalleries();
            }
        })

    }
}

const addWork = async (formData) => {
    try {
        const userToken = sessionStorage.getItem("userToken");
        const response = await fetch('http://localhost:5678/api/works', {
            method: 'POST',
            body: formData, // using formData and letting browser fixing request headers
            headers: {
                'Authorization': `Bearer ${userToken}`
            }
        });
        const status = response.status;
        if (status === 400 || status === 404) {
            throw new Error("Echec de la connexion au serveur. Veuillez réessayer.");
            //break;
        }
        else {
            const image = document.getElementById('imageloading');
            document.querySelector("#modal-gallery").innerHTML = '';
            document.querySelector(".gallery").innerHTML = "";
            close_modal2();
            open_modal();
            afficheGalleries_modal();
            afficheGalleries();
            addButton.value = "";
            image.style.display = "none";
            image.src = "";
            document.querySelector('.fa-image').style.display = null;
            document.querySelector('.addImg').style.display = null;
            document.querySelector('.typeImg').style.display = null;
            document.querySelector('#addButton').style.top = null;
        }

    } catch (e) {
        console.error(e);

    }
};

const Delete = async (id) => {
    const userToken = sessionStorage.getItem("userToken");
    const reponse = await fetch(URL + "/works/" + id, {
        method: 'DELETE',
        headers: {
            "content-type": "application/json",
            'Authorization': `Bearer ${userToken}`
        }
    })
    //.then((res) => res.json());
    if (reponse.status === 400 || reponse.status === 404) {
        error.innerText = "Echec de la connexion au serveur. Veuillez réessayer.";
    }
    else {
        document.querySelector("#modal-gallery").innerHTML = '';
        document.querySelector(".gallery").innerHTML = "";
        afficheGalleries_modal();
        afficheGalleries();

    }
}

export { afficheGalleries, affiche, affichecategory, filtrer, func, addWork, Delete };