console.log("moviendo")
//tamaño,velocidad,dirección de la pelota y la plataforma.
var pelota = {}
pelota.top = 70
pelota.left = 920
pelota.dir = [-1, -3]
pelota.vel = 3
var plataforma = {}
plataforma.top = 780
plataforma.left = 880
plataforma.dir = 0
plataforma.vel = 2

//setInterval(moverpelota, 1000 / 24)
setInterval(moverpelota, 1000 / 24)
window.onload = iniciar
function iniciar(){

  for (let j= 0; j <= 5; j++){
    for (let i= 0; i <= 18; i++){
      new Ladrillo(70 + i* 90,90 + (j-1)*50)

    }
  }
}

class Ladrillo {
  constructor(x, y) {
let div = document.createElement('div')
div.classList.add('ladrillo')
div.style.left = x + "px"
div.style.top = y + "px"
document.getElementById("div1").appendChild(div)
  }
}

//mueve la pelota y rebota encima de la plataforma y otros lugares.
function moverpelota() {

  pelota.left += pelota.vel * pelota.dir[0]


  pelota.top += pelota.vel * pelota.dir[1]

  if (pelota.top < 0)
    pelota.dir[1] = pelota.dir[1] * (-1)

  if (pelota.top > 750)
    if (plataforma.left + 100 > pelota.left)
      if (plataforma.left - 40 < pelota.left)
        pelota.dir[1] = pelota.dir[1] * (-1)

  if (pelota.left > 1836)
    pelota.dir[0] = pelota.dir[0] * (-1)

  if (pelota.left < 0)
    pelota.dir[0] = pelota.dir[0] * (-1)

    verColision()


  let div = document.getElementById("div3")
  div.style.left = pelota.left + "px"
  div.style.top = pelota.top + "px"
}
//colicion de los cubos en lo que rebota la pelota.
function verColision(){
   let ladrillos = document.querySelectorAll(".ladrillo")
   for (let l of ladrillos){
     if (pelota.top > parseInt(l.style.top) && (pelota.top < (parseInt(l.style.top)+40)))
      l.style.display = "none"
   }
}

window.onkeydown = mover

//mueve la plataforma con als flechas.
function mover(event) {
  //console.log(event)
  let div2 = document.getElementById("div2")

  if (event.key == "ArrowRight") {
    plataforma.left += 29
    if (plataforma.left >= 1738)
      plataforma.left = 1738

  }

  if (event.key == "ArrowLeft") {
    plataforma.left -= 29

    if (plataforma.left <= 16) {
      plataforma.left = 16
    }

  }
  div2.style.left = plataforma.left + "px"

  event.preventDefault()
}
