//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
//que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const albumsUl = document.createElement("ul")
for(var i = 0; i < albums.length; i++){
    const albumLi = document.createElement("li")
    albumLi.textContent = albums[i]
    albumsUl.appendChild(albumLi)
}
document.body.appendChild(albumsUl)