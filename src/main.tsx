import "@/designs/index.scss";
import "@/designs/page/dashboard.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const app = document.getElementById("root");
createRoot(app!).render(
	<StrictMode>
		<App></App>
	</StrictMode>
);
