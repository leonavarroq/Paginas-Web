import React, { FC, useEffect, useState } from 'react';
import { SedesTooltipProps } from '@/types/sedes';
const LINE_HEIGHT = 20; // Altura de la línea de conexión en píxeles

const SedesTooltip: FC<SedesTooltipProps> = ({ sedes, stateName, position }) => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  const tooltipStyle: React.CSSProperties = {
    position: 'absolute',
    left: position.x,
    top: position.y,
    transform: `translate(-50%, calc(-100% - ${LINE_HEIGHT}px))`,
    // Estilos visuales:
    zIndex: 1000,
    backgroundColor: '#5A0B99', 
    color: 'white',
    padding: '10px 15px',
    borderRadius: '8px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
    maxWidth: '300px',
    pointerEvents: 'none',
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 0.3s ease-in-out'
  };

  const lineStyle: React.CSSProperties = {
    position: 'absolute',
    top: '100%', 
    left: '50%',
    transform: 'translateX(-50%)',
    width: '2px',
    height: `${LINE_HEIGHT}px`,
    backgroundColor: '#5A0B99',
  };

  return (
    <div className="sedes-tooltip" style={tooltipStyle}>
      <div className="tooltip-line" style={lineStyle} />
      <h3 className='mt-0 border-b border-white border-solid pb-1.5 text-white'>
        Sucursales en {stateName}
      </h3>
      
      {/* Lista de Sedes */}
      <ul className="list-unstyled p-0 m-0 pt-1.5">
        {sedes.map((sede, index) => (
          <li key={index} className='mb-3'>
              <strong className='text-sm'>{sede.name}</strong>
              <p className="m-0 text-sm text-shadow-white">📍 {sede.address}</p>
            <p className="m-0 text-sm text-gray-500">📞 {sede.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SedesTooltip;