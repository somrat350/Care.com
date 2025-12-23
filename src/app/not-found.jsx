import Link from "next/link";
import "@/app/globals.css";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-base-200">
      <title>Page Not Found</title>
      <div className="relative w-64 h-64 mb-6 mx-auto">
        <Image
          src="/error404.png"
          alt="Page Not Found"
          fill
          className="object-contain"
        />
      </div>

      <h1 className="text-6xl font-extrabold text-secondary mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-2">Page Not Found</h2>
      <p className="text-base-content/70 mb-6">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="btn btn-secondary font-semibold hover:scale-105 transition"
      >
        Go to Home
      </Link>
    </div>
  );
}
