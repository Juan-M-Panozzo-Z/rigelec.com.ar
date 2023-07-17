import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import GrowattData from "./GrowattData";

const links = [
    {
        name: "Home",
        url: "/",
    },
    {
        name: "Tienda",
        url: "https://front-ecommerce-phi.vercel.app/",
    },
    {
        name: "Soporte",
        url: "https://rigelec.freshdesk.com/support/home",
    },
    {
        name: "Rigelec Cloud",
        url: "https://cloud.rigelec.com.ar/",
    },
    {
        name: "B2B",
        url: "https://clientes.rigelec.com.ar/",
    },
    {
        name: "Pro Red",
        url: "http://prored.com.ar/socio_rigelec.html",
    },
];

export default function Navbar() {
    const [navbarBg, setNavbarBg] = useState("bg-transparent");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setNavbarBg("bg-base-100");
            } else {
                setNavbarBg("bg-transparent");
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="flex flex-col w-full fixed top-0 left-0 z-20">
        <Marquee className="bg-gradient-to-r from-primary to-secondary text-white py-1" speed="50">
                <div className="flex-1 px-2">
                    Veniam velit irure aliquip officia reprehenderit do sunt excepteur quis eu dolore exercitation.
                </div>
            </Marquee>
        <div
            className={`navbar md:px-20 rounded-b-box  ${navbarBg} transition-all duration-200`}
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-md dropdown-content mt-4 z-[1] p-2 shadow bg-base-100 rounded-box w-56"
                    >
                        {links.map((link) => (
                            <li key={link.name}>
                                <Link href={link.url}>{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    <Image
                        src="/assets/logos/original.svg"
                        width={60}
                        height={60}
                        alt="logo"
                    />
                    <span
                        className={`${
                            navbarBg == "bg-transparent"
                                ? "text-white"
                                : "text-gray-700"
                        } hidden md:block duration-200 transition-all`}
                    >
                        Rigelec
                    </span>
                </a>
            </div>
            
            <div
                className={`navbar-center hidden lg:flex ${
                    navbarBg == "bg-transparent"
                        ? "text-white"
                        : "text-gray-700"
                } duration-200 transition-all`}
            >
                <ul className="menu menu-horizontal px-1 space-x-2">
                    {links.map((link) => (
                        <button
                            className={`btn btn-xs rounded-full ${
                                navbarBg == "bg-transparent"
                                    ? "btn-primary"
                                    : "btn-ghost"
                            }`}
                            key={link.name}
                        >
                            <Link href={link.url}>{link.name}</Link>
                        </button>
                    ))}
                </ul>
            </div>
            <div className="navbar-end">
            <GrowattData />
            </div>
        </div>
        </div>
    );
}
