
let quien = ['El perro','Mi abuela','Una tortuga','Mi hamster', 'Dios', 'Mi vecino'];
let que = ['se comió','destruyó','ensució','atropelló', 'hizo desaparecer', 'se fumó'];
let cosa = ['mi corazón', 'mi tarea', 'mi alma', 'mi código', 'algo importante', 'algo sospechoso'];
let cuando = ['antes de clase.','inesperadamente.','hace un rato.','el año pasado.','mientras dormía.', 'sin decirle a nadie.', 'por videollamada.'];

console.log(quien[3]);
console.log(que[0]);
console.log(cosa[2]);
console.log(cuando[4]);

let frase = ""

function hola() {
  let numero1 = Math.floor(Math.random()*quien.length)
  let numero2 = Math.floor(Math.random()*que.length)
  let numero3 = Math.floor(Math.random()*cosa.length)
  let numero4 = Math.floor(Math.random()*cuando.length)
  return frase = quien[numero1] + " " + que[numero2] + " " + cosa[numero3] + " " + cuando[numero4]
  console.log(frase);
}

document.getElementById('excusa').innerHTML = hola()
