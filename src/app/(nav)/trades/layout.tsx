import { TradeProvider } from "@/contexts/trade.context";

export default function TradeLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <>
      <TradeProvider>{children}</TradeProvider>
    </>
  );
}
