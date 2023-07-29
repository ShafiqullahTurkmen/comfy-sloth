import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log({
  domain: process.env.REACT_APP_DOMAIN,
  client: process.env.REACT_APP_CLIENT_ID,
  secret: process.env.REACT_APP_CLIENT_SECRET,
});

root.render(

  <Auth0Provider
    domain="dev-6sg1tpa4.us.auth0.com"
    clientId="u3EmFCkMjEbxuZ0veqdMGuldyugW15R2"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
