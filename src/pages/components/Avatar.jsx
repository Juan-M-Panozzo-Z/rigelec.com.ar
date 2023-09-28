import { GoPerson, GoMoveToEnd } from "react-icons/go";
import { signOut } from "next-auth/react";

const Avatar = () => {
    return (
        <details className="dropdown dropdown-bottom dropdown-end">
            <summary className="btn btn-sm rounded-full btn-info text-white">
                Mi perfil
            </summary>
            <ul
                tabIndex={0}
                className="mt-1 p-2 space-y-2 shadow menu  dropdown-content z-[1] bg-base-100 rounded-box md:w-36"
            >
            <li>
                <button className="flex gap-1 justify-end items-center">
                    <GoPerson className="" />
                    <span className="hidden md:inline text-[10px]">
                        Mi perfil
                    </span>
                </button>
            </li>
                <li>
                    <button className="flex gap-1 justify-end items-center bg-error text-white" onClick={() => signOut()}>
                        <GoMoveToEnd className="" />
                        <span className="hidden md:inline text-[10px]">
                        Cerrar sesión
                        </span>
                    </button>
                </li>
            </ul>
        </details>
    );
};

export default Avatar;
