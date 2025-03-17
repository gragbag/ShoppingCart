import ItemCard from "./ItemCard";
import { useState, useEffect } from "react";

export default function ItemList() {
	const [catalog, setCatalog] = useState<Item[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

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

	if (error) return <p className="text-red-500">Error: {error}</p>;

	if (loading) {
		return <h2 className="text-2xl text-bold">Loading Catalog...</h2>;
	}

	console.log(catalog);

	return (
		<div className="bg-gray-700 flex flex-wrap gap-24 px-36 py-24">
			{catalog.map((item) => {
				const { title, price, description, category, image, rating } = item;
				return <ItemCard title={title} price={price} description={description} category={category} image={image} rating={rating} />;
			})}
		</div>
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
