import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";

import * as cardService from "../../services/card.service";

// Suits icons
import clubsSuit from "../../assets/img/suits/clubs-suit.svg";
import cupsSuit from "../../assets/img/suits/cups-suit.svg";
import swordsSuit from "../../assets/img/suits/swords-suit.svg";
import goldsSuit from "../../assets/img/suits/golds-suit.svg";

export default function CardPicker({ isOpen, onOpenChange, changeCard, index, cardsPicked }) {
    const suits = [
        {
            suit: "basto",
            img: clubsSuit,
            color: "#99B83C",
        },
        {
            suit: "copa",
            img: cupsSuit,
            color: "#DA4126",
        },
        {
            suit: "espada",
            img: swordsSuit,
            color: "#1974B6",
        },
        {
            suit: "oro",
            img: goldsSuit,
            color: "#EACB19",
        },
    ];

    const [selectedSuit, setSelectedSuit] = useState("basto");
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchedCards = cardService.getCardsBySuit(selectedSuit);
        setCards(fetchedCards);
    }, [selectedSuit]);

    const handleClick = (card) => {
        if (cardsPicked.includes(card)) return;
        changeCard(card, index);
        onOpenChange();
    };
    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg">
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader>
                            <div className="flex flex-col w-full">
                                <span className="text-lg font-thin text-center dark:text-white text-black-500">
                                    Seleccioná una carta
                                </span>
                                <div className="flex flex-row justify-center gap-2 mt-1">
                                    {suits.map((suit) => (
                                        <Button
                                            isIconOnly
                                            variant="bordered"
                                            radius="full"
                                            style={{ borderColor: suit.color }}
                                            onClick={() => setSelectedSuit(suit.suit)}
                                            key={suit.suit}
                                        >
                                            <img
                                                src={suit.img}
                                                alt={suit.suit}
                                                className="rounded-full p-1 cursor-pointer lg:size-12 size-10"
                                                style={{
                                                    filter: selectedSuit === suit.suit ? "brightness(1.5)" : "none",
                                                    backgroundColor:
                                                        selectedSuit === suit.suit ? suit.color : suit.color + "50",
                                                }}
                                            />
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </ModalHeader>
                        <ModalBody>
                            <div className="grid lg:grid-cols-5 grid-cols-4 gap-2">
                                {cards.map((card) => (
                                    <img
                                        key={card.name}
                                        src={card.img}
                                        alt={card.name}
                                        className={
                                            "rounded-lg cursor-pointer h-auto w-full " +
                                            (cardsPicked.includes(card) && "opacity-50")
                                        }
                                        style={{
                                            border: "2px solid " + suits.find((suit) => suit.suit === card.suit).color,
                                        }}
                                        onClick={() => handleClick(card)}
                                    />
                                ))}
                            </div>
                        </ModalBody>
                        <ModalFooter />
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
