

let propulsion = document.querySelector(".propulsion")
let countdown = document.querySelector(".countdown")
let rocket = document.querySelector(".rocket")
let interrogation = document.querySelector(".dot")
let number=3
countdown.innerHTML = number

let miniSat = document.querySelector(".miniSat")
let miniRocket = document.querySelector(".miniRocket")
let image_affiche=document.getElementById("myImage")
image_affiche.src = "images/rocket.png"

//fonction affichage du satellite
miniSat.addEventListener(
  'click',
  function()
    {
    affichage_satellite()
    }
    ,false
  )

function affichage_satellite(){
image_affiche.src = "images/satellite.png"
}

//fonction affichage de la fusée
miniRocket.addEventListener(
  'click',
  function()
    {
    affichage_fusee()
    }
    ,false
  )

function affichage_fusee(){
image_affiche.src = "images/rocket.png"
}



//decollage de la fuséé

propulsion.addEventListener(
'click',
function()
  {
  setInterval(decollage,500)
  }
  ,false)


function decollage(){
  if (number>0){
  countdown.innerHTML=(number-=1)
  }
  else{
    countdown.innerHTML = 0
    rocket.style.transform = "translateY(-1500px)"
    rocket.style.transition = "all 15s"
    interrogation.style.transform = "translateY(-1500px)"
    interrogation.style.transition = "all 15s"
  }
}
