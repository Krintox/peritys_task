import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold">
          Exclusive
        </Link>
        <nav className="flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/about">About</Link>
          <Link href="/signup">Sign Up</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="border p-2 rounded-md"
          />
          <button>🔍</button>
          <button>🛒</button>
        </div>
      </div>
    </header>
  );
}
