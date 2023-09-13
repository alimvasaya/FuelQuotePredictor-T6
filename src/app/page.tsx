import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      {/* <Hero /> */}
      {/* <Profile /> */}
      <QuoteForm />
    </div>
  );
}

export function Forum() {
  return (
    <div>
      <Form />
    </div>
  );
}