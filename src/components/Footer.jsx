import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
    return (
        <footer className="w-full flex items-center justify-center text-xs sm:text-sm text-zinc-800 dark:text-zinc-100 p-4">
            <span>
                Hecho con <FontAwesomeIcon icon={faHeart} /> por{" "}
                <a
                    href="https://github.com/ezemgil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-800 dark:text-zinc-100 hover:underline"
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
                    className="text-zinc-800 dark:text-zinc-100 hover:underline"
                >
                    Código fuente
                </a>
            </span>
        </footer>
    );
}
