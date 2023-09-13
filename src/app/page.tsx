import Header from "./components/Header";
import Hero from "./components/Hero";
import Form from "./components/Form";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
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