import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import AOS from "aos";
import "aos/dist/aos.css";
import "./assets/style/Home.css";
import App from "./App.jsx";

function Main() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
      offset: 70,
    });
  }, []);

  return <App />;
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Main />
  </StrictMode>
);