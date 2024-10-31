import DefaultLayout from "@/layouts/defaultLayout";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
const Dashboard = lazy(() => import("@/views/dashboard"));
const About = lazy(() => import("@/views/about"));
const routeElements = createBrowserRouter([
	{
		path: "/",
		element: <DefaultLayout />,
		children: [
			{
				path: "/dashboard",
				element: <Dashboard />
			},
			{
				path: "/",
				element: <Dashboard />
			},
			{
				path: "/about",
				element: <About />
			}
		]
	}
]);
export default routeElements;
