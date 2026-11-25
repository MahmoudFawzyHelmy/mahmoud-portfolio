import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
export default function Header() {
  return (
    <header className="site-header relative z-40 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" aria-label="Go to homepage">
          <h1 className="text-3xl font-semibold tracking-tight">
            Mahmoud<span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
