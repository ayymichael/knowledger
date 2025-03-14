"use client";

import { AppSessionProvider } from "@/entities/session/app-session-provider";
import { queryClient } from "@/shared/api/query-client";
import { ComposeChildren } from "@/shared/lib/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import React, { ReactNode } from "react";

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
