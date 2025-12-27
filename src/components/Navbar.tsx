import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="font-semibold">
          Corevia
        </Link>

        <nav className="flex items-center gap-4 text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/solution">Solution</Link>
          <Link href="/posts">Blog</Link>
        </nav>
      </div>
    </header>
  );
}
