import React from "react";
import Card from "./Cards/Card";
import { Button } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

export default function Input({ changeCard, cards, calculate, setEnvido }) {
    const handleReset = () => {
        calculate();
        setEnvido(0);
        changeCard(null, 0);
        changeCard(null, 1);
        changeCard(null, 2);
    };

    return (
        <div className="h-full flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center justify-center">
                <p className="text-lg text-gray-400">Seleccioná tus cartas</p>
            </div>
            <div className="flex gap-2 mx-3">
                {cards.map((card, index) => (
                    <Card key={index} card={card} changeCard={changeCard} selfIndex={index} cardsPicked={cards} />
                ))}
            </div>
            <div className="flex gap-4 mb-4">
                <Button size="lg" variant="bordered" isIconOnly onClick={handleReset}>
                    <FontAwesomeIcon icon={faArrowsRotate} />
                </Button>
                <Button
                    size="lg"
                    variant="bordered"
                    onClick={calculate}
                    className="dark:border-[#3f2c20] dark:text-[#f5e4b8] dark:hover:bg-[#3f2c20] dark:hover:text-[#f5e4b8]"
                >
                    Calcular envido
                </Button>
            </div>
        </div>
    );
}
