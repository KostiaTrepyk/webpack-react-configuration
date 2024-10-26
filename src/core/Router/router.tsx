import { createBrowserRouter } from "react-router-dom";
import Layout from "@/components/layouts/Layout";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";

import { paths } from "./types";

const appRouter = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{ path: paths.HomePage, element: <HomePage /> },
			{ path: "*", element: <NotFoundPage /> },
		],
	},
]);

export default appRouter;
