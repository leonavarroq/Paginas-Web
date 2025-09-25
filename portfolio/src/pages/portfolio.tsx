import "../css/portfolio.css";
import { ScrollRevealEffect } from "../efectos/ScrollReveal";
import { UpRevealEffect } from "../efectos/upReveal";

function Portfolio() {
  const items = [
    {
      img: "/gallery-1.jpg",
      titulo: "Titulo",
      category: "Categoria",
    },
    {
      img: "/gallery-2.jpg",
      titulo: "Titulo",
      category: "Categoria",
    },
    {
      img: "/gallery-5.jpg",
      titulo: "Titulo",
      category: "Categoria",
    },
    {
      img: "/gallery-4.jpg",
      titulo: "Titulo",
      category: "Categoria",
    },
    {
      img: "/gallery-6.jpg",
      titulo: "Titulo",
      category: "Categoria",
    },
    {
      img: "/gallery-3.jpg",
      titulo: "Titulo",
      category: "Categoria",
    },
    {
      img: "/gallery-7.jpg",
      titulo: "Titulo",
      category: "Categoria",
    },
    {
      img: "/gallery-9.jpg",
      titulo: "Titulo",
      category: "Categoria",
    },
    {
      img: "/gallery-8.jpg",
      titulo: "Titulo",
      category: "Categoria",
    },
  ];
  // Agrupamos los items en sub-arreglos de 3
  const groupedItems = [];
  for (let i = 0; i < items.length; i++) {
    if (i % 3 === 0) {
      // Creamos un nuevo grupo cada vez que el índice es divisible por 3
      groupedItems.push([]);
    }
    // Añadimos el item al último grupo creado
    groupedItems[groupedItems.length - 1].push(items[i]);
  }

  return (
    <section id="portfolio" className="pt-5 pb-20 px-4 md:px-8 bg-black">
      <div className="mx-6 sm:mx-10">
        <UpRevealEffect>
          <h2 className="text-4xl font-bold text-white-300 mb-12">Galeria</h2>
        </UpRevealEffect>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 :xl:auto-cols-min">
        {groupedItems.map((group, groupIndex) => (
          <div key={groupIndex} className="grid col-span-full sm:col-auto gap-3">
            {group.map((item: any, index) => (
              <ScrollRevealEffect key={index} index={index}>
                <div key={`${groupIndex}-${index}`} className="portfolio-item">
                  <img
                    src={item.img}
                    alt={item.titulo}
                    className="w-full h-40 sm:h-full 2xl:h-80 rounded-lg object-cover object-center cursor-pointer"
                  />
                  <div className="portfolio-content">
                    <h4 className="title text-[16px] lg:text-xl xl:text-3xl 2xl:text-6xl 2xl:pb-10">
                      {item.titulo}
                    </h4>
                    <div className="category">
                      <span className="text-[16px] lg:text-lg xl:text-2xl 2xl:text-4xl">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollRevealEffect>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
