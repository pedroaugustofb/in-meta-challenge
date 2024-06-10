import Trades from "./trades";
import HomeHeader from "./header";
import Cards from "./cards";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <Trades />

      <hr className="my-4" />
      <Cards />
    </div>
  );
}
