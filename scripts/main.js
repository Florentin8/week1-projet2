

// Au click sur le bouton, afficher la barre de recherche

alert('Salut toi')

let div1=document.getElementById('work1');
let div2=document.getElementById('work2');
let div3=document.getElementById('BC');

div3.onclick= function() {
  alert("hohoho");
  div1.style.display="block";
  div2.style.display="none";
}





/* work1.style.display='none'
work2.style.display='block'

var basculeSection = function () {
  // définition des variables correspondant aux sections
  
 
 // Action conditionnelle, si div1 caché alors l'afficher et cacher div2
  if(work1.style.display='none') {
      work1.style.display="block";
      work2.style.display="none"; }
  }







/*
document.querySelector('h1').onclick = function() {
    alert('Aïe, arrêtez de cliquer !!');
}


let monImage = document.querySelector('img');

monImage.onclick = function() {
    let maSrc = monImage.getAttribute('src');
    if(maSrc === 'images/firefox-icon.png') {
      monImage.setAttribute ('src','images/firefox2.png');
    } else {
      monImage.setAttribute ('src','images/firefox-icon.png');
    }
}

let monBouton = document.querySelector('button');
let monTitre = document.querySelector('h1');

function définirNomUtilisateur() {
  let monNom = prompt('Veuillez saisir votre nom.');
  localStorage.setItem('nom', monNom);
  monTitre.textContent = 'Mozilla est cool, ' + monNom;
}

if(!localStorage.getItem('nom')) {
  définirNomUtilisateur();
} else {
  let nomEnregistré = localStorage.getItem('nom');
  monTitre.textContent = 'Mozilla est cool, ' + nomEnregistré;
}

monBouton.onclick = function() {
  définirNomUtilisateur(); 
}
*/