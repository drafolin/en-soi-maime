import Link from 'next/link';
import './global.scss';
import Image from 'next/image';

const Layout = ({ children }: { children: JSX.Element[]; }) => (
	<html>
		<head></head>
		<body>

			<header>
				<div>
					<Link href="/">
						<Image
							width={32}
							height={32}
							src={"/assets/favicon.ico"}
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
				{children}
			</main>

			<footer>
				<div>
					Made with <Link href="https://reactjs.org"><Image height={14} width={14} src={"/assets/solidjs.svg"} alt="Reactjs" /></Link>
					, <Link href="https://vitejs.org"><Image height={14} width={14} src={"/assets/vite.svg"} alt="Vitejs" /></Link>
					, and <Image height={14} width={14} src={"/assets/heart.svg"} alt="love" />
				</div>
				<div>
					Created by <Link href="https://dindin.ch">dindin|nibnib</Link>
				</div>
				<div>
					&copy; en soi m'aime, 2022-2022
				</div>
			</footer>
		</body>
	</html>
);

export default Layout;
