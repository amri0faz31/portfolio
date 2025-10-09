"use client";
// src/app/components/Header.tsx
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="fixed top-0 bg-black/45 text-white z-50 w-full md:left-60 md:w-[calc(100%-15rem)]"
      style={{ backdropFilter: "blur(8px)" }}
    >
      <div className="h-auto px-3 sm:px-4 py-2">
        {/* Desktop: single line, no wrap */}
        <div className="hidden md:flex h-14 items-center justify-between flex-nowrap overflow-hidden">
          <div className="min-w-0 flex-1 truncate text-xs text-green-500 glow3 font-courier font-bold tracking-wide pr-3">
            {"W\u00A0E\u00A0L\u00A0C\u00A0O\u00A0M\u00A0E\u00A0\u00A0T\u00A0O\u00A0\u00A0M\u00A0Y\u00A0\u00A0P\u00A0O\u00A0R\u00A0T\u00A0F\u00A0O\u00A0L\u00A0I\u00A0O"}
          </div>
          <nav aria-label="Contact" className="shrink-0">
            <ul className="flex items-center space-x-4">
              <li>
                <a href="tel:+94775975732" className="text-sm text-green-500 glow3 font-roboto-mono font-bold">+94 77 5975 732</a>
              </li>
              <li className="text-emerald-500/50 select-none">|</li>
              <li>
                <a href="https://www.linkedin.com/in/amri-fazlul/" target="_blank" rel="noopener noreferrer" className="text-sm text-emerald-500 glow3 font-roboto-mono font-bold" title="LinkedIn">LinkedIn</a>
              </li>
              <li className="text-emerald-500/50 select-none">|</li>
              <li>
                <a href="https://medium.com/@amrifazlul31" target="_blank" rel="noopener noreferrer" className="text-sm text-emerald-500 glow3 font-roboto-mono font-bold" title="Medium">Medium</a>
              </li>
              <li className="text-emerald-500/50 select-none">|</li>
              <li>
                <a href="https://codeforces.com/profile/amrifazlul31" target="_blank" rel="noopener noreferrer" className="text-sm text-green-500 glow3 font-roboto-mono font-bold">CODEForces</a>
              </li>
              <li className="text-emerald-500/50 select-none">|</li>
              <li>
                <a href="https://github.com/amri0faz31" target="_blank" rel="noopener noreferrer" className="text-sm text-green-500 glow3 font-roboto-mono font-bold">GitHub</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile: stacked + hamburger */}
        <div className="md:hidden">
          <div className="flex items-center justify-between">
            <div className="text-xs text-green-500 glow3 font-courier font-bold tracking-wide truncate pr-3">
              {"W\u00A0E\u00A0L\u00A0C\u00A0O\u00A0M\u00A0E\u00A0\u00A0T\u00A0O\u00A0\u00A0M\u00A0Y\u00A0\u00A0P\u00A0O\u00A0R\u00A0T\u00A0F\u00A0O\u00A0L\u00A0I\u00A0O"}
            </div>
            <button aria-label="Menu" onClick={() => setOpen(true)} className="text-green-500 glow3 font-bold px-2 py-1">☰</button>
          </div>
          <nav aria-label="Contact" className="mt-1">
            <ul className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <li><a href="tel:+94775975732" className="text-sm text-green-500 glow3 font-roboto-mono font-bold">+94 77 5975 732</a></li>
              <li><a href="https://www.linkedin.com/in/amri-fazlul/" target="_blank" rel="noopener noreferrer" className="text-sm text-emerald-500 glow3 font-roboto-mono font-bold" title="LinkedIn">LinkedIn</a></li>
              <li><a href="https://medium.com/@amrifazlul31" target="_blank" rel="noopener noreferrer" className="text-sm text-emerald-500 glow3 font-roboto-mono font-bold" title="Medium">Medium</a></li>
              <li><a href="https://codeforces.com/profile/amrifazlul31" target="_blank" rel="noopener noreferrer" className="text-sm text-green-500 glow3 font-roboto-mono font-bold">CODEForces</a></li>
              <li><a href="https://github.com/amri0faz31" target="_blank" rel="noopener noreferrer" className="text-sm text-green-500 glow3 font-roboto-mono font-bold">GitHub</a></li>
            </ul>
          </nav>
        </div>
      </div>
      {/* Optional: keep mobile drawer available if you still want a menu */}
      <MobileSidebar open={open} onClose={() => setOpen(false)} />
    </header>
  );
}