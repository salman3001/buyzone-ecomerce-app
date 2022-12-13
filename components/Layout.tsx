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
        <title>{`BuyZone ${prop.title}`}</title>
        <meta name="description" content="BuyZone- E-commerce App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-base-200 text-base-content flex flex-col justify-between min-h-screen">
        <nav className=" navbar justify-between shadow-md bg-primary">
          <div>
            <Brand>BuyZone</Brand>
          </div>
          <div>
            <NavMenu href="">
              cart
              <div className="badge badge-error">2</div>
            </NavMenu>
            <NavMenu href="">Log in</NavMenu>
            <div className="flex items-center justify-center border-2 aspect-square rounded-full text-primary-content ">
              User
            </div>
          </div>
        </nav>
        <main className="grow">{prop.children}</main>
        <footer className="footer footer-center border-t-2  bg-neutral justify-self-stretch">
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
  <Link href={prop.href} className="btn btn-ghost text-primary-content btn-sm">
    {prop.children}
  </Link>
);

interface IBrand {
  children: ReactNode;
}

const Brand = (prop: IBrand) => (
  <Link href="" className="btn btn-ghost text-primary-content text-xl">
    {prop.children}
  </Link>
);
