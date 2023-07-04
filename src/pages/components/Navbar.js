import Image from "next/image";
import { useState, useEffect } from "react";

export default function navbar() {
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
        <div className={`navbar rounded-b-box fixed top-0 left-0 z-20 ${navbarBg} transition-all duration-200`}>
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
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a>Item 1</a>
                        </li>
                        <li>
                            <a>Item 2</a>
                        </li>
                        <li>
                            <a>Item 3</a>
                        </li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    <Image src="/assets/logos/original.svg" width={60} height={60} alt="logo" />
                    <span className={`${navbarBg == 'bg-transparent' ? "text-white" : "text-gray-700"} duration-200 transition-all`} >Rigelec</span>
                </a>
            </div>
            <div className={`navbar-end hidden lg:flex ${navbarBg == 'bg-transparent' ? "text-white" : "text-gray-700"} duration-200 transition-all`}>
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a>Item 1</a>
                    </li>
                    
                    <li>
                        <a>Item 2</a>
                    </li>
                    <li>
                        <a>Item 3</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
