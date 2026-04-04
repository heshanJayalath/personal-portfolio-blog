import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/articles", label: "Articles" },
  { href: "/ask", label: "Ask Me" },
];

export default function Navbar() {
  return (
    <header className="border-b border-gray-200">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-bold">
          Malinga Jayalath
        </Link>

        <nav className="flex gap-6 text-sm font-medium text-gray-700">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-black">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}