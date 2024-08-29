import { useRoutes } from "react-router-dom";
import { lazy } from "react";
import ProtectedRoute from "./ProtectedRoute";
export default function useRouterElements() {
	const Dashboard = lazy(() => import("@/views/dashboard"));
	const About = lazy(() => import("@/views/about"));
	const routeElements = useRoutes([
		{
			path: "",
			element: <ProtectedRoute />,
			children: [
				{
					path: "/dashboard",
					element: <Dashboard />
				},
				{
					path: "/about",
					element: <About />
				}
			]
		}
	]);

	return routeElements;
}
