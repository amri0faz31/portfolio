"use client";

import Link from "next/link";
import { topics } from "./navTopics";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface MobileSidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileSidebar({ open, onClose }: MobileSidebarProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const overlay = (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-[80] md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/70 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
      />

      {/* Panel */}
      <aside
        className={`absolute top-0 left-0 h-full w-64 bg-black text-white shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ willChange: "transform", backfaceVisibility: "hidden" }}
      >
        <div className="flex items-center justify-between h-14 px-4 border-b border-white/10">
          <span className="text-sm text-green-500 glow3 font-roboto-mono font-bold">Menu</span>
          <button onClick={onClose} aria-label="Close" className="text-green-500 glow3 font-bold">✕</button>
        </div>
        <nav className="p-4 space-y-3">
          {topics.map((t) => (
            <Link
              key={t.path}
              href={t.path}
              onClick={onClose}
              className="block w-full hover:bg-white/10 transition px-4 py-2 rounded glow4 text-teal-500 text-lg font-roboto-mono"
            >
              {t.name}
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );

  if (!mounted) return null;
  return createPortal(overlay, document.body);
}
