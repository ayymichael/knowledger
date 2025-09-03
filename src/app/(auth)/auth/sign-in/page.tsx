import { SignInForm } from '@/modules/auth/sign-in-form.server';
import { Card, CardContent, CardHeader } from '@/shared/ui/card';
import Spinner from '@/shared/ui/spinner';
import { Suspense } from 'react';

export default function AuthenticationPage() {
  return (
    <div className='container mx-auto relative flex-col w-full items-center justify-center self-center pt-24'>
      <Card className='max-w-[350px] mx-auto'>
        <CardHeader className='flex flex-col space-y-2 text-center'>
          <h1 className='text-2xl font-semibold tracking-tight'>Войти в аккаунт</h1>
        </CardHeader>
        <CardContent className='grid gap-4'>
          <Suspense fallback={<Spinner className='mr-2 h-4 w-4 animate-spin' aria-label='Вход' />}>
            <SignInForm />
          </Suspense>
          <div className='px-0 text-center text-sm text-muted-foreground'>
            Нажимая продолжить вы соглашаетесь с
            <div className='underline underline-offset-4 hover:text-primary'>Пользовательским соглашением</div>и
            <div className='underline underline-offset-4 hover:text-primary'>Политикой конфиденциальности.</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
