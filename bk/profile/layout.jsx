import { getServerSession } from "next-auth";
import NoSession from "@/components/NoSession";
import { FaChevronRight, FaUser, FaTools, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

const ProfileLayout = async ({ children }) => {
  const session = await getServerSession();

  return (
    <NoSession session={session}>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className="fixed left-1 inset-y-1/2 drawer-overlay btn btn-ghost text-primary wiggle-animation z-10"
          >
            <FaChevronRight />
          </label>
          <section className="mt-24 p-4 md:p-0">{children}</section>
        </div>
        <div className="drawer-side z-10">
          <label htmlFor="my-drawer" className="drawer-overlay" />
          <ul className="menu pt-28 p-4 w-56 min-h-full bg-white rounded-r-xl backdrop-filter backdrop-blur-xl text-left">
            <li>
              <Link href="/profile">
                <FaUser />
                <span className="ml-1">Tu perfil</span>
              </Link>
            </li>
            <li>
              <Link href="/profile/projects">
                <FaTools />
                <span className="ml-1">Tus proyectos</span>
              </Link>
            </li>
            <li>
              <Link href="/profile/contacts">
                <FaPhoneAlt />
                <span className="ml-1">Metodos de contacto</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </NoSession>
  );
};

export default ProfileLayout;
