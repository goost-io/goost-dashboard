import React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Layout from "../../components/layout/layout";
import {configureStoreWith} from "@/redux/store";
import { Provider } from "react-redux";

const store = configureStoreWith();
export default function App({ Component, pageProps }) {
  return (
    <div>
        <Provider store={store}>
        <CssVarsProvider disableTransitionOnChange>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CssVarsProvider>
        </Provider>
    </div>
  );
}
