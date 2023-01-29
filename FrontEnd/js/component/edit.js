import { URL } from "./api.js";
import { afficheGalleries, affiche, addWork } from "./galery.js";
//import{login} from "./login.js"
const update = () => {
  //login et logout
  const login=document.getElementById("login").style.display = "none";
  const logout=document.getElementById("logout").style.display = "block";
  /*func logoutquand je cliq logout
  vider session storage
  il derige vers pas d'accueil
  affiche cathegorie*/
 /* document.querySelector(".title_link").addEventListener("click", ()=>{
    window.location.replace('/FrontEnd/index.html');
  })*/
  /*  const title_link = document.querySelector(".title_link");
  title_link.addEventListener("click", ()=>{
    window.location.replace('/FrontEnd/index.html');
  })
  const login =document.getElementById("login");
 // .style.display = "none";
 login.addEventListener("click", ()=>{
  login.style.display = "none";
  logout.style.display = "block";
 })
  const logout=document.getElementById("logout");
  logout.addEventListener("click", ()=>{
    login.style.display = "none";
 // .style.display = "block";*/
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
  portfolio.insertAdjacentElement("afterbegin", modifier_project);
  divedit.setAttribute("href", "#modal1");
  afficheGalleries();
  const modal = document.querySelector("#modal1");
  //ouvrir modal au clic
  const modifier = document.querySelectorAll(".modifier");
  const open_modal = () => {
    //e.preventDefault();
    document.getElementById("modal1").style.display = "block";
   
  }
  //***********stop propagation où faut mettre??????????????????????? */
  /*const stopPropagation = (e) => {
    e.stopPropagation();
  };*/
  for (let i = 0; i < modifier.length; i++) {
    modifier[i].addEventListener("click", () => {
      open_modal();
      afficheGalleries_modal();
      document.querySelector(".modal-gallery").innerHTML = "";
    });
  }
  //fermer modale avec l'icone x
  const close_modal = () => {
    //e.preventDefault();
    document.getElementById("modal1").style.display = "none";
  }
  const close = document.querySelector(".modal-close");
  close.addEventListener("click", () => {
    close_modal();

  });
  //fermer en cliquant n'importe ou
  window.addEventListener("click", (e) => {
    if (e.target == modal) {
      close_modal();
    }
  });
  //fermer en cliquant sur esc
window.addEventListener('keydown',function(e){
  if (e.key ==='Escape' || e.key === 'esc'){
    close_modal();
  }
})

  //afficher images dans le modal
  const afficheGalleries_modal = async () => {
    const work = await affiche();
    for (let i = 0; i < work.length; i++) {
      const modal_gallery = document.querySelector("#modal-gallery");
      const figure = document.createElement("figure");
      modal_gallery.appendChild(figure);
      let img = document.createElement("img");
      img.classList.add("EditImg");
      figure.appendChild(img);
      img.setAttribute("crossorigin", "anonymous");
      img.setAttribute("src", work[i].imageUrl);
      const div_edit = document.createElement('div');
      div_edit.classList.add("icons")
      div_edit.innerHTML = `<i class="fa-solid fa-arrows-up-down-left-right addIcon"></i>
                <i class="fa-solid fa-trash-can trashIcon" data-id=
                ${work[i].id}></i>`;
      div_edit.addEventListener("click", supprimer);
      figure.appendChild(div_edit);
      let title = document.createElement("p");
      title.classList.add('edit_text');
      title.innerHTML = "editer";
      figure.appendChild(title);
    }
  }
//open modal2
const modal2 = document.getElementById("modal2");
const open_modal2 = () => {
  //e.preventDefault();
  document.getElementById("modal2").style.display = "block";
}
const modalAdd = document.getElementById("modal-add");
modalAdd.addEventListener("click", () => {
  open_modal2();
});

//previous modal
const previous_modal = () => {
  //document.getElementById('modal1').style.display = "block";
  document.getElementById("modal2").style.display = "none";
}
const previous = document.querySelector(".previous");
previous.addEventListener("click", () => {
  previous_modal();
})
//fermer modale avec l'icone x
const close_modal2 = () => {
  //e.preventDefault();
  document.getElementById("modal2").style.display = "none";
}
const close2 = document.querySelector(".modal-close2");
close2.addEventListener("click", () => {
  close_modal2();

});
 //fermer en cliquant sur esc
 window.addEventListener('keydown',function(e){
  if (e.key ==='Escape' || e.key === 'esc'){
    close_modal2();
  }
})

//fermer en cliquant n'importe ou
window.addEventListener("click", (e) => {
  if (e.target == modal2) {
    close_modal2();
  }
});

//recuperation des données de formulaire et appel fonction d'ajout
const  formulaire2= document.getElementById('addImage');
formulaire2.addEventListener('submit', (e)=>{
e.preventDefault();
const formData = new FormData(e.target);
/*Envoyer(formData);*/
addWork(formData);
})
}
//supprimer une image au clic sur corbeille

const Delete = async (id) => {
  const userToken = sessionStorage.getItem("userToken");
  const reponse = await fetch(URL +"/works/"+id, {
    method: 'DELETE',
    headers: { "content-type": "application/json",
    'Authorization': `Bearer ${userToken}`}
  })
  //.then((res) => res.json());
  if(reponse.status=== 400 || reponse.status=== 404){
    error.innerText ="Echec de la connexion au serveur. Veuillez réessayer.";
}
else {
  supprimer();
}
}
const supprimer = async (e)=>{
  const work = await affiche();
  let i=0;
  const trashIcon=document.querySelector('.trashIcon');
  //trashIcon.setAttribute("data-id", work[i].id);
  const thisId = trashIcon.dataset.id;
  const trash = await Delete(thisId);
  console.log(thisId);
  //thisId.remove("figure");
}
  const trashIcon=document.querySelectorAll('.trashIcon');
  for (let i=0; i<trashIcon.length; i++){
    trashIcon[i].addEventListener('click', ()=>{ 
      console.log('ok');
      //supprimer(thisId);
    })
  }


export { update };