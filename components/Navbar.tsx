'use client' ;

import  Container  from "./container";
import Search from "./Search";
import UserMenu from "./UserMenu";
import Logo from "./logo"

const Navbar = () => {
    return (  
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="py-5 border-b-[3px]">
                <Container>
                    <div className="
                    flex
                    flex-row
                    items-center
                    justify-between
                    gap-3
                    md:gap-0
                    ">
                        <Logo/>
                        <Search />
                        <UserMenu />

                    </div>

                </Container>
            </div>
        </div>
    );
}
 
export default Navbar;