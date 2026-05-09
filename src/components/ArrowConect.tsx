interface ConnectionArrowProps {
  direction: "horizontal" | "vertical"
}
export const ConnectionArrow: React.FC<ConnectionArrowProps> = ({ direction = 'horizontal' }) => {
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