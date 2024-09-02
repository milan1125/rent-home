import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
     domain="dev-1zr1ogdbpdovgzzw.us.auth0.com"
     clientId="k04iq8vUDElXge4botZeQ5W9JWALmfCL"
     authorizationParams={{
      redirect_uri: "https://rent-home-flax.vercel.app"
     }}
     audience="http://localhost:8000"
     scope="openid profile email"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
