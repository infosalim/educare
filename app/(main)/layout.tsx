import { MainNav } from "@/components/main-nav";
import { SiteFooter } from "@/components/site-footer";
// import { buttonVariants } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import Link from "next/link";
// Define types for navLinks and the children prop of MainLayout
interface NavLink {
  title: string;
  href: string;
}

interface MainLayoutProps {
  children: React.ReactNode; // This is a common type used for JSX elements
}

const navLinks: NavLink[] = [
  {
    title: "Features",
    href: "/#features",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Documentation",
    href: "/docs",
  },
];

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="z-40 bg-background/60 backdrop-blur-md fixed top-0 left-0 right-0 border-b ">
        <div className="container flex h-20 items-center justify-between py-6 ">
          <MainNav items={navLinks} />
        </div>
      </header>
      <main className="flex-1 pt-20 flex flex-col">{children}</main>
      <SiteFooter />
    </div>
  );
};

export default MainLayout;