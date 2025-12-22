"use client";

import { useState } from "react";
import Link from "next/link";

export default function Register() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e) => {};

  return (
    <div className="flex items-center justify-center my-10">
      <form
        onSubmit={handleSubmit}
        className="card w-full max-w-xl bg-base-300 border border-secondary shadow-xl p-6"
      >
        <h2 className="text-2xl font-bold text-secondary mb-4">
          Create Account
        </h2>

        {error && <p className="text-error text-sm mb-2">{error}</p>}

        <input
          name="name"
          type="text"
          placeholder="Full Name"
          className="input w-full mb-3"
          required
        />

        <input
          name="name"
          type="number"
          placeholder="NID Number"
          className="input w-full mb-3"
          required
        />

        <input
          name="name"
          type="number"
          placeholder="Contact Number"
          className="input w-full mb-3"
          required
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="input w-full mb-3"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="input w-full mb-4"
          required
        />

        <button className="btn btn-secondary w-full skeleton bg-secondary hover:scale-105 transition">
          <span className={`${loading ? "loading" : ""}`}></span>
          Register
        </button>

        <p className="mt-10 text-end">
          Already have an account?{" "}
          <Link href={"/auth/login"} className="text-secondary">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
