import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/designs/index.css";
import App from "@/App";
import { BrowserRouter } from "react-router-dom";

const app = document.getElementById("root");
createRoot(app!).render(
	<StrictMode>
		<BrowserRouter basename="/dashboard">
			<App></App>
		</BrowserRouter>
	</StrictMode>
);
