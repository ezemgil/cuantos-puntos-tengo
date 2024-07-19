const numbers = ["1", "2", "3", "4", "5", "6", "7", "10", "11", "12"];
const importCardImages = async () => {
    const context = import.meta.glob("../assets/img/cards_separate/*.(png|jpe?g|svg|jpg)");
    const keys = Object.keys(context);
    const values = await Promise.all(keys.map((key) => context[key]()));
    return keys.reduce((acc, key, index) => {
        acc[key.replace("../assets/img/cards_separate/", "")] = values[index].default;
        return acc;
    }, {});
};

const cardImages = await importCardImages();

const suits = [{ suit: "basto" }, { suit: "copa" }, { suit: "espada" }, { suit: "oro" }];

const cards = suits.flatMap((suit) =>
    numbers.map((numero) => ({
        id: `${numero}${suit.suit.charAt(0).toLocaleLowerCase()}`,
        suit: suit.suit,
        numero,
        img: cardImages[`${numero}${suit.suit.charAt(0).toLocaleLowerCase()}.jpg`],
        name: `${numero} de ${suit.suit}`,
        valor_envido: numero > 7 ? 0 : parseInt(numero),
    }))
);

export function getSuits() {
    return suits;
}

export function getCardsBySuit(suit) {
    return cards.filter((card) => card.suit === suit);
}

export function getCard() {
    return cards[Math.floor(Math.random() * cards.length)];
}
