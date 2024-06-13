"use client";

import { FC, ReactElement, ReactNode } from "react";

import { ThemeProvider } from "next-themes";

export const NextThemesProvider: FC<{ children: ReactNode }> = ({ children }): ReactElement => {
  return (
    <ThemeProvider attribute="class" enableColorScheme={false} enableSystem>
      {children}
    </ThemeProvider>
  );
};
