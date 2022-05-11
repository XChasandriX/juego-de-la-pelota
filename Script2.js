console.log("moviendo")
//tamaño,velocidad,dirección de la pelota y la plataforma.
var pelota = {}
pelota.top = 750
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

function iniciar() {

  for (let j = 0; j <= 5; j++) {
    for (let i = 0; i <= 18; i++) {
      new Ladrillo(70 + i * 90, 90 + (j - 1) * 50)

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

  if (pelota.top < 25)
    pelota.dir[1] = pelota.dir[1] * (-1)

  if (pelota.top > 750)
    if (plataforma.left + 100 > pelota.left)
      if (plataforma.left - 40 < pelota.left)
        pelota.dir[1] = pelota.dir[1] * (-1)

  if (pelota.left > 1820)
    pelota.dir[0] = pelota.dir[0] * (-1)

  if (pelota.left < 10)
    pelota.dir[0] = pelota.dir[0] * (-1)

  verColision()


  let div = document.getElementById("div3")
  div.style.left = pelota.left + "px"
  div.style.top = pelota.top + "px"
}
//colicion de los ladrillos en lo que rebota la pelota y desparecen.
function verColision() {
  let ladrillos = document.querySelectorAll(".ladrillo")
  pelota.norte = [pelota.left + 15, pelota.top]
  pelota.sur = [pelota.left + 15, pelota.top + 30]
  pelota.este = [pelota.left + 30, pelota.top + 15]
  pelota.oeste = [pelota.left, pelota.top + 15]
  for (let l of ladrillos) {
    if (pelota.vel[1] < 0)
      if (pelota.norte[0] > l.left)
        if (pelota.norte[0] < l.left + 80)
          if (pelota.norte[1] > l.top + 40)
            if (pelota.norte[1] < l.top) {
              l.remove()
              pelota.dir[1] = pelota.dir[1] * (-1)
            }
    //  if (pelota.top + 15 > parseInt(l.style.top) && (pelota.top < (parseInt(l.style.top) + 40)))
    //  if (pelota.left + 15 > parseInt(l.style.left) && (pelota.left < (parseInt(l.style.left) + 80))) {
    //  l.style.display = "none"
    //  l.remove()

    //  if (pelota.dir[0] < 0)


    //else





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
