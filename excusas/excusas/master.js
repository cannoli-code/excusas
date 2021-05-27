
let quien = ['El perro','Mi ex','Un osito','Un millonario', 'Él', 'El vecino', 'Tu amiguita', 'Mi suegra', 'Mi enemigo', 'Ese maldito', "El viejo pascuero", "Tu mujer", "Ella"];
let que = ['devoró','destruyó','corrompió', 'envenenó', 'robó', 'vomitó', 'hizo desaparecer', 'se fumó', 'vendió ilegalmente', 'asesinó', 'perforó', 'tocó', 'manoseó'];
let cosa = ['mi corazón', 'mi amor por ti', 'mi tarea', 'lo nuestro', 'mi alma', 'tu poesía', 'mi código', 'algo importante', 'mi virginidad', 'lo que me diste', 'mi herencia',
'cosas mías', 'mi secreto', 'mi ombligo'];
let cuando = ['antes de clase.','sin avisar.','hace un rato.','el año pasado.','mientras yo dormía.', 'sin decirle a nadie.', 'sin mi permiso.', 'contra mi voluntad.', 'a pesar de todo.', 'para su beneficio propio.', 'sin compasión.', 'y por eso soy así.',
'de manera sexy.', 'para vengarse.', 'mientras yo gritaba.', 'para reírse de mí.', 'porque tú no estabas.', 'y me gustó.', 'y ya no te necesito.', 'y por eso tendré que matarte.',
'pero es tu culpa igual.', 'y lloré por días.', 'y ni me miraste.', 'con tu ayuda.', 'y sonrió después.', 'y casi me mata.'];

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
