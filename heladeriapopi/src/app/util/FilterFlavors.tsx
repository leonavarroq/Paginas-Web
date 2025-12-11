// src/components/FilteringSidebar.tsx
import React from 'react';
import { Filters } from '@/types/flavor';

interface FilteringSidebarProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const CATEGORIES = ['barquilla','tina', 'especial'];
const MAX_PRICE_OPTIONS = [2.50, 3.00, 4.00, 999];

export const FilteringSidebar: React.FC<FilteringSidebarProps> = ({ filters, setFilters }) => {
  // Función para manejar el cambio de categorías
  const handleCategoryChange = (category: 'barquilla' | 'tina' | 'especial', isChecked: boolean) => {
    setFilters(prev => {
      const updatedCategories = isChecked
        ? [...prev.category, category] // Añadir si está marcado
        : prev.category.filter(c => c !== category); // Quitar si se desmarca
      return { ...prev, category: updatedCategories };
    });
  };

  // Función para manejar el cambio de precio máximo
  const handlePriceChange = (price: number) => {
    setFilters(prev => ({ ...prev, maxPrice: price }));
  };

  // Función para manejar el toggle de "NUEVO"
  const handleNewToggle = (isChecked: boolean) => {
    setFilters(prev => ({ ...prev, showNew: isChecked }));
  };

  return (
    <aside className="p-6 bg-white rounded-xl shadow-lg h-full sticky top-8">
      <h3 className="text-2xl font-bold text-pink-700 mb-6 border-b pb-3">
        Filtrar Sabores
      </h3>

      {/* 1. Filtro por Categoría */}
      <div className="mb-6">
        <h4 className="font-semibold text-lg text-gray-800 mb-3">Tipo de Helado</h4>
        {CATEGORIES.map(category => (
          <div key={category} className="flex items-center mb-2">
            <input
              type="checkbox"
              id={category}
              checked={filters.category.includes(category as 'barquilla' | 'tina' | 'especial')}
              onChange={(e) => handleCategoryChange(category as 'barquilla' | 'tina' | 'especial', e.target.checked)}
              className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500"
            />
            <label htmlFor={category} className="ml-2 capitalize text-gray-700">{category}</label>
          </div>
        ))}
      </div>
      
      {/* 2. Filtro por Precio Máximo */}
      <div className="mb-6">
        <h4 className="font-semibold text-lg text-gray-800 mb-3">Precio Máximo ($)</h4>
        {MAX_PRICE_OPTIONS.map(price => (
          <div key={price} className="flex items-center mb-2">
            <input
              type="radio"
              id={`price-${price}`}
              name="maxPrice"
              checked={filters.maxPrice === price}
              onChange={() => handlePriceChange(price)}
              className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 focus:ring-pink-500"
            />
            <label htmlFor={`price-${price}`} className="ml-2 text-gray-700">Hasta ${price.toFixed(2)}</label>
          </div>
        ))}
      </div>

      {/* 3. Filtro "Solo Nuevo" */}
      <div className="mb-6 border-t pt-4">
        <div className="flex items-center justify-between">
          <label htmlFor="showNew" className="font-semibold text-lg text-gray-800">Solo Sabores Nuevos</label>
          <input
            type="checkbox"
            id="showNew"
            checked={filters.showNew}
            onChange={(e) => handleNewToggle(e.target.checked)}
            className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500"
          />
        </div>
      </div>
    </aside>
  );
};