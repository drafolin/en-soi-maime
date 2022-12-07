import { Outlet, Link } from "react-router-dom";
import favicon from "./assets/favicon.jpg";

const Layout = () => (
	<>
		<header>
			<Link to="/">
				<img
					src={favicon}
					alt="En soi m'aime"
				/>
				En soi m'aime
			</Link>
			<nav>
				<ul>
					<li>
						<Link to={"/"}>
							Accueil
						</Link>
					</li>
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
