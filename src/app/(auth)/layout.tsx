import Image from "next/image";
import WorkersImage from "@/assets/workers.svg";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-screen justify-center bg-gray-50 gap-16 lg:gap-40 p-4">
      <section className="flex h-full flex-col items-center justify-center z-10">{children}</section>

      <div className="hidden h-full items-center justify-center lg:flex">
        <Image src={WorkersImage} alt="in-meta-software" className="w-[400px] h-[350px]" />
      </div>

      <aside className="absolute hidden lg:block w-full h-full top-0 z-0 to-primary-400 rotate-180 bg-bottom-right-green-gradient" />
      <aside className="absolute hidden lg:block w-full h-full top-0 z-0 to-primary-400 rotate-180 bg-bottom-right-green-gradient scale-y-[-1]" />
    </main>
  );
}
