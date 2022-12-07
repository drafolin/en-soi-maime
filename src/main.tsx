import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Index from "./index";
import "./index.scss";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route
					path={"/"}
					element={<Layout />}
				>
					<Route
						path={"/"}
						element={<Index />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
