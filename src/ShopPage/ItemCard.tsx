import React, { useState } from "react";

export default function ItemCard({ title, price, description, category, image, rating, onClick }: ItemCardProps) {
	const [quantity, setQuantity] = useState(1);

	const incrementInput = () => {
		setQuantity((prevQuantity) => (prevQuantity < 100 ? prevQuantity + 1 : 100));
	};

	const decrementInput = () => {
		setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const input: number = parseInt(e.target.value);
		console.log(String(input));

		if (isNaN(input) || input < 1) {
			setQuantity(1);
		} else if (input > 100) {
			setQuantity(100);
		} else {
			setQuantity(input);
		}
	};

	return (
		<div className="flex flex-col max-w-sm w-full rounded-2xl items-center justify-center bg-white shadow-md p-4 gap-4">
			{/* Product Title */}
			<h1 className="text-2xl font-bold text-center">{title}</h1>

			{/* Category */}
			<p className="text-sm text-gray-500 italic -mt-4">({category})</p>

			{/* Product Image */}
			<img src={image} alt="product" className="w-full h-48 object-contain rounded-lg" />

			{/* Description (Truncated) */}
			<p className="text-gray-700 text-sm text-center line-clamp-2">{description}</p>

			{/* Rating */}
			<div className="flex items-center gap-1">
				<span className="text-yellow-500">⭐</span>
				<span className="text-gray-800 font-semibold">{rating.rate.toFixed(1)}</span>
				<span className="text-gray-800 font-semibold">({rating.count})</span>
			</div>

			{/* Spacer to push price/input/add to the bottom */}
			<div className="flex-grow" />

			{/* Price */}
			<p className="text-center text-bold text-xl">${price}</p>

			{/* Amount Input with + / - buttons */}
			<div className="w-full flex flex-col items-center">
				<input type="number" className="w-full bg-gray-200 rounded-xl py-2 text-center outline-none focus:ring-2 focus:ring-gray-400 text-xl text-bold remove-arrow" value={quantity} onChange={handleInputChange} />

				{/* + / - buttons */}
				<div className="flex gap-6 mt-2">
					<button className="bg-red-300 px-2 hover:bg-red-400 hover:cursor-pointer" onClick={decrementInput}>
						-
					</button>
					<button className="bg-green-300 px-2 hover:bg-green-400 hover:cursor-pointer" onClick={incrementInput}>
						+
					</button>
				</div>
			</div>

			<button onClick={() => onClick(quantity)} className="w-full rounded-2xl bg-green-500 hover:bg-green-600 text-white font-semibold p-3 transition">
				Add To Cart
			</button>
		</div>
	);
}

interface ItemCardProps {
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
	onClick: (quantity: number) => void;
}
