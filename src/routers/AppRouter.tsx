import useRouterElements from "./useRouterModules";

export default function AppRouter() {
	const routerElements = useRouterElements();
	return <>{routerElements}</>;
}
