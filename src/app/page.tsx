import { options } from './api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';

import ClientPage from '@/app/clientPage/page';
import AdminPage from '@/app/adminPage/page';
import PreAuth from './components/Pages/PreAuth';

export default async function Home() {
  let rolePage: React.JSX.Element = <PreAuth />;

  const session = await getServerSession(options);

  if (!session) {
    rolePage = <PreAuth />;
  }
  if (session?.user.role === 'client') {
    rolePage = <ClientPage />;
  } else if (session?.user.role === 'admin') {
    rolePage = <AdminPage />;
  }

  return <div>{rolePage}</div>;
}
