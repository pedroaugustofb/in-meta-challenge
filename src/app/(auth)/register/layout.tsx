import Image from "next/image";
import WorkersImage from "@/assets/workers.svg";

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="hidden h-full items-center justify-center lg:flex">
        <Image src={WorkersImage} alt="in-meta-software" className="w-[500px] h-[430px]" />
      </div>

      <section className="flex h-full flex-col items-center justify-center z-10 w-full lg:max-w-[700px]">{children}</section>
      <aside className="absolute hidden lg:block w-full h-full top-0 z-0 rotate-180 bg-bottom-right-orange-gradient scale-x-[-1]" />
      <aside className="absolute hidden lg:block w-full h-full top-0 z-0 rotate-180 bg-bottom-right-orange-gradient scale-y-[-1] scale-x-[-1]" />
    </>
  );
}
