import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Input from "./components/Input";
import Output from "./components/Output";

// services
import { calculateEnvido } from "./services/envido.service";

function App() {
    const [envido, setEnvido] = useState(0);
    const [lastEnvido, setLastEnvido] = useState(0);
    const [cards, setCards] = useState([null, null, null]);

    const calculate = () => {
        setEnvido(calculateEnvido(cards));
        setLastEnvido(envido);
    };

    const changeCard = (card, index) => {
        setCards((prev) => {
            const newCards = [...prev];
            newCards[index] = card;
            return newCards;
        });
    };

    return (
        <section className="dark:dark-mesh-gradient light-mesh-gradient text-[#333] dark:text-[#f8f8f8] h-screen">
            <Header />
            <main className="grid grid-cols-1 grid-rows-3 lg:grid-cols-4 lg:grid-rows-1 h-full">
                <section className="lg:col-span-3 lg:row-span-1 col-span-1 row-span-2 h-100">
                    <Input changeCard={changeCard} cards={cards} calculate={calculate} />
                </section>
                <section className="lg:col-span-1 lg:row-span-1 row-span-1 col-span-1">
                    <Output envido={envido} lastEnvido={lastEnvido} />
                </section>
            </main>
            <Footer />
        </section>
    );
}

export default App;