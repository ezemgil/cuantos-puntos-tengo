import React from "react";
import Card from "./Cards/Card";
import { Button, Tooltip } from "@nextui-org/react";
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
                <p className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">Seleccioná tus cartas</p>
            </div>
            <div className="flex gap-2 mx-3">
                {cards.map((card, index) => (
                    <Card key={index} card={card} changeCard={changeCard} selfIndex={index} cardsPicked={cards} />
                ))}
            </div>
            <div className="flex gap-4 mb-4">
                <Tooltip content="Reiniciar" placement="bottom" color="default">
                    <Button
                        size="lg"
                        variant="light"
                        isIconOnly
                        className="border-2 border-[#271910] dark:border-[#f8c794] hover:bg-white dark:hover:bg-[#d8ae7e] dark:hover:bg-opacity-10"
                        onClick={handleReset}
                    >
                        <FontAwesomeIcon icon={faArrowsRotate} />
                    </Button>
                </Tooltip>
                <Button
                    size="lg"
                    variant="bordered"
                    onClick={calculate}
                    className="border-2 border-[#3f2c20] dark:border-[#d8ae7e] font-semibold"
                >
                    Calcular envido
                </Button>
            </div>
        </div>
    );
}
