let numerotrayectos = parseInt(prompt('¿cuantos trayectos habran?'))
let duracionTrayectos = Math.floor(Math.random() * (1000 - 2) + 2)
let trayectos = []
let tiempoEstimado = 0
let esferas = 0

// pedir los trayectos
for(let i = 0; i < numerotrayectos; i++) {
  let trayecto = prompt('Escriba el trayecto ' + (i + 1))
  trayectos.push(trayecto)
}
console.log('entrada')
console.log(trayectos)

// estimar tiempo total
let primerTrayecto = parseInt(trayectos.shift().split(' ')[0])
tiempoEstimado = primerTrayecto

trayectos.forEach(trayecto => {
  let esfera = parseInt(trayecto.split(' ')[1])
  esferas = esferas + esfera
  if(esferas > 0) {
    let tiempoTrayecto = parseInt(trayecto.split(' ')[0] / 2)
    esferas = esferas - 1
    tiempoEstimado = tiempoEstimado + tiempoTrayecto
  } else {
    let tiempoTrayecto = parseInt(trayecto.split(' ')[0])
    tiempoEstimado = tiempoEstimado + tiempoTrayecto
  }
})
console.log('tiempo estimado total')
console.log(`${tiempoEstimado} minutos`)
