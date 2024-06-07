import Image from "next/image";
import Workers2Image from "@/assets/workers2.svg";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section className="flex h-full flex-col items-center justify-center z-10 w-full lg:max-w-[700px]">{children}</section>
      <div className="hidden h-full items-center justify-center lg:flex">
        <Image src={Workers2Image} alt="in-meta-software" className="w-[500px] h-[430px]" />
      </div>

      <aside className="absolute hidden lg:block w-full h-full top-0 z-0 rotate-180 bg-bottom-right-green-gradient" />
      <aside className="absolute hidden lg:block w-full h-full top-0 z-0 rotate-180 bg-bottom-right-green-gradient scale-y-[-1]" />
    </>
  );
}
