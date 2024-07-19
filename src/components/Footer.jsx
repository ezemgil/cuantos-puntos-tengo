import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <footer className="w-full flex items-center justify-center text-xs sm:text-sm text-gray-600 dark:text-gray-400 p-4">
            <span className="text-gray-500 dark:text-gray-400">
                Hecho con <FontAwesomeIcon icon={faHeart} /> por{" "}
                <a
                    href="https://github.com/ezemgil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:underline"
                >
                    @ezemgil
                </a>
            </span>
            <span className="mx-2">•</span>
            <span>
                <FontAwesomeIcon icon={faGithub} className="mr-1" />
                <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:underline"
                >
                    Código fuente
                </a>
            </span>
        </footer>
    );
}
