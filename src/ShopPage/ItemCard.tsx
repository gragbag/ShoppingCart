import React, { useState } from "react";

export default function ItemCard() {
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
			<h1 className="text-2xl font-bold">Name</h1>
			<img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="product" className="w-full h-48 object-contain rounded-lg" />

			{/* Amount Input with + / - buttons */}
			<div className="w-full flex flex-col items-center">
				<input type="number" className="w-full bg-gray-200 rounded-xl p-2 text-center outline-none focus:ring-2 focus:ring-gray-400 text-xl text-bold" value={quantity} onChange={handleInputChange} />

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

			<button className="w-full rounded-2xl bg-green-500 hover:bg-green-600 text-white font-semibold p-3 transition">Add To Cart</button>
		</div>
	);
}
