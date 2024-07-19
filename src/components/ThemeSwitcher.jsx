import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { Button, Tooltip } from "@nextui-org/react";

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState(null);

    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <Tooltip content={"Cambiar tema"} color="dark" position="bottom">
            <Button
                isIconOnly
                onClick={handleThemeSwitch}
                variant="light"
                radius="full"
                className="border-2 border-[#d8ae7e] dark:border-[#3f2c20]"
            >
                <FontAwesomeIcon icon={faCircleHalfStroke} />
            </Button>
        </Tooltip>
    );
}
