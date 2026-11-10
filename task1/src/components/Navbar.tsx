const Navbar = () => {
    return (
        <nav className="px-15 py-10 bg-slate-100 h-16 flex items-center justify-between border-b border-gray-300">
            <div className="flex gap-3 items-center">
                <div className=" size-10 flex items-center justify-center p-1 bg-blue-600 rounded-full">
                    <span className="text-white text-sm">SMS</span>
                </div>
                <div className="flex flex-col">
                    <p className="font-bold text-lg">Student Mangement System</p>
                    <p className="text-sm text-gray-500">Manage your student effeintly</p>
                </div>
            </div>
            <div>
                <p className="text-sm text-gray-500">5 students registered.</p>
            </div>
        </nav>
    )
}
export default Navbar;