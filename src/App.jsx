import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Input from "./components/Input";
import Output from "./components/Output";

import { Spinner } from "@nextui-org/react";

// services
import { calculateEnvido } from "./services/envido.service";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [envido, setEnvido] = useState(0);
    const [lastEnvido, setLastEnvido] = useState(0);
    const [cards, setCards] = useState([null, null, null]);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    const calculate = () => {
        setLastEnvido(envido);
        setEnvido(calculateEnvido(cards));
    };

    const changeCard = (card, index) => {
        setCards((prev) => {
            const newCards = [...prev];
            newCards[index] = card;
            return newCards;
        });
    };

    return (
        <div className="dark:dark-mesh-gradient light-mesh-gradient">
            <div
                className={`transition-opacity duration-1000 fixed inset-0 flex items-center justify-center bg-white/50 dark:bg-black/50
                     ${isLoading ? "fade-enter fade-enter-active" : "fade-exit fade-exit-active"}`}
                style={{ display: isLoading ? "flex" : "none" }}
            >
                <Spinner color="success" size="large" label="Cargando..." />
            </div>
            <section
                className={`text-zinc-800 dark:text-zinc-100 max-h-screen min-h-screen flex flex-col justify-between transition-opacity duration-1000 ${
                    isLoading ? "fade-exit fade-exit-active" : "fade-enter fade-enter-active"
                }`}
            >
                <Header />
                <main className="grid grid-cols-1 grid-rows-5 lg:grid-cols-4 lg:grid-rows-1 h-full">
                    <section className="lg:col-span-3 lg:row-span-1 col-span-1 row-span-3">
                        <Input changeCard={changeCard} cards={cards} calculate={calculate} setEnvido={setEnvido} />
                    </section>
                    <section className="lg:col-span-1 lg:row-span-1 row-span-2 col-span-1">
                        <Output envido={envido} lastEnvido={lastEnvido} />
                    </section>
                </main>
                <Footer />
            </section>
        </div>
    );
}

export default App;
