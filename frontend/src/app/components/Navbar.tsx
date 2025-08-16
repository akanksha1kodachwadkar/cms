"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative bg-gradient-to-r from-blue-800 to-indigo-600 shadow-xl border-b border-white/10">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-16 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-4 -left-16 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      </div>

      {/* Glass morphism overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

      <div className="relative z-10 container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link
            href="/"
            className="group flex items-center space-x-2.5 text-white font-bold text-xl hover:scale-105 transition-transform duration-200"
          >
            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30 group-hover:bg-white/30 transition-all duration-300">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15"
                />
              </svg>
            </div>
            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              CMS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-6">
            <li>
              <Link
                href="/dashboard"
                className="group relative px-3 py-2 text-white/90 hover:text-white font-medium rounded-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
              >
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                href="/manage-blogs"
                className="group relative px-3 py-2 text-white/90 hover:text-white font-medium rounded-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
              >
                <span>Manage Blogs</span>
              </Link>
            </li>

            {/* Separator */}
            <li className="mx-3">
              <div className="w-px h-5 bg-white/20"></div>
            </li>

            <li>
              <Link
                href="/login"
                className="group relative px-3 py-2 text-white/90 hover:text-white font-medium rounded-lg transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
              >
                <span>Login</span>
              </Link>
            </li>
            <li>
              <Link
                href="/register"
                className="px-5 py-2 bg-gradient-to-r from-pink-400 to-red-400  hover:from-pink-500 hover:to-red-500 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Register
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-colors duration-300 backdrop-blur-sm border border-white/20">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden mt-4 pt-4 border-t border-white/10">
          <div className="space-y-2">
            <Link
              href="/dashboard"
              className="flex items-center px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href="/manage-blogs"
              className="flex items-center px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
            >
              Manage Blogs
            </Link>
            <div className="border-t border-white/10 my-2"></div>
            <Link
              href="/login"
              className="flex items-center px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="block px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-pink-500 hover:via-red-500 transition-all duration-300"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
