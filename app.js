document.addEventListener("DOMContentLoaded", () => {
  const cardAdj = [
    {
      name: "catnoair",
      img: "imagenes/catnoair.jpg"
    },
    {
      name: "catnoair1",
      img: "imagenes/catnoair1.jpg"
    },
    {
      name: "ladybug",
      img: "imagenes/ladybug.jpg"
    },
    {
      name: "ladybug1",
      img: "imagenes/ladybug1.jpg"
    },
    {
      name: "ladybugycatnoair",
      img: "imagenes/ladybugycatnoair.jpg"
    },
    {
      name: "miraculous",
      img: "imagenes/miraculous.jpg"
    },

    {
      name: "catnoair",
      img: "imagenes/catnoair.jpg"
    },
    {
      name: "catnoair1",
      img: "imagenes/catnoair1.jpg"
    },
    {
      name: "ladybug",
      img: "imagenes/ladybug.jpg"
    },
    {
      name: "ladybug1",
      img: "imagenes/ladybug1.jpg"
    },
    {
      name: "ladybugycatnoair",
      img: "imagenes/ladybugycatnoair.jpg"
    },
    {
      name: "miraculous",
      img: "imagenes/miraculous.jpg"
    }
  ];
  const cuadricula = document.querySelector(".cuadricula");
  const resultado = document.querySelector("#resultado");
  var cartasEscogidas = [];
  var cartasEscogidasId = [];
  var cartasGanadas = [];

  function crearTablero() {
    for (let i = 0; i < cardAdj.length; i++) {
      var carta = document.createElement("img");
      carta.setAttribute("src", "imagenes/reverso.png");

      carta.setAttribute("data-id", i);
      carta.addEventListener("click", voltearCarta);

      cuadricula.appendChild(carta);
    }
  }

  function verificarPareja() {
    var cards = document.querySelectorAll("img");
    const opcionUnoId = cartasEscogidasId[0];
    const opcionDosId = cartasEscogidasId[1];

    if (opcionUnoId === opcionDosId) {
      cards[opcionUnoId].setAttribute("src", "imagenes/reverso.png");
      cards[opcionDosId].setAttribute("src", "imagenes/reverso.png");
      alert("¡diste click a la misma imagen!");
    } else if (cartasEscogidas[0] === cartasEscogidas[1]) {
      alert("¡Correcto!");
      cards[opcionUnoId].setAttribute("src", "imagenes/blanck.png");
      cards[opcionDosId].setAttribute("src", "imagenes/blank.png");
      cards[opcionUnoId].removeEventListener("click", voltearCarta);
      cards[opcionDosId].removeEventListener("click", voltearCarta);
      cartasGanadas.push(cartasEscogidas);
    } else {
      cards[opcionUnoId].setAttribute("src", "imagenes/reverso.png");
      cards[opcionDosId].setAttribute("src", "imagenes/reverso.png");
      alert("¡Intenta de nuevo!");
    }
    cartasEscogidas = [];
    cartasEscogidasId = [];

    resultado.textContent = cartasGanadas.length;

    if (cartasGanadas.length === cardAdj.length / 2) {
      resultado.textContent = "¡felicidades, encontraste todos los pares!";
    }
  }

  function voltearCarta() {
    var cardId = this.getAttribute("data-id");
    cartasEscogidas.push(cardAdj[cardId].name);
    cartasEscogidasId.push(cardId);
    this.setAttribute("src", cardAdj[cardId].img);
    if (cartasEscogidas.length === 2) {
      setTimeout(verificarPareja, 1000);
    }
  }
  crearTablero();
});
