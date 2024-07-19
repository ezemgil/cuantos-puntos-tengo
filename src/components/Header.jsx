import React, { useEffect, useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";

import AceOfClubs from "../assets/img/icons/ace-of-clubs.svg";
import AceOfCups from "../assets/img/icons/ace-of-cups.svg";
import AceOfGold from "../assets/img/icons/ace-of-gold.svg";
import AceOfSwords from "../assets/img/icons/ace-of-swords.svg";

export default function Header() {
    const icons = [AceOfClubs, AceOfCups, AceOfGold, AceOfSwords];
    const [icon, setIcon] = useState(icons[Math.floor(Math.random() * icons.length)]);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setIcon(icons[Math.floor(Math.random() * icons.length)]);
                setIsTransitioning(false);
            }, 500);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const transitionClasses = "transition duration-500 ease-in-out transform";
    const rotateClasses = "hover:rotate-12";
    const animationClasses = isTransitioning ? "opacity-0 scale-75" : "opacity-100 scale-100";

    return (
        <header className="flex justify-between items-center p-4 fixed w-full z-10">
            <div className="flex items-center">
                <img
                    src={icon}
                    alt="Icono de envido"
                    className={`${transitionClasses} ${rotateClasses} ${animationClasses} dark:invert lg:w-12 lg:h-12 md:w-10 md:h-10 w-8 h-8 mr-2`}
                />
                <div className="flex flex-col">
                    <h1 className="lg:text-2xl md:text-lg text-base font-bold">¿Cuántos puntos tengo?</h1>
                    <p className="lg:text-sm md:text-xs text-xs text-gray-500">Calculadora de envido</p>
                </div>
            </div>
            <ThemeSwitcher />
        </header>
    );
}
