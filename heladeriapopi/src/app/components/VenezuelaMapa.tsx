'use client';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { VenezuelaSvgContent } from '../util/VenezuelaSvgContent';
import { StoreInfo } from '@/types/storeinfo';
import { Sede, SedesTooltipProps } from '@/types/sedes';
import { storeLocations } from '@/data/locations-mock';
import SedesTooltip from './sedes-tooltips';
// Esta función es para colorear estados sin sedes
export const getStoreData = (stateName: string) => {
  return storeLocations[stateName] || { 
    name: stateName, 
    storeCount: 0, 
    color: '#CFD8DC',
    sedes:[]
  };
};

// --- Componente Principal ---
export const VenezuelaMap: React.FC = () => {
  const [hoveredData, setHoveredData] = useState<SedesTooltipProps | null>(null);
    const mapContainerRef = useRef<HTMLDivElement>(null);

  // 1. Manejador de Entrada
  const handleMouseEnter = useCallback((event: MouseEvent) => {
    const pathElement = event.currentTarget as SVGPathElement;
    const stateName = pathElement.id;

    const rect = pathElement.getBoundingClientRect();
    const containerRect = mapContainerRef.current?.getBoundingClientRect();

    if (!containerRect) return;

    const relativeX = (rect.left + rect.width / 2) - containerRect.left;
    const relativeY = (rect.top + rect.height / 2) - containerRect.top;

    const data = getStoreData(stateName);

    if(data.sedes && data.sedes.length > 0){
        setHoveredData({
            sedes: data.sedes,
            stateName: data.name,
            position:{
                x: relativeX,
                y: relativeY,
            }
        });
    } else {
        setHoveredData(null)
    }
    // 💡 Aplicar estilos de hover directamente. Se recomienda CSS.
    pathElement.style.opacity = '0.8';
  }, [setHoveredData]);

  // 2. Manejador de Salida
  const handleMouseLeave = useCallback((event: MouseEvent) => {
    const pathElement = event.currentTarget as SVGPathElement;
    
    // Limpiar estados
    setHoveredData(null);

    // Limpiar estilos de hover
    pathElement.style.opacity = '1';
    pathElement.classList.remove('map-state-path-hover');
  }, []);

  useEffect(() => {
    const mapPaths = document.querySelectorAll('#venezuela-map-svg path');
    
    mapPaths.forEach(path => {
      const pathElement = path as SVGPathElement;
      const stateName = pathElement.id;
      if (!stateName) return;
      
      // Aplicar estilos iniciales y datos
      const stateData = getStoreData(stateName);

      pathElement.setAttribute('fill', stateData.color);
      pathElement.setAttribute('stroke', '#374151');
      pathElement.setAttribute('stroke-width', '0.5');
      pathElement.classList.add('cursor-pointer', 'transition-all', 'duration-200', 'map-state-path');
      // Adjuntar los handlers NATIVOS
      pathElement.addEventListener('mouseenter', handleMouseEnter as EventListener);
      pathElement.addEventListener('mouseleave', handleMouseLeave as EventListener);
    });

    return () => {
      mapPaths.forEach(path => {
        path.removeEventListener('mouseenter', handleMouseEnter as EventListener);
        path.removeEventListener('mouseleave', handleMouseLeave as EventListener);
      });
    };
  }, [handleMouseEnter, handleMouseLeave]);  

  return (
      <div className="p-8 rounded-xl  relative max-w-4xl mx-auto" ref={mapContainerRef}>
        <h3 className="text-3xl font-bold text-yellow-300 mb-6 text-center">
          Nuestras Sedes en Venezuela
        </h3>

        {/* Área del Mapa SVG */}
        <div className="w-full h-auto ">
          <VenezuelaSvgContent
            id="venezuela-map-svg" 
            className="w-full h-auto " 
            aria-label="Mapa de Venezuela con ubicaciones de Heladería Popi"
          />
        </div>

        {/* Tooltip Avanzado de Sedes */}
        {hoveredData && (
          <SedesTooltip
          sedes={hoveredData.sedes}
          stateName={hoveredData.stateName}
          position={hoveredData.position}
          />
          )}
        {/* ... Leyenda de Colores (se mantiene igual) ... */}
      </div>
  );
};