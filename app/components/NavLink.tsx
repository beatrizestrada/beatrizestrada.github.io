"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`transition-colors ${
        isActive
          ? ""
          : "text-gray-700 dark:text-gray-100 hover:text-primary-700 dark:hover:text-primary-300"
      } `}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
