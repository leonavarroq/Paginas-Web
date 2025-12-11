// src/components/FlavorCard.tsx
import React from 'react';
import Image from 'next/image';
import { FlavorCardProps } from '@/types/flavor';

export const FlavorCard: React.FC<FlavorCardProps> = ({ flavor }) => {
  return (
    // Contenedor principal con sombra y esquinas redondeadas
    <div className="relative overflow-hidden rounded-xl shadow-2xl transition-all duration-300 hover:shadow-pink-500/50 hover:scale-[1.02] bg-white">
      
      {/* Etiqueta de Nuevo Sabor */}
      {flavor.isNew && (
        <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
          ¡NUEVO!
        </span>
      )}

      {/* 1. Área de Imagen (usa next/image para optimización) */}
      <div className="relative w-full h-64">
        {/*
          IMPORTANTE: Debes tener estas imágenes en tu carpeta /public o en un CDN
          y configurar el hostname en next.config.js si son externas.
        */}
        <Image
          src={flavor.imageUrl}
          alt={`Helado sabor ${flavor.name}`}
          fill={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          objectFit='cover'
          className="transition-opacity duration-500 opacity-90"
        />
        {/* Superposición suave para contraste del texto */}
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      {/* 2. Área de Contenido y Precios */}
      <div className="p-5 text-gray-800">
        <h3 className="text-2xl font-extrabold mb-1 text-pink-600">
          {flavor.name}
        </h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {flavor.description}
        </p>

        <div className="flex items-end justify-between mt-4 border-t pt-3">
          {/* Precio y Categoría */}
          <div className="flex flex-col">
            <span className="text-sm text-gray-500 font-medium">{flavor.category.toUpperCase()}</span>
            <span className="text-3xl font-black text-green-600">
              ${flavor.priceSmall.toFixed(2)}
            </span>
          </div>

          {/* Botón de Selección */}
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 shadow-lg hover:shadow-pink-700/50">
            Pedir
          </button>
        </div>
      </div>
    </div>
  );
};