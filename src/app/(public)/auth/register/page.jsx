"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [passValidateText, setPassValidateText] = useState("");

  // password validation
  const passwordValidate = (e) => {
    const tempPass = e.target.value;
    setPassword("");

    if (!/[a-z]/.test(tempPass)) {
      setPassValidateText("Password must contain lowercase.");
      return;
    } else if (!/[A-Z]/.test(tempPass)) {
      setPassValidateText("Password must contain Uppercase.");
      return;
    } else if (tempPass.length < 6) {
      setPassValidateText("Password must 6 letters.");
      return;
    } else {
      setPassValidateText("");
      setPassword(tempPass);
      return;
    }
  };

  const formSubmit = async (data) => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.post("/api/auth/register", data);
      if (res.data.insertedId) {
        router.push("/");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center my-10">
      <title>Register | Care.com</title>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="card w-full max-w-xl bg-base-300 border border-secondary shadow-xl p-6"
      >
        <h2 className="text-2xl font-bold text-secondary mb-4">
          Create Account
        </h2>

        {error && <p className="text-error text-sm mb-2">{error}</p>}

        <input
          {...register("name")}
          type="text"
          placeholder="Full Name"
          className="input w-full mb-3"
          required
        />

        <input
          {...register("nidNumber")}
          type="number"
          placeholder="NID Number"
          className="input w-full mb-3"
          required
        />

        <input
          {...register("contactNumber")}
          type="number"
          placeholder="Contact Number"
          className="input w-full mb-3"
          required
        />

        <input
          {...register("email")}
          type="email"
          placeholder="Email"
          className="input w-full mb-3"
          required
        />

        <input
          {...register("password")}
          onChange={passwordValidate}
          type="password"
          placeholder="Password"
          className="input w-full mb-4"
          required
        />

        <span className="text-[12px] text-right text-secondary mb-4">
          {passValidateText}
        </span>

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
