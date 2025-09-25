import React, { Suspense } from "react";
import "./App.css";
import Footer from "./layout/footer";
const Navbar = React.lazy(() => import("./layout/navbar"));
const AboutMe = React.lazy(() => import("./pages/about"));
const Contact = React.lazy(() => import("./pages/contact"));
const HomeHero = React.lazy(() => import("./pages/home"));
const Portfolio = React.lazy(() => import("./pages/portfolio"));
const Resume = React.lazy(() => import("./pages/resume"));
const Skills = React.lazy(() => import("./pages/skills"));

function App() {
  return (
    <>
      <div className="w-full">
        <div className="fixed z-50 top-0 bottom-0 w-auto overflow-y-auto" id="panel-left">
          <Suspense fallback={<div>Cargando...</div>}>
            <Navbar />
          </Suspense>
        </div>
        <div className="ml-0 2xl:ml-0 sm:ml-[175px]" id="panel-right">
          <Suspense fallback={<div>Cargando...</div>}>
            <HomeHero />
            <AboutMe />
            <Resume />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer></Footer>
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
