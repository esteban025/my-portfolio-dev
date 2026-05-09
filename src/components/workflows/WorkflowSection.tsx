import { useState, useEffect, useRef } from 'react';
import { ConnectionArrow } from '../ArrowConect';
import type { CardsWorkflow } from '@/types/information';

/**
 * COMPONENTE PRINCIPAL: WorkflowSection
 */

export function WorkflowSection({ cards = [] }: { cards: CardsWorkflow[] }) {
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
  }, [cards, columns]);

  return (
    <section
      ref={containerRef}
      // el gap-12 debe coincidir con el tamaño de las flechas (3rem)
      className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-12 w-full relative'
    >
      {cards.map((card, index) => {
        // --- Lógica de Conexiones ---

        // 1. Conexión Horizontal: 
        // Si NO es el último de la fila Y hay un siguiente elemento
        const hasRight = (index + 1) % columns !== 0 && index + 1 < cards.length;

        // 2. Conexión Vertical: 
        // Si hay un elemento exactamente debajo (index + número de columnas)
        const hasBottom = index + columns < cards.length;

        return (
          <article
            key={card.id || index}
            className={`relative z-2 border border-gray-700 rounded-xl p-4 space-y-2 ${card.color?.border} ${card.color?.text}`}

            style={{
              boxShadow: `inset 0px 0px 40px ${card.color?.shadowInset}, 0 0 20px ${card.color?.shadowOut}`
            }}
          >

            <header className="flex items-center gap-2">
              <div className="size-10">
                {card.icon && <card.icon />}
              </div>
              <h3 className="text-xl">{card.label}</h3>
            </header>

            <div className="content-card">
              <ul className="text-gray-400">
                {card.details.map((it, idx) => (
                  <li key={idx}>{it}</li>
                ))}
              </ul>
            </div>


            {/* Flechas */}
            {hasRight && <ConnectionArrow direction="horizontal" />}
            {hasBottom && <ConnectionArrow direction="vertical" />}
          </article>
        );
      })}
    </section>
  );
}