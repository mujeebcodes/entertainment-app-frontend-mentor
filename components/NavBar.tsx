"use client";

import AvatarImg from "./Avatar";
import Logo from "./Logo";
import NavItems from "./NavItems";

const NavBar = () => {
  return (
    <nav className="w-full bg-secondary p-2 flex justify-between md:rounded-lg ">
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
