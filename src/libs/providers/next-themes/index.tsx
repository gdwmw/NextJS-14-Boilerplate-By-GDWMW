"use client";

import { FC, ReactElement, ReactNode } from "react";

import { ThemeProvider } from "next-themes";

type T = {
  children: ReactNode;
};

export const NextThemesProvider: FC<T> = ({ children }): ReactElement => {
  return (
    <ThemeProvider enableColorScheme={false} enableSystem>
      {children}
    </ThemeProvider>
  );
};
