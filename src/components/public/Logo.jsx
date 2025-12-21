import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center w-fit">
      <h1 className={`text-3xl font-extrabold`}>
        Care<span className="text-secondary">.com</span>
      </h1>
    </Link>
  );
};

export default Logo;
