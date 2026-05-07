import React, { useState, useEffect, useRef } from 'react';

interface Props {
  items: {
    id: number;
    label: string;
    color: {
      text: string;
      border: string;
      shadowInset: string;
      shadowOut: string;
    };
    details: string[];
    icon: string;
  }[]
}

/**
 * COMPONENTE DE FLECHA (SVG)
 * Dibuja una línea azul con puntas de flecha en ambos extremos
 * y un círculo decorativo en el centro.
 */
interface ConnectionArrowProps {
  direction: "horizontal" | "vertical"
}
const ConnectionArrow: React.FC<ConnectionArrowProps> = ({ direction = 'horizontal' }) => {
  const isHorizontal = direction === 'horizontal';

  // Estilos base para posicionamiento absoluto
  const baseStyle: React.CSSProperties = {
    position: 'absolute',
    pointerEvents: 'none',
    zIndex: 1,
    display: 'block',
  };

  // Posicionamiento según dirección
  const directionStyle = isHorizontal
    ? { right: '-3rem', top: '50%', transform: 'translateY(-50%)', width: '3rem', height: '20px' }
    : { bottom: '-3rem', left: '50%', transform: 'translateX(-50%)', width: '20px', height: '3rem' };

  return (
    <svg
      style={{ ...baseStyle, ...directionStyle }}
      viewBox={isHorizontal ? "0 0 100 40" : "0 0 40 100"}
      preserveAspectRatio="none"
    >
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="#3b82f6" />
        </marker>
      </defs>

      <line
        x1={isHorizontal ? "10" : "20"}
        y1={isHorizontal ? "20" : "10"}
        x2={isHorizontal ? "90" : "20"}
        y2={isHorizontal ? "20" : "90"}
        stroke="#3b82f6"
        strokeWidth="3"
        markerEnd="url(#arrowhead)"
        markerStart="url(#arrowhead)"
      />

      <circle
        cx={isHorizontal ? "50" : "20"}
        cy={isHorizontal ? "20" : "50"}
        r="6"
        fill="#3b82f6"
      />
    </svg>
  );
};

/**
 * COMPONENTE PRINCIPAL: DynamicConnections
 */

export function WorkflowSection({ items = [] }: Props) {
  const containerRef = useRef<HTMLElement>(null);
  const [columns, setColumns] = useState<number>(0);

  useEffect(() => {
    const updateLayout = () => {
      if (!containerRef.current) return;

      // Obtenemos el estilo computado del grid para saber cuántas columnas hay realmente
      const gridStyle = window.getComputedStyle(containerRef.current);
      const gridTemplateColumns = gridStyle.getPropertyValue('grid-template-columns');

      // Separamos el string (ej: "300px 300px") para contar las columnas reales
      const currentCols = gridTemplateColumns.split(' ').filter(Boolean).length;

      setColumns(currentCols);
    };

    // Ejecutar al montar y cada vez que cambie el tamaño de ventana
    updateLayout();
    window.addEventListener('resize', updateLayout);

    return () => window.removeEventListener('resize', updateLayout);
  }, [items, columns]);

  return (
    <section
      ref={containerRef}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '3rem', // Este gap debe coincidir con el tamaño de las flechas (3rem)
        position: 'relative',
        padding: '1rem',
        width: '100%'
      }}
    >
      {items.map((item, index) => {
        // --- Lógica de Conexiones ---

        // 1. Conexión Horizontal: 
        // Si NO es el último de la fila Y hay un siguiente elemento
        const hasRight = (index + 1) % columns !== 0 && index + 1 < items.length;

        // 2. Conexión Vertical: 
        // Si hay un elemento exactamente debajo (index + número de columnas)
        const hasBottom = index + columns < items.length;

        return (
          <div
            key={item.id || index}
            style={{
              position: 'relative',
              border: '2px solid #3b82f6',
              borderRadius: '12px',
              padding: '2rem',
              minHeight: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              zIndex: 2 // Por encima de las flechas
            }}
          >
            <span style={{ fontWeight: 'bold', color: '#1e293b' }}>
              {item.label}
            </span>

            {/* Flechas */}
            {hasRight && <ConnectionArrow direction="horizontal" />}
            {hasBottom && <ConnectionArrow direction="vertical" />}
          </div>
        );
      })}
    </section>
  );
}