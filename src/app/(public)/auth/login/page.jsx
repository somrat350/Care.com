"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!res.error) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center my-10">
      <form
        onSubmit={handleSubmit}
        className="card w-full max-w-xl bg-base-300 border border-secondary shadow-xl p-6"
      >
        <h2 className="text-2xl font-bold text-secondary mb-4">
          Login to Care
        </h2>

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="input input-bordered w-full mb-3"
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input input-bordered w-full mb-4"
        />

        <button className="btn btn-secondary w-full skeleton bg-secondary hover:scale-105 transition">
          <span className={`${loading ? "loading" : ""}`}></span>
          Login
        </button>
        <p className="mt-10 text-end">
          Don`t have an account?{" "}
          <Link href={"/auth/register"} className="text-secondary">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
