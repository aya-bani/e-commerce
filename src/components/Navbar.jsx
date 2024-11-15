import { useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { VscHeart } from "react-icons/vsc";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage menu open/close

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#D9D9D9] flex justify-between items-center p-4 shadow-md relative">
            <div className="flex items-center">
                <img src="src/assets/images/logo e-commerce.png" alt="Hexashop Logo" className="h-10 w-auto mr-2" />
                <div>
                    <h1 className="text-2xl font-bold">HEXASHOP</h1>
                    <p className="font-medium">shopping online</p>
                </div>
            </div>

            {/* Hamburger Icon - Only visible on md and below */}
            <div className="md:hidden">
                <button onClick={toggleMenu}>
                    {isOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
                </button>
            </div>

            {/* Navigation Links */}
            <ul className={`md:flex space-x-6 font-medium transition-all duration-300 ease-in-out ${isOpen ? 'flex flex-col' : 'hidden'} absolute md:relative bg-[#D9D9D9] md:bg-transparent p-4 md:p-0 mt-2 md:mt-0 z-10`}>
                <li className="hover:text-[#686761] transition-colors cursor-pointer">
                    <a href="/welcome">Home</a>
                </li>
                <li className="hover:text-[#686761] transition-colors cursor-pointer">
                    <a href="/mensection">Men</a>
                </li>
                <li className="hover:text-[#686761] transition-colors cursor-pointer">
                    <a href="/womensection">Women</a>
                </li>
                <li className="hover:text-[#686761] transition-colors cursor-pointer">
                    <a href="/kidsection">Kids</a>
                </li>
                <li className="hover:text-[#686761] transition-colors cursor-pointer">
                    <a href="/aboutus">About Us</a>
                </li>
                <li className="hover:text-[#686761] transition-colors cursor-pointer">
                    <a href="/contact">Contact Us</a>
                </li>
                <li className="hover:text-[#686761] transition-colors cursor-pointer">
                    <a href="/favorite" className="flex items-center">
                    <VscHeart style={{ fontSize: "24px", color: "black" }} />
                    Favorite</a>
                </li>
                <li className="flex hover:text-[#686761] transition-colors cursor-pointer">
                    <a href="/shoppingcart" className="flex items-center">
                        <GiShoppingCart className="text-black" size={26} /> Shopping Basket
                    </a>
                </li>
              
            </ul>
        </nav>
    );
};

export default Navbar;
