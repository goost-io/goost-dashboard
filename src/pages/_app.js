import React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Layout from "../../components/layout/layout";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <CssVarsProvider disableTransitionOnChange>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CssVarsProvider>
    </div>
  );
}
