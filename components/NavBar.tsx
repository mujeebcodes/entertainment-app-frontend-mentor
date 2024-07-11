"use client";

import AvatarImg from "./Avatar";
import Logo from "./Logo";
import NavItems from "./NavItems";

const NavBar = () => {
  return (
    <nav className="w-full bg-secondary p-2 flex items-center justify-between md:rounded-lg lg:flex-col lg:h-1/2 lg:w-24 ">
      <div>
        <Logo />
      </div>

      <NavItems />
      <div>
        <AvatarImg />
      </div>
    </nav>
  );
};
export default NavBar;
