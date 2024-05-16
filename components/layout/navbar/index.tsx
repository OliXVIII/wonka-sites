import Link from "next/link";
import { Suspense } from "react";
import MobileMenu from "./mobile-menu";
import Search from "./search";
import { getMenu } from "@/lib/shopify";
import LogoSquare from "@/components/store/logo-square";
import { Menu } from "@/lib/shopify/types";
import OpenCart from "@/components/store/cart/open-cart";
import Cart from "@/components/store/cart";

const { SITE_NAME } = process.env;

const hardcodedMenu: Record<string, Menu[]> = {
  en: [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Shop",
      path: "/shop",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Events",
      path: "/events",
    }
  ],
  fr: [
    {
      title: "Accueil",
      path: "/",
    },
    {
      title: "Boutique",
      path: "/shop",
    },
    {
      title: "À propos",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Événements",
      path: "/events",
    },
  ],
};

type NavbarProps = {
  lang: 'en' | 'fr';
};

export default async function Navbar({ lang }: NavbarProps) {
  // const menu = await getMenu("next-js-frontend-header-menu");
  const menu = hardcodedMenu[lang];

  return (
    <Suspense fallback={<div>Loading...</div>}>
    <nav className="relative flex items-center justify-between p-4 lg:px-6">
      <div className="block flex-none md:hidden">
        <MobileMenu menu={menu} />
      </div>
      <div className="flex w-full items-center">
        <div className="flex w-full md:w-1/3">
          <Link
            href="/"
            className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6"
          >
            <LogoSquare />
            <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
              {SITE_NAME}
            </div>
          </Link>
          {menu.length ? (
            <ul className="hidden gap-10 h-20 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        {/*<div className="hidden justify-center md:flex md:w-1/3">
          <Search />
        </div>*/}
        <div className="flex justify-end md:w-1/3">
          <Suspense fallback={<OpenCart />}>
            <Cart />
          </Suspense>
        </div>
      </div>
    </nav>
    </Suspense>
  );
}