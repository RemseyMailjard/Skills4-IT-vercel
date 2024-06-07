import Link from "next/link";
import React from "react";

export function CustomNavLink(props: any) {
  const { children, className = "" } = props;
  return (
    <a
      {...props}
      className={`font-bebas text-black text-[23px] hover:!text-brand-blue ${className}`}
    >
      {children}
    </a>
  );
}

export function CustomLink(props: any) {
  const { children, className = "", href = "#" } = props;
  return (
    <Link
      {...props}
      className={`cursor-pointer font-robot   hover:!text-brand-blue ${className}`}
      href={href}
    >
      {children}
    </Link>
  );
}
export function CustomLinkButton(props: any) {
  const { children, className = "" } = props;
  return (
    <button
      {...props}
      className={`font-robot text-black text-[16px] hover:!text-brand-blue ${className}`}
    >
      {children}
    </button>
  );
}
