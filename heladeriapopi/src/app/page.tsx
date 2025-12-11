'use client';
import { mockFlavors } from "@/data/flavors-mock";
import { FlavorCard } from "./components/FlavorCard";
import { useMemo, useState } from "react";
import { Filters, Flavor } from "@/types/flavor";
import { FilteringSidebar } from "./util/FilterFlavors";
import { VenezuelaMap } from "./components/VenezuelaMapa";
import { Navbar } from "./components/navbar";
import HeroSection from "./components/hero";
import { Footer } from "./components/footer";

export default function HomePage() {

      const heroStyles:React.CSSProperties = {
          backgroundImage: 'url(/images/background_conos.png)',
          backgroundPosition:'center',
          backgroundAttachment:'fixed',
          backgroundColor:'#6A0DAD',
      }

  const [filters, setFilters] = useState<Filters>({
    category: [],
    maxPrice: 4.00,
    showNew: false,
  });

  // 2. Lógica de Filtrado Optimizada con useMemo
  const filteredFlavors = useMemo(() => {
    return mockFlavors.filter((flavor: Flavor) => {
      // 2.1 Filtrar por Categoria
      const categoryMatch = 
        filters.category.length === 0 || filters.category.includes(flavor.category); 

      // 2.2. Filtrar por Precio Máximo
      const priceMatch = flavor.priceSmall <= filters.maxPrice;

      // 2.3. Filtrar por Sabores Nuevos
      const newMatch = !filters.showNew || (filters.showNew && flavor.isNew);

      return categoryMatch && priceMatch && newMatch;
    });
  }, [filters]);
  
  return (
    <main className="text-white bg-purple-950" style={heroStyles}>

      {/* Barra de navegacion */}
      <div className="fixed top-0 left-0 w-full z-50 bg-[#6600A2] shadow-lg">
          <Navbar />
      </div>

      {/* Productos  */}

      <HeroSection />
      <div className="backdrop-blur-xs z-2">
            <div className="absolute inset-0 bg-gray-900 opacity-30"></div>
            <div className="container mx-auto w-full">
            {/* Productos  */}
            <div className="w-full mx-auto flex gap-8 mb-16 ">
              {/* Columna de la Barra Lateral */}
              <div className="w-1/4 hidden lg:block">
                <FilteringSidebar filters={filters} setFilters={setFilters} />
              </div>

            {/* Columna del Catálogo de Sabores */}
              <section className="w-full lg:w-3/4">
                {filteredFlavors.length === 0 ? (
                  <p className="text-center text-xl text-gray-600 mt-10">
                    No se encontraron sabores con los filtros seleccionados.
                  </p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {filteredFlavors.map(flavor => (
                      <FlavorCard key={flavor.id} flavor={flavor} />
                    ))}
                  </div>
                )}
              </section>
              </div>
            </div>

                <hr className="text-purple-500" />
              {/* --- Mapa con Localidades --- */}
            <section className="w-full relative">
                <VenezuelaMap />
            </section>
      
      {/* ----------------------------- */}
      <Footer />
      </div>

    </main>
  );
}