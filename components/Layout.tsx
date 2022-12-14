import Head from 'next/head';
import Link from 'next/link';
import { ReactNode } from 'react';

interface IHead {
	title: string;
	children: ReactNode;
}

export default function Layout(prop: IHead) {
	return (
		<>
			<Head>
				<title>{`BuyZone- ${prop.title}`}</title>
				<meta name="description" content="BuyZone- E-commerce App" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex min-h-screen flex-col justify-between bg-base-200 text-base-content">
				<nav className=" navbar min-h-12 h-4 justify-between bg-primary shadow-inner">
					<div>
						<Brand>BuyZone</Brand>
					</div>
					<div className="pr-2">
						<NavMenu href="/cart">
							cart
							<div className="badge-error badge mx-1">2</div>
						</NavMenu>
						<NavMenu href="/login">Log in</NavMenu>
						<div className="flex aspect-square items-center justify-center rounded-full border-2 text-primary-content ">
							User
						</div>
					</div>
				</nav>
				<main className="grow">{prop.children}</main>
				<footer className="footer footer-center justify-self-stretch  border-t-2 bg-neutral">
					<div className="text-neutral-content">BuyZone CopyRIghts @2022</div>
				</footer>
			</div>
		</>
	);
}

interface INavMenu {
	href: string;
	children: ReactNode;
}

const NavMenu = (prop: INavMenu) => (
	<Link href={prop.href} className="btn-ghost btn-xs btn text-primary-content ">
		{prop.children}
	</Link>
);

interface IBrand {
	children: ReactNode;
}

const Brand = (prop: IBrand) => (
	<Link href="/" className="btn-ghost btn-sm btn text-xl text-primary-content">
		{prop.children}
	</Link>
);
