import Link from "next/link";

const NavbarLink = ({
  href,
  children,
  role,
}: {
  href: string;
  children: React.ReactNode;
  role?: string;
}) => {
  return (
    <Link
      href={href}
      className="text-neutral-300 transition-all hover:translate-y-[-2px] hover:text-white"
      aria-label={children?.toString()}
      role={role}
    >
      {children}
    </Link>
  );
};

export default NavbarLink;
