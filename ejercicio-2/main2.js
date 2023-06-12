let artista1 = {
  nombre: "Maruv",
  descripcion:
    "Anna Korsun, con el nombre profesional de Maruv, es una cantante, compositora, poetisa y productora ucraniana. Anna nació en Pavlograd, y en la escuela, estudió música y danza.",
  imagen: "../img/maruv.jpg",
};
let artista2 = {
  nombre: "Till Lindemann",
  descripcion:
    "Till Lindemann es un cantante, actor, poeta, escritor, pirotécnico y ex nadador alemán, conocido mundialmente por ser vocalista de la banda de metal industrial Rammstein..",
  imagen: "../img/rammstein.jpg",
};
let artista3 = {
  nombre: "Maneskin",
  descripcion:
    "Måneskin es una banda italiana formada en 2016 en Roma, conformada por Damiano David como vocalista, Victoria De Angelis como bajista, Thomas Raggi como guitarrista y Ethan Torchio como baterista.",
  imagen: "../img/maneskin.jpg",
};

let vector = [artista1, artista2, artista3];

let caja = document.getElementById("principal");
caja.innerHTML =
  '<div class="card m-3 col-lg-4 col-ms-6 col-xs-12" style="width: 18rem;"><img src="' +
  vector[0].imagen +
  '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' +
  vector[0].nombre +
  '</h5><p class="card-text">' +
  vector[0].descripcion +
  '</p></div></div><div class="card m-3 col-lg-4 col-ms-6 col-xs-12" style="width: 18rem;"><img src="' +
  vector[1].imagen +
  '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' +
  vector[1].nombre +
  '</h5><p class="card-text">' +
  vector[1].descripcion +
  '</p></div></div><div class="card m-3 col-lg-4 col-ms-6 col-xs-12" style="width: 18rem;"><img src="' +
  vector[2].imagen +
  '" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">' +
  vector[2].nombre +
  '</h5><p class="card-text">' +
  vector[2].descripcion +
  "</p></div></div>";
