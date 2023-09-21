import Header from "./components/Header";
import ClientPage from "./Client/page";
import AdminPage from "./Admin/page";
import SignForm from "./components/SignForm";

export default function Home() {
  return (
    <div>
      <Header />
      <SignForm />
    </div>
  );
}
