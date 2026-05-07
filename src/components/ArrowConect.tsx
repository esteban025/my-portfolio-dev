
interface Props {
  direction: string;
  className: string;
}

export const ConnectionArrow = ({ direction = "horizontal", className = "" }: Props) => {
  const isHorizontal = direction === "horizontal"

  return (
    <svg
      className={`connection-arrow ${className}`}
      viewBox={isHorizontal ? "0 0 100 20" : "0 0 20 100"}
      preserveAspectRatio="none"
      style={{
        position: 'absolute',
        pointerEvents: "none",
        zIndex: 1,
      }}
    >

      {/* Definición de la punta de la flecha */}
      <defs>
        <marker id="arrowhead" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <polygon points="0 0, 6 3, 0 6" fill="#3b82f6" /> {/* Color azul azul */}
        </marker>
      </defs>

      {/* Línea de la flecha con marcadores en ambos extremos */}
      <line
        x1={isHorizontal ? "5" : "10"}
        y1={isHorizontal ? "10" : "5"}
        x2={isHorizontal ? "95" : "10"}
        y2={isHorizontal ? "10" : "95"}
        stroke="#3b82f6"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
        markerStart="url(#arrowhead)"
      />

      {/* Punto central azul */}
      <circle
        cx={isHorizontal ? "50" : "10"}
        cy={isHorizontal ? "10" : "50"}
        r="4"
        fill="#3b82f6"
      />

    </svg>
  )
}