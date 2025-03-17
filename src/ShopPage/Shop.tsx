import ItemCard from "./ItemCard";
import Heading from "./Heading";
import { useState, useEffect } from "react";

export default function Shop() {
	const [catalog, setCatalog] = useState<Item[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const [totalQuantity, setTotalQuantity] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("https://fakestoreapi.com/products");

				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}

				const data = await response.json();
				setCatalog(data);
			} catch (e) {
				setError(e instanceof Error ? e.message : "Something went wrong.");
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	const onClick = (quantity: number) => {
		setTotalQuantity((prev) => prev + quantity);
	};

	if (error) return <p className="text-red-500">Error: {error}</p>;

	if (loading) {
		return (
			<>
				<Heading totalItems={0} />
				<h2 className="text-2xl font-bold text-center mt-12">Loading Catalog...</h2>;
			</>
		);
	}

	return (
		<>
			<Heading totalItems={totalQuantity} />
			<div className="bg-gray-700 flex flex-wrap gap-12 px-36 py-24 justify-center">
				{catalog.map((item) => {
					const { title, price, description, category, image, rating } = item;
					return <ItemCard onClick={onClick} title={title} price={price} description={description} category={category} image={image} rating={rating} />;
				})}
			</div>
		</>
	);
}

interface Item {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	rating: {
		rate: number;
		count: number;
	};
}
