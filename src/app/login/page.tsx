import { Metadata } from "next";
import Link from "next/link";
import { UserAuthForm } from "@/app/login/components/user-auth-form";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
};

export default function AuthenticationPage() {
  return (
    <div className="container relative flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0 h-screen">
      <div className="relative h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 to-indigo-700" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <Image src="/logo-bw.png" alt="crm Admin" width={32} height={32} />
          <span className="ml-2 text-white">crm Admin</span>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Manage <strong>crm!</strong>
              <br />
              India’s Fastest growing new-age digital lending platform that leverages state-of-the-art technology and data to make lending safe, quick, and easy.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-indigo-800">Welcome to crm</h1>
            <p className="text-sm text-muted-foreground text-indigo-800">Enter your email and password below to login</p>
          </div>
          <UserAuthForm />
        </div>
      </div>
    </div>
  );
}
