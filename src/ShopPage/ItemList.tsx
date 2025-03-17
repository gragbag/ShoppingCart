import ItemCard from "./ItemCard";

export default function ItemList() {
	return (
		<div className="bg-gray-700 flex flex-wrap gap-24 px-36 py-24">
			<ItemCard />
			<ItemCard />
			<ItemCard />
		</div>
	);
}
