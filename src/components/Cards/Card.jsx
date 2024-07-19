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
    const responsiveClasses = `
    w-[96.25px] h-[128.33px]
        xs:w-[96.25px] xs:h-[128.33px]
        sm:w-[168.75px] sm:h-[225px]
        md:w-[191.67px] md:h-[266.67px]
        lg:w-[212.5px] lg:h-[300px]
        xl:w-[283.33px] xl:h-[400px]
        `;

    return (
        <>
            <div className="flex items-center justify-center cursor-pointer" onClick={handleClick}>
                {card ? (
                    <div className={"relative " + responsiveClasses}>
                        <div className="relative group h-full w-full">
                            <img
                                src={card?.img}
                                alt={card?.name}
                                className="w-full h-full object-fill rounded-lg lg:border-4 border-2"
                                style={{ borderColor: colors[card?.suit] }}
                            />
                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex-col items-center justify-center hidden group-hover:flex">
                                <FontAwesomeIcon
                                    icon={faArrowsRotate}
                                    className="lg:text-5xl md:text-3xl text-2xl text-white"
                                />
                                <span className="text-white mx-2 leading-4 text-center lg:text-lg md:text-base text-sm">
                                    Cambiar carta
                                </span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div
                        className={
                            "lg:border-4 border-2 border-gray-500 rounded-lg flex items-center justify-center text-gray-500 relative " +
                            responsiveClasses
                        }
                    >
                        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex-col items-center justify-center flex">
                            <FontAwesomeIcon
                                icon={faCirclePlus}
                                className="text-white lg:text-5xl md:text-3xl text-2xl"
                            />
                            <span className="text-white mx-2 leading-4 text-center lg:text-lg md:text-base text-sm">
                                Agregar carta
                            </span>
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
