import Image from "next/image";
import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import { RiMenuLine } from "react-icons/ri";

const menuItemStyles: string =
  "drop-down-links flex flex-1 items-center justify-center w-[100%] text-center px-10 py-1";

const menuItemTextStyles: string = "hover:-translate-y-[1px] user-nav-text";

export default function UserComponents() {
  return (
    <>
      <div className="drop-down-container flex flex-col items-center justify-center">
        <button className="drop-down-icon transition-opacity focus:opacity-0">
          <RiMenuLine />
        </button>
        <nav className="fixed right-0 top-[10%] flex h-[90vh] min-w-[20vw] flex-1 flex-col">
          <div className="flex flex-1 flex-col items-center justify-center gap-2 bg-black">
            <Image
              src={"/images/dummyProfile.png"}
              width={50}
              height={50}
              alt=""
              className="flex rounded-full object-cover"
            />
            <p className="flex flex-1">Username</p>
          </div>
          <div className="flex flex-[3] flex-col">
            <Link className={menuItemStyles} href={""}>
              <p className={menuItemTextStyles}>Profile</p>
            </Link>
            <Link className={menuItemStyles} href={""}>
              <p className={menuItemTextStyles}>Settings</p>
            </Link>
            <Link className={menuItemStyles} href={""}>
              <p className={menuItemTextStyles}>Projects</p>
            </Link>
            <Link className={menuItemStyles} href={""}>
              <p className={menuItemTextStyles}>Resources</p>
            </Link>
            <Link className={menuItemStyles} href={""}>
              <p className={menuItemTextStyles}>Log Out</p>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
