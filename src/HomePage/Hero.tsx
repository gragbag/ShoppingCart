export default function Hero() {
	return (
		<section className="relative h-screen flex items-center justify-center text-center bg-cover bg-center mt-12">
			{/* Dark Overlay */}

			{/* Text Content */}
			<div className="relative z-10 text-black px-6">
				<h1 className="text-5xl font-bold mb-4">Welcome to MyShop</h1>
				<p className="text-lg mb-6">Discover amazing products at unbeatable prices.</p>
				<a href="shop" className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
					Shop Now
				</a>
			</div>
		</section>
	);
}
