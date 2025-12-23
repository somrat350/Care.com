"use client";

import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Login() {
  const { status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm();

  if (status === "loading") return;
  if (status === "authenticated") {
    router.push(callbackUrl);
  }

  const formSubmit = async (data) => {
    setLoading(true);
    const res = await signIn("credentials", {
      ...data,
      redirect: false,
    });
    setLoading(false);
    if (!res.error) {
      router.push(callbackUrl);
    }
  };

  return (
    <div className="flex items-center justify-center my-10">
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="card w-full max-w-xl bg-base-300 border border-secondary shadow-xl p-6"
      >
        <h2 className="text-2xl font-bold text-secondary mb-4">
          Login to Care
        </h2>

        <input
          {...register("email")}
          required
          type="email"
          placeholder="Email"
          className="input input-bordered w-full mb-3"
        />

        <input
          {...register("password")}
          required
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
