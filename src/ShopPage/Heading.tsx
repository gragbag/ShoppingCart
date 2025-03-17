import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Heading({ totalItems }: HeadingProps) {
	return (
		<header className="bg-white shadow-md shadow-green-300 w-full sticky top-0">
			<div className="container mx-auto px-6 py-4 flex justify-between items-center">
				{/* Logo */}
				<Link to="/" className="text-2xl font-bold text-gray-900 hover:underline">
					MyShop
				</Link>

				{/* Checkout Area */}
				<div className="flex gap-6 items-center">
					{/* Shopping Cart Icon with Item Count */}
					<Link to="#" className="relative p-2 rounded-full hover:bg-gray-200 transition">
						<ShoppingCart className="w-6 h-6 text-gray-700" />
						<span className="absolute -bottom-1.5 -right-1.5 bg-red-500 text-white text-xs font-bold px-1 py-0.25 rounded-full select-none">{totalItems > 100 ? "99+" : totalItems}</span>
					</Link>

					<Link to="#" className="text-gray-700 hover:text-gray-900 hover:underline">
						Checkout
					</Link>
				</div>
			</div>
		</header>
	);
}

interface HeadingProps {
	totalItems: number;
}
