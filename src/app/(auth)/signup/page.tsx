"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/firebase/initFirebase";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type FormData = {
  email: string;
  password: string;
};

export default function SignUp() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      await signInWithEmailAndPassword(auth, data.email, data.password);
      toast.success(
        "Pendaftaran berhasil! Kamu otomatis login dan akan diarahkan ke Halaman Utama."
      );

      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error) {
      toast.error(
        (error as Error).message.includes("already-in-use")
          ? "Email yang kamu masukkan sudah terdaftar."
          : "Pendaftaran gagal! silahkan coba lagi."
      );
    }
  });

  return (
    <div className="relative min-h-screen bg-cover bg-center bg-[url('/backgrounds/bg-pikachu.jpg')] px-4">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="mb-10">
            <Link href={"/"}>
              <Image
                className="mx-auto"
                src="/logos/logo-pokeapi.png"
                width={150}
                height={150}
                alt="Poke API"
              />
            </Link>
          </div>
          <form className="space-y-4" onSubmit={onSubmit}>
            <p className="font-bold text-gray-700 text-center tracking-wider">
              Pendaftaran Akun
            </p>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Alamat Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-700"
                placeholder="yourmail@mail.com"
                {...register("email", { required: "Email harus diisi" })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-700"
                placeholder="Password"
                {...register("password", {
                  required: "Password harus diisi",
                  minLength: {
                    value: 8,
                    message: "Password minimal 8 character",
                  },
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*\d).+$/,
                    message:
                      "Password harus mengandung minimal 1 huruf besar dan 1 angka",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-500 disabled:text-gray-400"
                disabled={Object.keys(errors).length > 0}
              >
                Daftar
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Sudah punya akun?{" "}
              <Link
                href="/login"
                className="font-medium text-blue-600 hover:text-blue-700"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
