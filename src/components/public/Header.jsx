"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import { HiXMark } from "react-icons/hi2";
import NavLink from "../NavLink";
import Logo from "./Logo";
import { signOut, useSession } from "next-auth/react";
import Swal from "sweetalert2";

const Header = () => {
  const { data: session } = useSession();
  const user = session?.user;

  const [openMenu, setOpenMenu] = useState(false);
  const [theme, setTheme] = useState(true);

  const logout = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You cannot be access private pages!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout it!",
    }).then((result) => {
      if (result.isConfirmed) {
        signOut().then((res) => {
          Swal.fire({
            title: "Logged out!",
            icon: "success",
          });
        });
      }
    });
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("assignment-no12-theme");
    if (savedTheme) {
      setTheme(JSON.parse(savedTheme));
    }
  }, []);

  useEffect(() => {
    document
      .querySelector("html")
      .setAttribute("data-theme", theme ? "dark" : "light");
    localStorage.setItem("assignment-no12-theme", JSON.stringify(theme));
  }, [theme]);

  const menuLink = (
    <>
      <NavLink className="navLink" href="/">
        Home
      </NavLink>
      <NavLink className="navLink" href="/services">
        Services
      </NavLink>
      {user && (
        <>
          <NavLink className="navLink" href="/myBooking">
            My Booking
          </NavLink>
        </>
      )}
    </>
  );

  const rightLink = (
    <>
      <div
        className="tooltip tooltip-bottom"
        data-tip={`${theme ? "Switch To Light Mode" : "Switch To Dark Mode"}`}
      >
        <button
          onClick={() => setTheme(!theme)}
          className="btn btn-sm btn-circle text-lg"
        >
          {theme ? <FaMoon /> : <FaSun className="text-orange-500" />}
        </button>
      </div>
      {user ? (
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="cursor-pointer m-1">
            {user.photoURL ? (
              <Image
                src={user?.photoURL}
                alt="Car.com"
                width="40"
                height="40"
                className="w-10 h-10 rounded-full"
              />
            ) : (
              <div className="w-10 h-10 bg-secondary p-2 rounded-full flex justify-center items-center text-base">
                {user.name.slice(0, 2)}
              </div>
            )}
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-fit min-w-52 p-2 shadow-sm gap-2"
          >
            <li>
              <Link href="/profile" className="btn btn-outline btn-secondary">
                Profile
              </Link>
            </li>
            <li>
              <button onClick={logout} className="btn btn-secondary">
                Logout
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <Link className="btn btn-secondary" href="/auth/login">
          Login
        </Link>
      )}
    </>
  );
  return (
    <header className="sticky top-0 z-20 backdrop-blur-3xl">
      <div className="max-w-360 mx-auto px-5 py-3 flex items-center justify-between border-b border-secondary/30 relative">
        <div className="flex items-center gap-1 sm:gap-10">
          <HiMenuAlt1
            onClick={() => setOpenMenu(true)}
            className="lg:hidden cursor-pointer text-2xl font-bold"
          />
          <Logo />
        </div>
        <div className="hidden lg:flex items-center justify-center gap-1">
          {menuLink}
        </div>
        <div className="flex items-center gap-2">{rightLink}</div>
        <div
          className={`absolute left-0 sm:left-5 top-0 shadow-2xl flex lg:hidden flex-col gap-5 p-8 rounded-b-3xl bg-base-300 w-full sm:max-w-xl z-10 duration-300 ${
            openMenu ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex justify-end">
            <HiXMark
              onClick={() => setOpenMenu(false)}
              className="cursor-pointer text-3xl font-extrabold"
            />
          </div>
          <div className="flex flex-col gap-5">{menuLink}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
