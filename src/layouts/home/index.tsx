import { FC, ReactElement } from "react";

import { Footer, Header, Main } from "./modules";

export const HomeLayout: FC = (): ReactElement => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
