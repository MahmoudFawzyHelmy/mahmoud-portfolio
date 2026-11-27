"use client";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
// Links for nav
  const links = [
    { name: "home", path: "/" },
    // { name: "services", path: "/services" },
    { name: "resume", path: "/resume" },
    { name: "work", path: "/work" },
    { name: "contact", path: "/contact" },
  ];
function MobileNav() {

  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex h-11 w-11 justify-center items-center cursor-pointer rounded-full border border-white/10 bg-white/0.03">
        <CiMenuFries className="text-[28px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col text-white ">
        {/* logo */}
        <div className="mt-32 mb-4 text-center text-2xl">
          <Link href={"/"} className="text-4xl font-semibold">
            <h1>
              MahmoudDev<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all mb-5`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
