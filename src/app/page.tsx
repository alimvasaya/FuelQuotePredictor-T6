
import Header from "./components/Header";
import Hero from "./components/Hero";
import Link from "next/link";



export default function Home() {
  return (
    <div>
      <Header />
      {<Hero /> }
      {/* <Profile />*/}
    </div>
  );
}