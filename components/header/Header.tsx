import React from "react";
import Logo from "../elements/Logo";
import Avatar from "../elements/Avatar";
import Options from "./Options";
import MaxLimitWrapper from "../elements/MaxLimitWrapper";
import Link from "next/link";

function Header() {
  return (
    <MaxLimitWrapper>
      <header className="px-2 md:px-0">
        <div className="header-top flex justify-between min-h-[80px] items-center">
          <Link href={"/"}>
            <div className="logo">
              <Logo />
            </div>
          </Link>
          <div className="avatar flex items-center">
            {/* <div className="mr-2 font-bold hidden md:block">EUR</div> */}
            <Avatar src="/avatar.jpeg" alt="avatar" fallBack="BS" />
          </div>
        </div>
        <Options />
      </header>
    </MaxLimitWrapper>
  );
}

export default Header;
