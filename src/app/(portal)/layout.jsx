import fs from "fs";
import Link from "next/link";
import Logout from "./dashboard/components/Logout";

export default function Layout({ children }) {
    const dashboardLinks = fs.readdirSync("src/app/(portal)/dashboard/").filter((dir) => {
        return fs.statSync(`src/app/(portal)/dashboard/${dir}`).isDirectory() && dir !== "components";
    });


    return (
        <main className="container mx-auto">
            <div className="fixed top-24 left-0 w-full">
                <div className="carousel space-x-2 px-4 py-2">
                    <Link href="/dashboard">
                        <span>
                            <button className="btn btn-xs btn-secondary">
                                dashboard
                            </button>
                        </span>
                    </Link>
                    {
                        dashboardLinks.map((link, i) => (
                            <Link href={`/dashboard/${link}`} key={i}>
                                <span>
                                    <button className="btn btn-xs btn-secondary">
                                        {link}
                                    </button>
                                </span>
                            </Link>
                        ))
                    }
                </div>
            </div>
            <div className="pt-36 px-6">
                {children}
                <Logout />
            </div>
        </main>
    )
}