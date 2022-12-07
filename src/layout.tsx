import { Outlet } from "react-router-dom";

const Layout = () => (
	<>
		<header>
			<nav>
				<ul>

				</ul>
			</nav>
		</header>

		<main>
			<Outlet />
		</main>

		<footer>

		</footer>
	</>
);

export default Layout;
