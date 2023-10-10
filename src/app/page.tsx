import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

import ClientPage from "./Client/page";
import AdminPage from "./adminPage/page";
import PreAuth from "./components/PreAuth";

export default async function Home() {
  const session = await getServerSession(options);
  let rolePage;

  if (session?.user.role === "client") {
    rolePage = <ClientPage />;
  } else if (session?.user.role === "admin") {
    rolePage = <AdminPage />;
  }
  return <>{session ? rolePage : <PreAuth />}</>;
}
