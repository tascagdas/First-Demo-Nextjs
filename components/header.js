import Link from "next/link";
import Navigation from "./navigation";
import DarkMode from "./dark-mode";

export default function Header() {
    return (
        <header className="flex justify-between md:items-center">
            <div className="flex items-center md:space-x-12">
                <div className="hidden md:block">
                    <Link className="text-xl" href="/">tascagdas</Link>
                </div>
                <Navigation />
            </div>
            <div>
                <DarkMode/>
            </div>
        </header>
    )
}
