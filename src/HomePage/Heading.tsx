import { ShoppingCart, Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function Heading() {
	return (
		<header className="bg-white shadow-md w-full">
			<div className="container mx-auto px-6 py-4 flex justify-between items-center">
				{/* Logo */}
				<h1 className="text-2xl font-bold text-gray-900">MyShop</h1>

				{/* Nav Links */}
				<nav className="hidden md:flex space-x-6">
					<Link to="#" className="text-gray-700 hover:text-gray-900 hover:underline">
						Home
					</Link>
					<Link to="shop" className="text-gray-700 hover:text-gray-900 hover:underline">
						Shop
					</Link>
					<Link to="#" className="text-gray-700 hover:text-gray-900 hover:underline">
						About
					</Link>
					<Link to="#" className="text-gray-700 hover:text-gray-900 hover:underline">
						Contact
					</Link>
				</nav>

				{/* Search and Cart icons */}
				<div className="flex space-x-4">
					<Link to="#" className="p-2 rounded-full hover:bg-gray-200 transition">
						<Search className="w-6 h-6 text-gray-700" />
					</Link>
					<Link to="/shop" className="p-2 rounded-full hover:bg-gray-200 transition">
						<ShoppingCart className="w-6 h-6 text-gray-700" />
					</Link>
				</div>
			</div>
		</header>
	);
}
