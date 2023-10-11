import React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Layout from "../../components/layout/layout";
import { Provider } from "react-redux";
import {configureStoreWith} from "@/redux/store";
import {useRouter} from "next/router";

const store = configureStoreWith();
export default function App({ Component, pageProps }) {

    const router = useRouter();

    // Define an array of routes where you don't want to use the Layout component
    const routesWithoutLayout = ['/login']; // Add the routes where Layout is not needed

    // Check if the current route is in the array of routes without Layout
    const useLayout = !routesWithoutLayout.includes(router.pathname);

    return (
    <div>
      <Provider store={store}>
        <CssVarsProvider disableTransitionOnChange>
            {useLayout ? <Layout><Component {...pageProps}/></Layout> : <Component {...pageProps}/>}
        </CssVarsProvider>
      </Provider>
    </div>
  );
}
