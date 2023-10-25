import "./index.css";

import "aos/dist/aos.css";
import "animate.css";
import AOS from "aos";
import { useEffect } from "react";
import { DarkContext } from "./components/context/DarkContext";
import { ModalContext } from "./components/context/ModalContext";
import { DescriptionsProyects } from "./components/modal/DescriptionsProyects";
import { Routes, Route } from "react-router-dom";
import PaginasPrincipal from "./pages/PaginasPrincipal";
function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in", delay: 50 });
  }, []);

  return (
    <>
      <DarkContext>
        <ModalContext>
          <Routes>
            <Route
              path='/'
              element={<PaginasPrincipal />}
            />
            <Route
              path='/:id'
              element={<DescriptionsProyects />}
            />
          </Routes>
        </ModalContext>
      </DarkContext>
    </>
  );
}

export default App;
