import { Outlet, A } from "@solidjs/router";
import favicon from "./assets/favicon.ico";
import solidIcon from "./assets/solidjs.svg";
import viteIcon from "./assets/vite.svg";
import heart from "./assets/heart.svg";

const Layout = () => (
	<>
		<header>
			<div>
				<A href="/">
					<img
						src={favicon}
						alt="En soi m'aime"
					/>
					En soi m'aime
				</A>
				<nav>
					<ul>
						<li>
							<A href={"/"}>
								Accueil
							</A>
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
				Made with <A href="https://reactjs.org"><img src={solidIcon} alt="Reactjs" /></A>
				, <A href="https://vitejs.org"><img src={viteIcon} alt="Vitejs" /></A>
				, and <img src={heart} alt="love" />
			</div>
			<div>
				Created by <A href="https://dindin.ch">dindin|nibnib</A>
			</div>
			<div>
				&copy; en soi m'aime, 2022-2022
			</div>
		</footer>
	</>
);

export default Layout;
