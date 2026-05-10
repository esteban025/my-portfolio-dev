interface ConnectionArrowProps {
  direction: "horizontal" | "vertical";
}

export const ConnectionArrow: React.FC<ConnectionArrowProps> = ({
  direction = "horizontal",
}) => {
  const isHorizontal = direction === "horizontal";

  const baseStyle: React.CSSProperties = {
    position: "absolute",
    pointerEvents: "none",
    zIndex: 1,
    display: "block",
  };

  // ⚠️ NO SE CAMBIA EL -3rem
  const directionStyle = isHorizontal
    ? {
      right: "-3rem",
      top: "50%",
      transform: "translateY(-50%)",
      width: "3rem",
      height: "20px",
    }
    : {
      bottom: "-3rem",
      left: "50%",
      transform: "translateX(-50%)",
      width: "20px",
      height: "3rem",
    };

  return (
    <svg
      style={{ ...baseStyle, ...directionStyle }}
      viewBox={isHorizontal ? "0 0 100 40" : "0 0 40 100"}
      preserveAspectRatio="none"
    >
      <defs>
        {/* Glow suave para la línea */}
        <filter id="lineGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Glow fuerte para el nodo */}
        <filter id="nodeGlow" x="-200%" y="-200%" width="400%" height="400%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Línea base oscura (tipo cable) */}
      <line
        x1={isHorizontal ? "5" : "20"}
        y1={isHorizontal ? "20" : "5"}
        x2={isHorizontal ? "95" : "20"}
        y2={isHorizontal ? "20" : "95"}
        stroke="rgba(0, 255, 255, 0.25)"
        strokeWidth="2"
      />

      {/* Línea neon encima */}
      <line
        x1={isHorizontal ? "5" : "20"}
        y1={isHorizontal ? "20" : "5"}
        x2={isHorizontal ? "95" : "20"}
        y2={isHorizontal ? "20" : "95"}
        stroke="rgba(0, 255, 255, 0.9)"
        strokeWidth="1.5"
        filter="url(#lineGlow)"
        strokeLinecap="round"
      />

      {/* Glow externo del nodo */}
      <circle
        cx={isHorizontal ? "50" : "20"}
        cy={isHorizontal ? "20" : "50"}
        r="12"
        fill="rgba(0, 255, 120, 0.25)"
        filter="url(#nodeGlow)"
      />

      {/* Nodo verde principal */}
      <circle
        cx={isHorizontal ? "50" : "20"}
        cy={isHorizontal ? "20" : "50"}
        r="8"
        fill="#00ff84"
      />

      {/* Punto blanco central */}
      <circle
        cx={isHorizontal ? "50" : "20"}
        cy={isHorizontal ? "20" : "50"}
        r="3"
        fill="rgba(255,255,255,0.85)"
      />
    </svg>
  );
};