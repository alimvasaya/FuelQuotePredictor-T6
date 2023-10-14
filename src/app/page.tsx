import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { UserProvider } from "@/app/context/UserContext";

import ClientPage from "@/app/clientPage/page";
import AdminPage from "@/app/adminPage/page";
import PreAuth from "./components/Pages/PreAuth";

export default async function Home() {
  let rolePage: React.JSX.Element = (
    <UserProvider>
      <PreAuth />
    </UserProvider>
  );

  const session = await getServerSession(options);

  if (!session) {
    rolePage = (
      <UserProvider>
        <PreAuth />
      </UserProvider>
    );
  }
  if (session?.user.role === "client") {
    rolePage = (
      <UserProvider>
        <ClientPage />
      </UserProvider>
    );
  } else if (session?.user.role === "admin") {
    rolePage = (
      <UserProvider>
        <AdminPage />
      </UserProvider>
    );
  }

  return <div>{rolePage}</div>;
}
