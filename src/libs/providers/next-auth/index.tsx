"use client";

import { FC, ReactElement, ReactNode } from "react";

import { SessionProvider } from "next-auth/react";

type T = {
  children: ReactNode;
};

export const NextAuthProvider: FC<T> = ({ children }): ReactElement => {
  return <SessionProvider>{children}</SessionProvider>;
};
