import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const root = document.getElementById("root");

// In production the root already has SSR HTML — hydrate it.
// In dev the root is empty (no SSR pass) — render fresh.
if (import.meta.env.PROD && root.hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
