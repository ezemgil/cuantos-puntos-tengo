export function calculateEnvido(cards) {
    const cartas = cards.filter((carta) => carta !== null);
    if (cartas.length === 0) return 0;

    switch (cartas.length) {
        // Hay una carta
        case 1:
            return parseInt(cartas[0].valor_envido);

        // Hay dos cartas
        case 2:
            if (mismoPalo(cartas[0], cartas[1]))
                return 20 + parseInt(cartas[0].valor_envido) + parseInt(cartas[1].valor_envido);
            return Math.max(parseInt(cartas[0].valor_envido), parseInt(cartas[1].valor_envido));

        // Hay tres cartas
        case 3:
            switch (true) {
                // Las tres cartas son del mismo palo
                case mismoPalo(cartas[0], cartas[1]) && mismoPalo(cartas[1], cartas[2]):
                    return cartas
                        .sort((a, b) => parseInt(b.valor_envido) - parseInt(a.valor_envido))
                        .slice(0, 2)
                        .reduce((a, b) => a + parseInt(b.valor_envido), 20);
                // Dos cartas son del mismo palo
                case mismoPalo(cartas[0], cartas[1]):
                    return 20 + parseInt(cartas[0].valor_envido) + parseInt(cartas[1].valor_envido);
                case mismoPalo(cartas[1], cartas[2]):
                    return 20 + parseInt(cartas[1].valor_envido) + parseInt(cartas[2].valor_envido);
                case mismoPalo(cartas[0], cartas[2]):
                    return 20 + parseInt(cartas[0].valor_envido) + parseInt(cartas[2].valor_envido);
                default:
                    return Math.max(
                        parseInt(cartas[0].valor_envido),
                        parseInt(cartas[1].valor_envido),
                        parseInt(cartas[2].valor_envido)
                    );
            }
    }
}

function mismoPalo(a, b) {
    return a.suit === b.suit;
}
