import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/designs/index.css";
import App from "@/App";

const app = document.getElementById("root");
createRoot(app!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
