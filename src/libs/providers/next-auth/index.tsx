"use client";

import { FC, PropsWithChildren, ReactElement } from "react";

import { SessionProvider } from "next-auth/react";

type T = PropsWithChildren;

export const NextAuthProvider: FC<T> = ({ ...props }): ReactElement => {
  return <SessionProvider>{props.children}</SessionProvider>;
};
