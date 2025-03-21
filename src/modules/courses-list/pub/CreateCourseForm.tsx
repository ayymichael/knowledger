'use client';

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Textarea } from '@/shared/ui/textarea';
import { useTransition } from 'react';
import { useForm, Form, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import createCourseAction from '../actions';
import { Button } from '@/shared/ui/button';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export default function CreateCourseForm({
  className,
  revalidatePagePath,
}: {
  className?: string;
  revalidatePagePath: string;
}) {
  const [isCreateTransition, startCreateTransition] = useTransition();
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
    },
  });

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          startCreateTransition(async () => {
            createCourseAction(data, revalidatePagePath);
          });
        })}
        className={cn(className, 'space-y-8')}
      >
        <FormField
          name='name'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder='Name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name='description'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder='Description...' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className='mt-8' disabled={isCreateTransition} type='submit'>
          Create
        </Button>
      </form>
    </FormProvider>
  );
}
