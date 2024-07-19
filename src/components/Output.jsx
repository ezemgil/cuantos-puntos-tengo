import React, { useEffect, useState } from "react";

export default function Output({ envido, lastEnvido }) {
    const [currentEnvido, setCurrentEnvido] = useState(lastEnvido);

    useEffect(() => {
        const duration = 250;
        const start = Date.now();
        const increment = envido - lastEnvido;

        const animateNumbers = () => {
            const elapsed = Date.now() - start;
            if (elapsed >= duration) {
                setCurrentEnvido(envido);
            } else {
                const progress = Math.log(elapsed / duration + 1) / Math.log(2);
                setCurrentEnvido(Math.floor(lastEnvido + increment * progress));
                requestAnimationFrame(animateNumbers);
            }
        };

        animateNumbers();

        // Cleanup
        return () => {
            setCurrentEnvido(envido);
        };
    }, [envido, lastEnvido]);

    return (
        <div className="h-full flex flex-col items-center justify-center gap-4 backdrop-blur-md bg-white/30 dark:bg-black/30 p-8 lg:rounded-l-3xl">
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold lg:text-3xl md:text-2xl text-xl text-gray-400">Resultado</h1>
                <p className="text-gray-500 lg:text-lg md:text-base text-sm">Tus puntos son:</p>
            </div>
            <div className="flex gap-4">
                <p className="font-bold font-montserrat xl:text-9xl lg:text-8xl md:text-7xl text-6xl text-gray-800 dark:text-white lg:-mt-8 md:-mt-6 -mt-4">
                    {currentEnvido}
                </p>
            </div>
        </div>
    );
}
