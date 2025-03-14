export default function Footer() {
	return (
		<footer className="bg-gray-900 text-white py-4 mt-16">
			<div className="container mx-auto text-center">
				<p className="text-lg font-semibold">MyShop &copy; {new Date().getFullYear()}</p>
				<div className="flex justify-center space-x-6 mt-4">
					<a href="#" className="hover:underline">
						Privacy Policy
					</a>
					<a href="#" className="hover:underline">
						Terms of Service
					</a>
					<a href="#" className="hover:underline">
						Contact
					</a>
				</div>
			</div>
		</footer>
	);
}
