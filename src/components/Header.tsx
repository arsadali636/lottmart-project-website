"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Features", href: "/features" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "FAQ", href: "/faq" },
  { name: "Partner", href: "/partner" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Run initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLoginAlert = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("Lottmart B2B operations happen exclusively inside our mobile application. Please download the app to log in.");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-zinc-200/40 shadow-xs py-3"
            : "py-5 border-b border-transparent bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link
            href="/"
            className={`flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:scale-[1.01] ${
              isOpen ? "opacity-20 pointer-events-none" : "opacity-100"
            }`}
          >
            <Image
              src="/assets/logo-square.jpg"
              alt="Lottmart B2B Logo"
              width={80}
              height={80}
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain rounded-xl shadow-sm"
              priority
            />
            <div className="flex flex-col items-start justify-center pt-0.5">
              <span className="text-[1.35rem] sm:text-[1.75rem] lg:text-[2rem] font-black tracking-tighter text-[#0051ff] leading-none mb-1.5">
                LOTTMART
              </span>
              <div className="bg-gradient-to-r from-[#011453] to-[#0047df] rounded-full px-2.5 sm:px-3.5 py-[2px] shadow-sm">
                <span className="text-white text-[0.55rem] sm:text-[0.65rem] lg:text-[0.7rem] font-bold tracking-[0.03em] block leading-tight">
                  Trade at Scale. Earn More.
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative font-semibold text-[0.93rem] py-1 transition-colors ${
                    isActive
                      ? "text-primary after:w-full"
                      : "text-text-secondary hover:text-text-primary after:w-0"
                  } after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/download"
              className="bg-primary hover:bg-primary-hover text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-xs transition-all duration-300 whitespace-nowrap"
            >
              Download App
            </Link>
            <a
              href="#"
              onClick={handleLoginAlert}
              className="bg-white hover:bg-zinc-50 border border-zinc-200 text-text-primary font-bold text-sm px-5 py-2.5 rounded-xl shadow-xs transition-all duration-300 whitespace-nowrap"
            >
              Login
            </a>
          </div>

          {/* Mobile Hamburg Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block lg:hidden cursor-pointer p-1.5 z-50 focus:outline-none"
            aria-label="Toggle Navigation"
            aria-expanded={isOpen}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-text-primary rounded-full transition-all duration-300 origin-left ${
                  isOpen ? "rotate-45 translate-x-1" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-text-primary rounded-full transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`w-full h-0.5 bg-text-primary rounded-full transition-all duration-300 origin-left ${
                  isOpen ? "-rotate-45 translate-x-1" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        } lg:hidden`}
      ></div>

      {/* Mobile Drawer Panel */}
      <nav
        className={`fixed top-0 right-0 w-[280px] h-full bg-white shadow-xl z-40 flex flex-col p-8 pt-24 transition-all duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="flex flex-col gap-6 mb-10">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.name}
                onClick={() => setIsOpen(false)}
                href={link.href}
                className={`text-lg font-semibold transition-colors ${
                  isActive ? "text-primary" : "text-text-primary hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="flex flex-col gap-4">
          <Link
            onClick={() => setIsOpen(false)}
            href="/download"
            className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold py-3 rounded-xl shadow-sm text-center"
          >
            Download App
          </Link>
          <a
            href="#"
            onClick={(e) => {
              setIsOpen(false);
              handleLoginAlert(e);
            }}
            className="w-full bg-white border border-slate-200 text-text-primary font-semibold py-3 rounded-xl shadow-sm text-center hover:bg-slate-50"
          >
            Login
          </a>
        </div>
      </nav>
    </>
  );
}
