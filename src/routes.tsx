import Shop from "./ShopPage/Shop";
import Home from "./HomePage/Home";

const routes = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "shop",
		element: <Shop />,
	},
];

export default routes;
