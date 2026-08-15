"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeToggle } from "../../components/theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ─── Desktop / Shared Header ─────────────────────────────── */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300 ease-out
          ${mobileOpen ? "opacity-0 pointer-events-none" : "opacity-100"}
          ${
            scrolled
              ? "bg-bg/80 backdrop-blur-md border-b border-border h-16"
              : "bg-transparent border-b border-transparent h-20"
          }
        `}
      >
        <nav className="max-w-container mx-auto h-full px-5 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-display text-2xl text-text">
            Stephanie
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm text-text-secondary hover:text-text transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <Link
              href="/menu"
              className="hidden sm:flex bg-primary text-white rounded-pill px-6 h-11 items-center font-body text-sm font-semibold hover:bg-primary-hover transition-colors duration-200"
            >
              Order Now
            </Link>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-text"
              aria-label="Open menu"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>

      {/* ─── Mobile Drawer ───────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-bg flex flex-col md:hidden"
          >
            {/* Drawer header row — only logo + close, no duplicate from navbar */}
            <div className="flex items-center justify-between px-5 h-20 border-b border-border">
              <Link
                href="/"
                className="font-display text-2xl text-text"
                onClick={() => setMobileOpen(false)}
              >
                Stephanie
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 flex items-center justify-center text-text"
                aria-label="Close menu"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            {/* Nav links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
              className="flex flex-col px-5 mt-6"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-4xl text-text py-4 border-b border-border last:border-b-0"
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>

            {/* Bottom actions */}
            <div className="mt-auto px-5 pb-10 flex flex-col gap-5">
              <div className="flex items-center justify-between py-4 border-t border-border">
                <span className="font-body text-sm text-text-secondary">
                  Appearance
                </span>
                <ThemeToggle />
              </div>
              <Link
                href="/menu"
                onClick={() => setMobileOpen(false)}
                className="bg-bg text-white rounded-pill h-12 flex items-center justify-center font-body text-sm font-semibold hover:bg-primary-hover transition-colors duration-200"
              >
                Order Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
