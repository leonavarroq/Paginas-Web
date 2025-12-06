import React, { useState, useEffect } from "react"; // 👈 Importamos Hooks
import DynamicBackground from "./utils/DynamicBackground";
import Footer from "./component/layout/footer";
import Navbar from "./component/layout/navbar";
import Contactanos from "./component/sections/form";
import Faq from "./component/sections/faq";
import Galeria from "./component/sections/galeria";
import HeroSection from "./component/sections/hero";
import Planes from "./component/sections/planes";
import Servicios from "./component/sections/servicios";
import SignUpModal from "./template/signUp/SignUpForm";
import Reviews from "./component/sections/reviews";
import ContactUs from "./component/sections/contactus";
import FormContacto from "./component/sections/form";

function App() {
  // 1. ESTADO CENTRALIZADO DEL MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Funciones que se pasarán como props
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // 2. LÓGICA DE APERTURA AUTOMÁTICA (En carga de página)
  useEffect(() => {
    // Solo se dispara si el modal no está ya abierto
    if (!isModalOpen) {
      const timer = setTimeout(() => {
        setIsModalOpen(true);
      }, 0.5);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <DynamicBackground>
      {/* 3. MODAL - Recibe el estado y las funciones de control */}
      <SignUpModal showModal={isModalOpen} closeModal={closeModal} />

      <div className="w-lvw md:w-dvw">
        {/* Contenedor del Contenido (z-10) - Se mueve con el scroll */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center">
          {/* Navbar */}
          <Navbar />

          {/* 4. HERO SECTION - Recibe la función para abrir el modal al hacer clic */}
          <HeroSection onAffiliateClick={openModal} />
          <Reviews />
          <Servicios />
          <Planes />
          <ContactUs />
          <Faq />
          <FormContacto />
          <Footer />
        </div>
      </div>
    </DynamicBackground>
  );
}

export default App;
