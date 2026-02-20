"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { LogOut, Coins } from "lucide-react";
import { useAuth } from "@/lib/auth/AuthContext";
import { logOut } from "@/lib/firebase/auth";

export default function NavbarAuthSection({
  locale,
  downloadLabel,
}: {
  locale: string;
  downloadLabel: string;
}) {
  const { user, pointBalance } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const isKo = locale !== "en";

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await logOut();
    setShowMenu(false);
  };

  if (!user) {
    return (
      <a
        href="https://play.google.com/store/apps/details?id=com.corevia.fitness"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2 px-4 py-2 bg-[var(--corevia-primary)] text-white text-sm font-semibold rounded-lg hover:bg-blue-600 transition-colors"
      >
        {downloadLabel}
      </a>
    );
  }

  return (
    <div className="relative flex items-center gap-2" ref={menuRef}>
      <div className="flex items-center gap-1 px-2.5 py-1 bg-purple-50 rounded-full text-xs font-semibold text-purple-700">
        <Coins className="w-3.5 h-3.5" />
        {pointBalance}pt
      </div>

      <button
        onClick={() => setShowMenu(!showMenu)}
        className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-200 hover:border-purple-400 transition-colors"
      >
        {user.photoURL ? (
          <Image
            src={user.photoURL}
            alt=""
            width={32}
            height={32}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-purple-100 flex items-center justify-center text-xs font-bold text-purple-600">
            {(user.displayName || "U")[0]}
          </div>
        )}
      </button>

      {showMenu && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50">
          <div className="px-3 py-2 border-b border-gray-50">
            <p className="text-sm font-medium text-gray-700 truncate">
              {user.displayName}
            </p>
            <p className="text-xs text-gray-400 truncate">{user.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full px-3 py-2.5 text-sm text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            {isKo ? "로그아웃" : "Sign out"}
          </button>
        </div>
      )}
    </div>
  );
}
