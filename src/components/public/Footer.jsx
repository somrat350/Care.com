import Link from "next/link";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-[#101214] text-white">
      <div className="max-w-360 mx-auto p-5">
        <div className="flex flex-col md:flex-row gap-5 justify-between items-center">
          {/* LOGO */}
          <Logo />
          {/* LINKS */}
          <div className="flex items-center gap-5">
            <Link href="/" className="hover:text-secondary duration-200">
              Home
            </Link>
            <Link
              href="/services"
              className="hover:text-secondary duration-200"
            >
              Services
            </Link>
            <Link href="/about" className="hover:text-secondary duration-200">
              About
            </Link>
            <Link href="/contact" className="hover:text-secondary duration-200">
              Contact
            </Link>
          </div>
          {/* SOCIAL */}
          <div className="flex items-center gap-3">
            <div className="rounded-full p-1 border border-white hover:border-secondary hover:scale-110 hover:text-secondary duration-200">
              <Link
                href="https://www.facebook.com/profile.php?id=61564941795910"
                target="_blank"
              >
                <FaFacebook />
              </Link>
            </div>
            <div className="rounded-full p-1 border border-white hover:border-secondary hover:scale-110 hover:text-secondary duration-200">
              <Link href="" target="_blank">
                <FaXTwitter />
              </Link>
            </div>
            <div className="rounded-full p-1 border border-white hover:border-secondary hover:scale-110 hover:text-secondary duration-200">
              <Link href="" target="_blank">
                <FaInstagram />
              </Link>
            </div>
            <div className="rounded-full p-1 border border-white hover:border-secondary hover:scale-110 hover:text-secondary duration-200">
              <Link href="" target="_blank">
                <FaLinkedin />
              </Link>
            </div>
            <div className="rounded-full p-1 border border-white hover:border-secondary hover:scale-110 hover:text-secondary duration-200">
              <Link href="https://github.com/somrat350" target="_blank">
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>
        <div className="max-w-2xl mx-auto mt-5">
          <p className="text-center text-gray-400">
            Care.com is a modern web application that helps users find and book
            reliable care services for children, elderly, and sick individuals.
            It ensures trusted caregivers, an easy booking process, secure
            payments, and user reviews to provide safe and dependable care
            solutions.
          </p>
        </div>
        <h2 className="text-center text-white font-medium text-lg border-t border-gray-600 mt-5 pt-5">
          Copyright © 2025 - All right reserved
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
