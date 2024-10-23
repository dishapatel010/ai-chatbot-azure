import { AppSidebar } from '@/components/app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

import { auth } from '../(auth)/auth';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  let session = await auth();
  return (
    <SidebarProvider>
      <AppSidebar user={session?.user} />
      <main>{children}</main>
    </SidebarProvider>
  );
}