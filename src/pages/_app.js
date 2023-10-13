import React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import Layout from "../../components/layout/layout";
import { Provider } from "react-redux";
import { configureStoreWith } from "@/redux/store";
import { useRouter } from "next/router";
import JoySignInSideTemplate from "@/pages/login";
import "material-react-toastify/dist/ReactToastify.css";

const store = configureStoreWith();

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Define an array of routes that require authentication
  const unProtectedRoutes = ["/login"]; // Add the routes that require authentication

  // Check if the current route is in the array of protected routes
  const isProtectedRoute = !unProtectedRoutes.includes(router.pathname);

  // Check if the user is authenticated based on your criteria (e.g., access token JWT)
  /* Implement your authentication check here */

  //here you can check if the user is authenticated
  //   const isAuthenticated = tokenValidation();
  const isAuthenticated = true;

  return (
    <div>
      <Provider store={store}>
        <CssVarsProvider disableTransitionOnChange>
          {isProtectedRoute && isAuthenticated ? (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          ) : (
            <JoySignInSideTemplate />
          )}
        </CssVarsProvider>
      </Provider>
    </div>
  );
}
