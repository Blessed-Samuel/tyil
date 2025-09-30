"use client";

import { usePathname } from "next/navigation";
import Navbar from "./layout/Navbar";

export default function AppNavbar() {
  const pathname = usePathname();

  // Hide navbar for programme detail pages
  const hideNavbar = /^\/programmes\/[^/]+\/[^/]+$/.test(pathname);

  if (hideNavbar) return null;
  return <Navbar />;
}
