import Footer from "./component/layout/footer";
import Navbar from "./component/layout/navbar";
import Contactanos from "./component/sections/contactanos";
import Faq from "./component/sections/faq";
import Galeria from "./component/sections/galeria";
import HeroSection from "./component/sections/hero";
import Planes from "./component/sections/planes";
import Servicios from "./component/sections/servicios";

function App() {
  return (
    <div className="w-full">
      {/* Capa de Fondo Parallax 1 (Más estática, el fondo real) */}
      <div className="fixed inset-0 z-0 parallax-bg-layer-1"></div>

      {/* Capa de Fondo Parallax 2 (Patrones sutiles) */}
      <div className="fixed inset-0 z-0 parallax-bg-layer-2"></div>

      {/* Capa de Fondo Parallax 3 (Figuras geométricas o líneas) */}
      <div className="fixed inset-0 z-0 parallax-bg-layer-3"></div>

      {/* Contenedor para el contenido que se moverá a velocidad normal (sobre las capas parallax) */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        {/* Navbar - Elementos claros sobre fondo oscuro */}
        <Navbar />

        {/* Padding para compensar la fixed navbar */}
        <div className="pt-20 md:pt-20 w-full"></div>

        {/* Hero Section - Primer contenido (se mueve a velocidad normal) */}
        <HeroSection />

        {/* Sección de galeria - Segundo contenido (se mueve a velocidad normal) */}
        <Servicios />

        {/* Sección de galeria - Segundo contenido (se mueve a velocidad normal) */}
        <Planes />

        {/* Seccion de FAQS - Diseño Adaptable */}
        <Faq />

        {/* Sección de Contacto - Diseño Adaptable */}
        <Contactanos />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
