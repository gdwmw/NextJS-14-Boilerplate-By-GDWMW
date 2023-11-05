import type { Metadata, Viewport } from "next";
import { FC, ReactNode } from "react";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "My Page",
  description: "My Page",
};

const MyPageLayout: FC<{ children: ReactNode }> = ({ children }): ReactNode => {
  return children;
};

export default MyPageLayout;
