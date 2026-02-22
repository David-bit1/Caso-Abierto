document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  const card = slider.querySelector(".card");

  function getScrollAmount() {
    const cardStyle = window.getComputedStyle(card);
    const gap = parseInt(cardStyle.marginRight) || 20;
    return card.offsetWidth + gap;
  }

  window.moveRight = function () {
    slider.scrollLeft += getScrollAmount();
  };

  window.moveLeft = function () {
    slider.scrollLeft -= getScrollAmount();
  };
});

/*==== psicologia Criminal ====*/
function mostrarInfo(tipo) {
  const info = {
    empatia: "Ausencia de remordimiento y desconexión emocional.",
    manipulacion: "Uso de engaño para controlar a las víctimas.",
    patrones: "Conductas repetidas que escalan con el tiempo."
  };

  document.getElementById("info-psico").innerHTML = `
    <p>${info[tipo]}</p>
  `;
}

