import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Tooltip } from "@nextui-org/react";

import * as cardService from "../../services/card.service";

// Suits icons
import clubsSuit from "../../assets/img/suits/clubs-suit.svg";
import cupsSuit from "../../assets/img/suits/cups-suit.svg";
import swordsSuit from "../../assets/img/suits/swords-suit.svg";
import goldsSuit from "../../assets/img/suits/golds-suit.svg";

export default function CardPicker({ isOpen, onOpenChange, changeCard, index, cardsPicked, handleKeyDown }) {
    const suits = [
        {
            suit: "basto",
            img: clubsSuit,
            color: "#99B83C",
            colorNextui: "warning",
        },
        {
            suit: "copa",
            img: cupsSuit,
            color: "#DA4126",
            colorNextui: "danger",
        },
        {
            suit: "espada",
            img: swordsSuit,
            color: "#1974B6",
            colorNextui: "primary",
        },
        {
            suit: "oro",
            img: goldsSuit,
            color: "#EACB19",
            colorNextui: "success",
        },
    ];

    const [selectedSuit, setSelectedSuit] = useState("");
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

    const transformText = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    };

    const isPicked = (card) => {
        return cardsPicked.includes(card);
    };

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader>
                            <div className="flex flex-col w-full">
                                <span className="text-lg font-semibold text-center dark:text-white text-black-500">
                                    Seleccioná una carta
                                </span>
                                <div className="flex flex-row justify-center gap-2 mt-1">
                                    {suits.map((suit) => (
                                        <Tooltip
                                            content={transformText(suit.suit)}
                                            key={suit.suit}
                                            color={suit.colorNextui}
                                            placement="bottom"
                                        >
                                            <Button
                                                isIconOnly
                                                variant="bordered"
                                                radius="full"
                                                style={{ borderColor: suit.color }}
                                                onClick={() => setSelectedSuit(suit.suit)}
                                                tabIndex={0}
                                                onKeyDown={(e) => handleKeyDown(e, () => setSelectedSuit(suit.suit))}
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
                                        </Tooltip>
                                    ))}
                                </div>
                            </div>
                        </ModalHeader>
                        <ModalBody>
                            <div className="gap-2 grid lg:grid-cols-5 grid-cols-4">
                                {cards.map((card) => {
                                    const isCardPicked = isPicked(card);
                                    return (
                                        <Tooltip
                                            key={card.id}
                                            content={card.name}
                                            color={suits.find((suit) => suit.suit === card.suit).colorNextui}
                                            placement="bottom"
                                            offset={-15}
                                            style={{ display: isCardPicked ? "none" : "block" }}
                                        >
                                            <picture
                                                className="relative"
                                                tabIndex={0}
                                                onKeyDown={(e) => handleKeyDown(e, () => handleClick(card))}
                                                onClick={() => handleClick(card)}
                                            >
                                                <img
                                                    src={card.img}
                                                    alt={card.name}
                                                    className={
                                                        "rounded-lg cursor-pointer h-auto w-full " +
                                                        (isCardPicked ? "opacity-50" : "")
                                                    }
                                                    style={{
                                                        border:
                                                            "2px solid " +
                                                            suits.find((suit) => suit.suit === card.suit).color,
                                                    }}
                                                />
                                                {isCardPicked && (
                                                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg flex items-center justify-center cursor-not-allowed">
                                                        <span className="text-white font-semibold lg:text-md md:text-sm text-xs">
                                                            Seleccionada
                                                        </span>
                                                    </div>
                                                )}
                                            </picture>
                                        </Tooltip>
                                    );
                                })}
                            </div>
                        </ModalBody>
                        <ModalFooter />
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
