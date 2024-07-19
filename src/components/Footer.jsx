import React from "react";

export default function Footer() {
    return (
        <footer className="mt-auto fixed w-full h-12 flex items-center justify-center text-sm text-gray-600 dark:text-gray-400">
            <span className="text-gray-500 dark:text-gray-400">
                Hecho con 🧉 por{" "}
                <a
                    href="https://github.com/ezemgil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300"
                >
                    @ezemgil
                </a>
            </span>
        </footer>
    );
}
