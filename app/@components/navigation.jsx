import Link from "next/link";

export default function Navigation({ lang }) {
  return (
    <nav className="flex space-x-4 mb-2">
      <Link href="/" className="bg-blue-200 rounded px-4 py-2">
        Home
      </Link>
      <Link href="/todos" className="bg-cyan-200 rounded px-4 py-2">
        Todos
      </Link>
    </nav>
  );
}
