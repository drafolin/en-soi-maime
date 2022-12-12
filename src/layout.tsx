import { Outlet, Link } from "react-router-dom";
import favicon from "./assets/favicon.ico";
import solidIcon from "./assets/solidjs.svg";
import viteIcon from "./assets/vite.svg";
import heart from "./assets/heart.svg";

const Layout = () => (
	<>
		<header>
			<div>
				<Link href="/">
					<img
						src={favicon}
						alt="En soi m'aime"
					/>
					En soi m'aime
				</Link>
				<nav>
					<ul>
						<li>
							<Link href={"/"}>
								Accueil
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>

		<main>
			<Outlet />
		</main>

		<footer>
			<div>
				Made with <Link href="https://reactjs.org"><img src={solidIcon} alt="Reactjs" /></Link>
				, <Link href="https://vitejs.org"><img src={viteIcon} alt="Vitejs" /></Link>
				, and <img src={heart} alt="love" />
			</div>
			<div>
				Created by <Link href="https://dindin.ch">dindin|nibnib</Link>
			</div>
			<div>
				&copy; en soi m'aime, 2022-2022
			</div>
		</footer>
	</>
);

export default Layout;
