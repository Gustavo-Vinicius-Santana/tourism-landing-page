"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <>
            <header className="bg-contentBackGroundBlue w-full flex items-center justify-between px-6 py-4">
                {/* Título (Esquerda) */}
                <Link href="/">
                    <h1 className="text-white font-extrabold text-3xl tracking-wide cursor-pointer">
                        Site Turismo
                    </h1>
                </Link>

                {/* Menu Desktop (Direita) */}
                <nav className="hidden md:flex items-center">
                    <ul className="flex gap-8 text-lg font-semibold">
                        {[
                            { href: "/", label: "Home" },
                            { href: "/pacotes", label: "Pacotes" },
                            { href: "/sobre", label: "Sobre" },
                            { href: "/contato", label: "Contatos" },
                        ].map((item) => (
                            <li key={item.href} className="relative group">
                                <Link
                                    href={item.href}
                                    className="text-white block pb-1 transition-colors duration-300 hover:text-textYellow-500"
                                >
                                    {item.label}
                                    <span className="absolute left-0 bottom-[-3px] w-0 h-1 bg-textYellow-500 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Botão do Menu Mobile */}
                <button
                    className="md:hidden text-white text-3xl focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <FiX className="w-8 h-8" /> : <FiMenu className="w-8 h-8" />}
                </button>
            </header>

            {/* Menu Mobile - Dropdown Animado */}
            <div
                className={`absolute top-[64px] left-0 w-full bg-contentBackGroundBlue  p-4 md:hidden flex flex-col items-center gap-4 z-20 transition-all duration-300 overflow-hidden ${
                    isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <ul className="flex flex-col gap-4">
                    {[
                        { href: "/", label: "Home" },
                        { href: "/pacotes", label: "Pacotes" },
                        { href: "/sobre", label: "Sobre" },
                        { href: "/contato", label: "Contatos" },
                    ].map((item) => (
                        <li key={item.href} className="text-xl">
                            <Link
                                href={item.href}
                                className="text-white block pb-1 relative transition-colors duration-300 hover:text-textYellow-500"
                                onClick={() => setIsMenuOpen(false)} // Fecha o menu ao clicar
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}