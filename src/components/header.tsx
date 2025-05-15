"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const linkData = [
  {
    name: "performance",
    path: "/performance",
  },
  {
    name: "reliability",
    path: "/reliability",
  },
  {
    name: "scale",
    path: "/scale",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="absolute w-full z-10">
      <div className="flex justify-between container mx-auto text-white p-8">
        <Link className="text-3xl font-bold" href="/">
          Home
        </Link>
        <div className="text-xl space-x-4">
          {linkData.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={pathname === link.path ? "text-purple-500" : ""}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
