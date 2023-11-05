"use client";

import { ThemeProvider } from "next-themes";
import { FC, ReactElement, ReactNode } from "react";

export const NextThemesProvider: FC<{ children: ReactNode }> = ({ children }): ReactElement => {
  return (
    <ThemeProvider attribute="class" enableSystem enableColorScheme={false}>
      {children}
    </ThemeProvider>
  );
};
