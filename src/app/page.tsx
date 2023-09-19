import Admin from "./components/Admin/page";
import Form from "./components/Forum/page";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Link from "next/link";
import QuoteHistory from "./components/Fuel_Quote_History/page";
import Clinet_profiles from "./components/Client_profiles/page";
import Analytics from "./components/Analytics/page";


export default function Home() {
  return (
    <div>
      <Header />
      {<Hero /> }
      {/* <Profile />*/}
      <Link href="components#Forum"></Link>
      <Form />
      <Link href="components#Admin"></Link>
      <Admin />
      <QuoteHistory />
      <Link href="components#Client_profiles"></Link>
      <Clinet_profiles />

    </div>
  );
}