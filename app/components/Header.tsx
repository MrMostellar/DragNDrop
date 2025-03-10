import Image from "next/image";
import Link from "next/link";
import React from "react";

const navStyles: string = "p-2";
const navRoutes: string[] = ["", "", ""];

interface Header {
  userComponents?: React.ReactElement;
}

export default function Header(props: Header) {
  return (
    <header className="flex min-h-[10vh] min-w-[100%] items-center justify-center bg-[--primary] text-[--contrast]">
      <div className="flex flex-[3] items-center justify-center">
        <Link className="relative left-0 pr-8" href="./">
          <Image
            className="flex-1"
            alt="DragNDrop Logo"
            src={"/images/DarkerLogo.png"}
            width={75}
            height={75}
          />
        </Link>
        <Link className="flex-col" href="./">
          <h1 className="flex flex-1 items-center justify-center text-3xl">
            DragNDrop
          </h1>
          <h2 className="flex items-center justify-center text-xs">
            Website Builder
          </h2>
        </Link>
      </div>

      <nav className="flex flex-[2] items-center justify-center px-2">
        <Link className={navStyles} href={navRoutes[0]}>
          About
        </Link>
        <Link className={navStyles} href={navRoutes[1]}>
          Contact
        </Link>
        <Link className={navStyles} href={navRoutes[2]}>
          Demo
        </Link>
        <div className={navStyles}>{props?.userComponents}</div>
      </nav>
    </header>
  );
}
