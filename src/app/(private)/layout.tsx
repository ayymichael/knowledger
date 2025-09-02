import AuthorizedGuard from '@/modules/auth/authorized-guard';
import AppHeader from '@/widgets/app-header/AppHeader';

export default async function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppHeader variant='private' />
      <AuthorizedGuard>{children}</AuthorizedGuard>
    </>
  );
}
