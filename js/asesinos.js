const modal = document.getElementById("modal");
  const modalImg = document.getElementById("imagen-grande");
  const cerrar = document.querySelector(".cerrar");

  document.querySelectorAll(".item img, .carta-item img").forEach(img => {
    img.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
    }
  });

  cerrar.onclick = function() {
    modal.style.display = "none";
  }

  modal.onclick = function() {
    modal.style.display = "none";
  }

/*----- Mapa Interactivo -----*/
document.addEventListener("DOMContentLoaded", function() {

  var mapa = L.map('mapa');

  mapa.setView([38.29, -122.29], 8);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
  }).addTo(mapa)

  L.marker([38.1041, -122.2566]).addTo(mapa)
    .bindPopup("Vallejo (1968)");

  L.marker([37.8651, -122.2585]).addTo(mapa)
    .bindPopup("Lake Berryessa (1969)");

  L.marker([37.4419, -122.1430]).addTo(mapa)
    .bindPopup("San Francisco (1969)");

});