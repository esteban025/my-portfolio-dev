import { useState, useEffect, useRef } from 'react';
import { ConnectionArrow } from '../ArrowConect';
import { Card } from './Card';
import { my_information } from '@/scripts/information';

/**
 * COMPONENTE PRINCIPAL: WorkflowSection
 */

export function CardsContainer() {
  const cards = my_information.sections.workflow.cards;
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
      className='grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] lgs:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-12 w-full relative'
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

          <Card
            key={card.id}
            card={card}
            index={index}
          >
            {/* Flechas */}
            {hasRight && <ConnectionArrow direction="horizontal" />}
            {hasBottom && <ConnectionArrow direction="vertical" />}
          </Card>
        );
      })}
    </section>
  );
}