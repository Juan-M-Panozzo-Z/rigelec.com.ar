"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Marquee from "react-fast-marquee";
import GrowattData from "./GrowattData";
import { CiMenuBurger } from "react-icons/ci";
import LoginModal from "./LoginModal.jsx";
import Avatar from "./Avatar";

const links = [
    {
        name: "Home",
        url: "/",
    },
    {
        name: "Nosotros",
        url: "/nosotros",
    },
    {
        name: "Distribuidores",
        url: "/distribuidores",
    },
];

const personalLinks = [
    {
        name: "Soporte",
        url: "https://rigelec.freshdesk.com/support/home",
    },
    {
        name: "Rigelec Cloud",
        url: "https://cloud.rigelec.com.ar/",
    },
];

export default function Navbar() {
    const { status } = useSession();
    const [navbarBg, setNavbarBg] = useState("bg-transparent");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setNavbarBg("bg-base-100 shadow-md");
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
            <Marquee className="bg-secondary text-white py-1" speed="50">
                <div className="flex-1 px-2">
                    Las Heras 331, Concordia - Entre Ríos
                </div>
            </Marquee>
            <div
                className={`navbar md:px-20 ${navbarBg} transition-all duration-200`}
            >
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <CiMenuBurger
                                className={`w-6 h-6 ${
                                    navbarBg == "bg-transparent"
                                        ? "text-base-300"
                                        : "text-secondary"
                                }`}
                            />
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
                            <div className="divider">Acceso para personal</div>
                            {personalLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.url}>{link.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Link
                        href={"/"}
                        className="btn btn-ghost normal-case text-xl"
                    >
                        <Image
                            src="/assets/logos/original.svg"
                            width={60}
                            height={60}
                            alt="logo"
                        />
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex duration-200 transition-all">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        {links.map((link) => (
                            <button
                                className={`btn btn-sm rounded-full ${
                                    navbarBg == "bg-transparent"
                                        ? "btn-primary text-white shadow-xl"
                                        : "btn-ghost"
                                }`}
                                key={link.name}
                            >
                                <Link href={link.url}>{link.name}</Link>
                            </button>
                        ))}
                        <div className="dropdown">
                            <button
                                tabIndex={0}
                                className={`btn btn-sm rounded-full ${
                                    navbarBg == "bg-transparent"
                                        ? "btn-primary text-white"
                                        : "btn-ghost"
                                }`}
                            >
                                Acceso para Personal
                            </button>
                            <ul
                                tabIndex={0}
                                className="menu menu-md dropdown-content mt-4 z-[1] p-2 shadow bg-base-100 rounded-box w-56"
                            >
                                {personalLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.url}>{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ul>
                </div>
                <div className="navbar-end space-x-2 min-w-max">
                    <GrowattData />
                    {status === "authenticated" ? <Avatar /> : <LoginModal />}
                </div>
            </div>
        </div>
    );
}
