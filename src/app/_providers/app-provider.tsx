'use client';

import { queryClient } from '@/shared/api/query-client';
import { ComposeChildren } from '@/shared/lib/react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@/modules/theme/ThemeProvider';
import React, { ReactNode } from 'react';
import { AppSessionProvider } from '@/entities/user/session';

export default function AppProvider({ children }: { children: ReactNode }) {
  return (
    <ComposeChildren>
      <AppSessionProvider />
      <ThemeProvider />
      <QueryClientProvider client={queryClient} />
      {children}
    </ComposeChildren>
  );
}
