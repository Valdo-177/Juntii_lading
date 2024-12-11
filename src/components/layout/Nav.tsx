"use client";
import React, { useEffect, useState } from "react";
import { AlignRight, Thermometer } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/assets/svg";


const Nav = () => {
    const [showNav, setShowNav] = useState(true);
    const [scrollY, setScrollY] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const path = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 65); // Cambia el valor según el punto donde deseas cambiar el fondo
            if (currentScrollY > scrollY && currentScrollY > 200) {
                setShowNav(false);
            } else {
                setShowNav(true);
            }
            setScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollY]);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <header
            className={`fixed z-30 top-0 left-0 w-full text-white transition-all duration-500 ${showNav ? "translate-y-0" : "-translate-y-full"
                } ${isScrolled ? "bg-primary backdrop-blur-lg" : "bg-transparent"}`}
        >
            <div className="container flex items-center mx-auto justify-between py-6 px-4 sm:px-0">
                <Link href='/' className="flex items-center gap-1">
                    <Logo />
                </Link>
                <Button onClick={() => scrollToSection('GetApp')} className="text-white flex bg-transparent hover:bg-transparent shadow-none text-lg items-center gap-3 hover:gap-5 w-40 transition-all ease-in-out">
                    Obtener App
                </Button>
            </div>
        </header>
    );
};

export default Nav;
