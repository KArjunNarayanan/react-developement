import { Menu, User } from "lucide-react";
import react from "../assets/react.svg";

const Navbar = () => {
    return (
        <>
        <nav className="bg-slate-300 h-16 px-5 flex items-center justify-between">
            <div className="flex gap-3 items-center">
                <Menu className="font-bold size-8"/>
                <img src={react} alt="" width={30}/>
                <h3 className="text-blue-500 font-bold text-2xl">React</h3>
            </div>
            <div className="grid">
                <h1 className="font-semibold text-sm">Student</h1>
                <User size={25}/>
            </div>        
        </nav>
        </>
    )
}
export default Navbar;