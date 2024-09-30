import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="w-full sticky top-0 z-50 p-4 flex justify-between items-center bg-white shadow-md border-b border-gray-400 my-4 ">
                <Link to='/' className="text-2xl font-bold text-gray-800">SMS</Link>
                <nav className="space-x-8 text-gray-700">
                    <a href="#" className="hover:text-blue-600">About</a>
                    <a href="#" className="hover:text-blue-600">Features</a>
                    <a href="#" className="hover:text-blue-600">How It Works</a>
                </nav>
                <button className="bg-customSky text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Login
                </button>
        </header>
    )
}

export default Header