import logo from "../../public/logo-bw.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col gap-3">
      <Image src={logo} alt="crm Logo" className="w-20 h-20 rounded-full" />
      <h1 className="text-2xl md:text-3xl font-bold text-center text-grey-600">Welcome to crm Admin Console</h1>
      <p className="text-slate">Please select a module from the sidebar at the left to get started.</p>
    </main>
  );
}
