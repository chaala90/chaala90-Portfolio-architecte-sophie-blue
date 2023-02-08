import { afficheGalleries, affiche, addWork, Delete } from "./galery.js";
let modal;
const createModal = (el) =>{
    modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = ``
}

//ouvrir modal au clic
const modifier = document.querySelectorAll(".modifier");
const open_modal = () => {
  //e.preventDefault();
  document.getElementById("modal1").style.display = "block";
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

//afficher images dans le modal

const afficheGalleries_modal = async () => {
  const work = await affiche();
  let div_edit;
  for (let i = 0; i < work.length; i++) {
    const modal_gallery = document.querySelector("#modal-gallery");
    const figure = document.createElement("figure");
    figure.setAttribute("data-id", work[i].id);
    modal_gallery.appendChild(figure);
    let img = document.createElement("img");
    img.classList.add("EditImg");
    figure.appendChild(img);
    img.setAttribute("crossorigin", "anonymous");
    img.setAttribute("src", work[i].imageUrl);
    div_edit = document.createElement('div');
    div_edit.classList.add("icons")
    div_edit.innerHTML = `<i class="fa-solid fa-arrows-up-down-left-right addIcon"></i>
              <i class="fa-solid fa-trash-can trashIcon " data-id=${work[i].id}></i>`;

    div_edit.addEventListener("click", Delete.bind(this, work[i].id));
    
    figure.appendChild(div_edit);
    let title = document.createElement("p");
    title.classList.add('edit_text');
    title.innerHTML = "editer";
    figure.appendChild(title);
  }
}
const addButton = document.getElementById("addButton");
const image = document.getElementById('imageloading');
function showImage() {
  let selectedFile;
  addButton.addEventListener("change", () => {
    addButton.innerText = "";
    const file = addButton.files[0];
    const fileName = file.name;
    const allowedExtensions = /(\.jpg|\.png)$/i;
    console.log('ok');
    if (!allowedExtensions.exec(fileName)) {
      errorFormat.innerText = "Invalid file format. Please select a PNG or JPG image.";
      addButton.value = "";
    }
    else
      if (file.size > 4 * 1024 * 1024) {
        errorFormat.innerText = "";
        errorSize.innerText = "File size must be less than 4 MB.";
      }
    const reader = new FileReader();
    reader.onload = () => {
      selectedFile = reader.result;
      image.setAttribute('src', selectedFile);
      image.style.width = '200px'; // desired width
      image.style.height = '170px'; // keep aspect ratio
    }
    reader.readAsDataURL(file);
    image.style.display = null;
    document.querySelector('.fa-image').style.display = 'none';
    document.querySelector('.addImg').style.display = 'none';
    document.querySelector('.typeImg').style.display = 'none';
    document.querySelector('#addButton').style.top = '50px';
  });
}
showImage();
let file;
let input_file = document.getElementById("addButton");
let envoi = document.querySelector(".valider");
input_file.addEventListener("change", (e) => {
  envoi.disabled;
  file = input_file.files.item(0);
})
let addWorkForm = document.getElementById("addImage");
addWorkForm.addEventListener('submit', (e) => {
  e.preventDefault();
  //document.getElementById('imageloading').innerHTML='';
  const formData = new FormData(e.target);
  addWork(formData);
  addWorkForm.reset();
});

export { afficheGalleries_modal, close_modal, open_modal};