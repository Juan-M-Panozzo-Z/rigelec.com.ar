import { useSession } from "next-auth/react";
import Link from "next/link";
import { GoPerson, GoMoveToEnd } from "react-icons/go";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Avatar = () => {
    const router = useRouter();

    const handleSignOut = () => {
        signOut()
            .then(() => {
                router.push("/");
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const { data: session } = useSession();
    return (
        <details className="dropdown dropdown-bottom dropdown-end">
            <summary className="btn btn-sm text-[10px] md:text-xs capitalize rounded-full btn-info shadow-xl text-white">
                {session?.user?.name}
            </summary>
            <ul
                tabIndex={0}
                className="mt-1 p-2 space-y-2 shadow-lg menu dropdown-content z-[1] bg-base-100 rounded-box w-36 "
            >
                <li>
                    <Link
                        href={"/profile"}
                        className="flex gap-1 justify-end items-center"
                    >
                        <GoPerson />
                        <span className="text-[10px] md:text-xs">
                            Mi perfil
                        </span>
                    </Link>
                </li>
                <li>
                    <button
                        className="flex gap-1 justify-end items-center bg-error text-white"
                        onClick={handleSignOut}
                    >
                        <GoMoveToEnd />
                        <span className="text-[10px] md:text-xs">
                            Cerrar sesión
                        </span>
                    </button>
                </li>
            </ul>
        </details>
    );
};

export default Avatar;
