console.log("moviendo")

var pelota = {}
pelota.top = 70
pelota.left = 920
pelota.dir = [-1,-3]
pelota.vel = 3
//setInterval(moverpelota, 1000 / 24)
setInterval(moverpelota, 1000/24)
 
function moverpelota() {

  let div2 = document.getElementById("div2")
  let posicion = parseInt(div2.style.left)

  pelota.left += pelota.vel * pelota.dir[0]
  let div = document.getElementById("div3")

  pelota.top += pelota.vel * pelota.dir[1]

if (pelota.top < 0)
pelota.dir[1] = pelota.dir[1]*(-1)

if (pelota.top > 730)
  if (posicion + 100 > pelota.left)
    if (posicion < pelota.left)
      pelota.dir[1] = pelota.dir[1]*(-1)

if (pelota.left > 1836)
pelota.dir[0] = pelota.dir[0]*(-1)

if (pelota.left < 0)
pelota.dir[0] = pelota.dir[0]*(-1)


  //console.log()
  div.style.left = pelota.left + "px"
  div.style.top = pelota.top + "px"
}
window.onkeydown = mover

function mover(event) {
  //console.log(event)
  let div2 = document.getElementById("div2")
  let posicion = parseInt(div2.style.left)
  if (isNaN(posicion))
    posicion = 880

  if (event.key == "ArrowRight") {
    posicion += 29
    if (posicion >= 1738)
      posicion = 1738

  }

  if (event.key == "ArrowLeft") {
    posicion -= 29

    if (posicion <= 16) {
      posicion = 16
    }

  }
  div2.style.left = posicion + "px"

  console.log(posicion)

  event.preventDefault()
}
