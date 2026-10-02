
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-white px-6 py-4 shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-gray-900"
        >
          Better Auth
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-3">
          <Link
            href="/sign-in"
            className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
          >
            Sign In
          </Link>

          <Link
            href="/sign-up"
            className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

