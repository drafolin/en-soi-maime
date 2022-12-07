import { Outlet, Link } from "react-router-dom";
import favicon from "./assets/favicon.jpg";
import reactIcon from "./assets/react.svg";
import viteIcon from "./assets/vite.svg";
import heart from "./assets/heart.svg";

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
			<div>
				Made with <Link to="https://reactjs.org"><img src={reactIcon} alt="Reactjs" /></Link>
				, <Link to="https://vitejs.org"><img src={viteIcon} alt="Vitejs" /></Link>
				, and <img src={heart} alt="love" />
			</div>
			<div>
				Created by <Link to="https://dindin.ch">dindin|nibnib</Link>
			</div>
			<div>
				&copy; en soi m'aime, 2022-2022
			</div>
		</footer>
	</>
);

export default Layout;
