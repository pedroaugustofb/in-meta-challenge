import Sidebar from "@/components/layout/sidebar";
import Header from "@/components/layout/header";
import AddCardDialog from "@/components/dialogs/add-card-dialog";
import { CardProvider } from "../../contexts/card.context";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <CardProvider>
        <AddCardDialog />
        <Sidebar />
        <div className="flex w-full flex-col items-center lg:pl-[100px] lg:pr-12 navbar_margin:pl-2">
          <div className="grid w-full max-w-[1360px] gap-4 p-4 pt-0 md:gap-11">
            <div className="flex w-full flex-col items-center lg:pl-[100px] lg:pr-12 navbar_margin:pl-2">
              <div className="grid w-full max-w-[1360px] gap-4">
                <Header />
                {children}
              </div>
            </div>
          </div>
        </div>
      </CardProvider>
    </main>
  );
}
