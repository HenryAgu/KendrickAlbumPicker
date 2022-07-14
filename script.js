let albumTitle = document.getElementById('album-title');
const damn = document.getElementById('damn');
const goodKid = document.getElementById('goodkid');
const mrMorale = document.getElementById('morale');
const TPAB = document.getElementById('TPAB');
const albumPhoto = document.getElementById('albumPhoto');
const buttons = document.getElementsByClassName('button')



goodKid.addEventListener('click',()=>{
    albumTitle.textContent = "good kid, m.A.A.d city";
    albumPhoto.style.background = "url('./images/Mad2.png')";
    albumPhoto.style.backgroundPosition = "center center";
    albumPhoto.style.backgroundSize = "cover";
    albumPhoto.style.backgroundRepeat = "no repeat";
    document.body.style.background = "#c5cbd0";

    // button colors for each under this album pick

    // good kid, m.A.A.d city
    goodKid.style.background = "#4F4619";
    goodKid.style.border = "none";
    goodKid.style.color = "white";

    // Damn
    damn.style.background = "#4F4619";
    damn.style.border = "none";
    damn.style.color = "white";

    // Mr. Morale & the Big Steppers
    mrMorale.style.background = "#4F4619";
    mrMorale.style.border = "none";
    mrMorale.style.color = "white";

    // To Pimp a Butterfly
    TPAB.style.background = "#4F4619";
    TPAB.style.border = "none";
    TPAB.style.color = "white";
})



damn.addEventListener('click',()=>{
    albumTitle.textContent = "DAMN";
    albumPhoto.style.background = "url('./images/Damn.png')";
    albumPhoto.style.backgroundPosition = "center center";
    albumPhoto.style.backgroundSize = "cover";
    albumPhoto.style.backgroundRepeat = "no repeat";
    // albumPhoto.style.boxShadow = "0px 0px 12px black";
    document.body.style.background = "#6d3244";



    // button colors for each under this album pick

    // good kid, m.A.A.d city
    goodKid.style.background = "#8B5767";
    goodKid.style.border = "1px solid #663240";
    goodKid.style.color = "white";

    // Damn
    damn.style.background = "#8B5767";
    damn.style.border = "1px solid #663240";
    damn.style.color = "white";

    // Mr. Morale & the Big Steppers
    mrMorale.style.background = "#8B5767";
    mrMorale.style.border = "1px solid #663240";
    mrMorale.style.color = "white";

    // To Pimp a Butterfly
    TPAB.style.background = "#8B5767";
    TPAB.style.border = "1px solid #663240";
    TPAB.style.color = "white";
})


mrMorale.addEventListener('click',()=>{
    albumTitle.textContent = "Mr. Morale & the Big Steppers";
    albumPhoto.style.background = "url('./images/Mr Morale.png')";
    albumPhoto.style.backgroundPosition = "center center";
    albumPhoto.style.backgroundSize = "cover";
    albumPhoto.style.backgroundRepeat = "no repeat";
    // albumPhoto.style.boxShadow = "0px 0px 12px black";
    document.body.style.background = "#714018";

    // button colors for each under this album pick

    // good kid, m.A.A.d city
    goodKid.style.background = "#1A0F06";
    goodKid.style.border = "none";
    goodKid.style.color = "white";

    // Damn
    damn.style.background = "#1A0F06";
    damn.style.border = "none";
    damn.style.color = "white";

    // Mr. Morale & the Big Steppers
    mrMorale.style.background = "#1A0F06";
    mrMorale.style.border = "none";
    mrMorale.style.color = "white";

    // To Pimp a Butterfly
    TPAB.style.background = "#1A0F06";
    TPAB.style.border = "none";
    TPAB.style.color = "white";
})

TPAB.addEventListener('click',()=>{
    albumTitle.textContent = "To Pimp a Butterfly";
    albumPhoto.style.background = "url('./images/TPAB.png')";
    albumPhoto.style.backgroundPosition = "center center";
    albumPhoto.style.backgroundSize = "cover";
    albumPhoto.style.backgroundRepeat = "no repeat";
    // albumPhoto.style.boxShadow = "0px 0px 12px black";
    document.body.style.background = "#bcc9cb";

    // button colors for each under this album pick

    // good kid, m.A.A.d city
    goodKid.style.background = "#293031";
    goodKid.style.border = "none";
    goodKid.style.color = "white";

    // Damn
    damn.style.background = "#293031";
    damn.style.border = "none";
    damn.style.color = "white";

    // Mr. Morale & the Big Steppers
    mrMorale.style.background = "#293031";
    mrMorale.style.border = "none";
    mrMorale.style.color = "white";

    // To Pimp a Butterfly
    TPAB.style.background = "#293031";
    TPAB.style.border = "none";
    TPAB.style.color = "white";
})