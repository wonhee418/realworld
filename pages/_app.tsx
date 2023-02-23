import "@/styles/globals.css";
import { CustomAppProps } from "@/types";
import { ReactNode } from "react";
import { DefaultSeo } from "next-seo";

const noop = (page: ReactNode) => page;

const App = ({ Component, pageProps, router }: CustomAppProps) => {
  const getLayout = Component.getLayout || noop;

  return (
    <>
      <link rel="stylesheet" href="//demo.productionready.io/main.css" />
      <DefaultSeo defaultTitle="" titleTemplate="" />
      {getLayout(<Component {...pageProps} />, { pageProps, router })}
    </>
  );
};

export default App;
