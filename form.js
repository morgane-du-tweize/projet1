"use strict";

document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById('about_form');

    const ferme = document.getElementById("fermeture_popup");

    form.addEventListener("submit", function(event){

        event.preventDefault();

       console.log(`nom : ${form.nom.value} \n prenom: ${form.prenom.value} \n numéro de téléphone : ${form.telephone.value} \n
       adresse électronique: ${form.email.value} \n votre message: ${form.message.value} `);

       document.getElementById("overlay").style.display = "block";

    })

    ferme.addEventListener("click", function(){
        document.getElementById("overlay").style.display = "none";
    
    })

});
