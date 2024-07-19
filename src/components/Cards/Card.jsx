import React from "react";
import CardPicker from "./CardPicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faTrash, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { useDisclosure } from "@nextui-org/react";

export default function Card({ card, changeCard, selfIndex, cardsPicked }) {
    const colors = {
        basto: "#99B83C",
        copa: "#DA4126",
        espada: "#1974B6",
        oro: "#EACB19",
    };

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const handleClick = () => {
        onOpen();
    };

    // Una carta tiene 425px de ancho por 600px de alto
    const responsiveClasses = "lg:w-32 lg:h-44 md:w-28 md:h-40 w-24 h-36";

    return (
        <>
            <div className="flex items-center justify-center overflow-hidden cursor-pointer" onClick={handleClick}>
                {card ? (
                    <div
                        className={"border-4 rounded-lg relative " + responsiveClasses}
                        style={{ borderColor: colors[card?.suit] }}
                    >
                        <div className="relative group h-full w-full">
                            <img src={card?.img} alt={card?.name} className="w-full h-full object-contain rounded-sm" />
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex-col items-center justify-center hidden group-hover:flex">
                                <FontAwesomeIcon icon={faArrowsRotate} className="text-5xl text-white" />
                                <span className="text-white ml-2">Cambiar carta</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div
                        className={
                            "border-4 border-gray-500 rounded-lg flex items-center justify-center text-gray-500 relative " +
                            responsiveClasses
                        }
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex-col items-center justify-center flex">
                            <FontAwesomeIcon icon={faCirclePlus} className="text-5xl text-white" />
                            <span className="text-white ml-2">Agregar carta</span>
                        </div>
                    </div>
                )}
            </div>

            <CardPicker
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                changeCard={changeCard}
                index={selfIndex}
                cardsPicked={cardsPicked}
            />
        </>
    );
}
