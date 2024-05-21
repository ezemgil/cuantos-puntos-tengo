class Carta {
  constructor(numero, palo) {
    this.numero = numero;
    this.palo = palo;
  }
}

function calcularEnvido(carta1, carta2, carta3) {
  const cartas = [carta1, carta2, carta3];

  // Agrupar cartas por palo
  const palos = cartas.reduce((acc, carta) => {
    acc[carta.palo] = acc[carta.palo] || [];
    acc[carta.palo].push(carta.numero);
    return acc;
  }, {});

  // Obtener un array con longitud mayor o igual a 2
  const cartasMismoPalo = Object.values(palos).find(
    (cartas) => cartas.length >= 2
  );

  // Calcular el envido
  if (cartasMismoPalo) {
    const figuras = cartasMismoPalo.filter((numero) => numero >= 10).length; // Cartas con valor 10, 11 o 12
    const noFiguras = cartasMismoPalo.filter((numero) => numero < 10);

    switch (figuras) {
      case 0:
        return noFiguras
          .sort((a, b) => b - a)
          .slice(0, 2)
          .reduce((a, b) => a + b, 20);
      case 1:
        if (cartasMismoPalo.length === 3) {
          return noFiguras.reduce((a, b) => a + b, 20);
        }
        return 20 + noFiguras[0];
      case 2:
        if (cartasMismoPalo.length === 3) {
          return 20 + noFiguras[0];
        }
        return 20;
      case 3:
        return 20;
      default:
        return cartasMismoPalo.reduce((a, b) => a + b, 20);
    }
  } else {
    return Math.max(
      ...cartas.map((carta) => (carta.numero > 7 ? 0 : carta.numero))
    );
  }
}

function checkValidNumber(number) {
  if (number >= 1 && number <= 12 && !(number === 8 || number === 9)) {
    alert("Los 8 ni 9 juegan al truco papi");
  }
}

const form = document.getElementById("envidoForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const carta1 = new Carta(parseInt(form.carta1.value), form.palo1.value);
  const carta2 = new Carta(parseInt(form.carta2.value), form.palo2.value);
  const carta3 = new Carta(parseInt(form.carta3.value), form.palo3.value);
  const resultado = calcularEnvido(carta1, carta2, carta3);
  const envidoResult = document.getElementById("envidoResult");
  envidoResult.textContent = resultado;
});
