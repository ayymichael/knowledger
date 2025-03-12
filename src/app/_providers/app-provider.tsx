"use client";

import { ComposeChildren } from "@/shared/lib/react";
import { ThemeProvider } from "next-themes";
import React, { ReactNode } from "react";

export default function AppProvider({ children }: { children: ReactNode }) {
  return (
    <ComposeChildren>
      <ThemeProvider>{children}</ThemeProvider>
    </ComposeChildren>
  );
}
