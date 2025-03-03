import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex items-center justify-center">
      <Link className="flex flex-1 items-center justify-center" href="./">
        <Image
          className=""
          alt="DragonDrop Logo"
          src={"/images/Logo.png"}
          width={100}
          height={100}
        />
      </Link>

      <nav className="flex-3 flex">
        <Link href={""}>About</Link>
        <Link href={""}>About</Link>
        <Link href={""}>About</Link>
      </nav>
    </div>
  );
}
