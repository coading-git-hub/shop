

import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import FavoriteButton from "./FavoriteButton";
import SignIn from "./SignIn";
import MobileMenu from "./MobileMenu";
import { auth, currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Logs } from "lucide-react";
import { getMyOrders } from "@/sanity/queries";

const Header = async () => {
  const user = await currentUser();
  const { userId } = (await auth()) as { userId: string | null };
  let orders = null;
  if (userId) {
    orders = await getMyOrders(userId);
  }

  return (
    <header className="sticky top-0 z-50 py-3 md:py-5 bg-white/70 backdrop-blur-md w-full">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-0 text-lightColor w-full px-2 md:px-4 lg:px-6 xl:px-8">
        <div className="w-full md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0">
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />
        <div className="w-full md:w-1/3 flex items-center justify-center md:justify-end gap-4 md:gap-5 mt-2 md:mt-0 flex-wrap">
          <SearchBar />
          <CartIcon />
          <FavoriteButton />
          <ClerkLoaded>
            <SignedIn>
              <Link
                href={"/orders"}
                className="group relative hover:text-shop_light_green hoverEffect flex-shrink-0"
              >
                <Logs className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-shop_btn_dark_green text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
                  {orders?.length ? orders?.length : 0}
                </span>
              </Link>
              <UserButton />
            </SignedIn>
            <SignIn />
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;