import type { CardsWorkflow } from "@/types/information"
import type React from "react"

interface Props {
  card: CardsWorkflow;
  index: number;
  children?: React.ReactNode;
}

export const Card = ({ card, index, children }: Props) => {
  return (
    <article
      key={card.id || index}
      className={`relative bg-white/4 border border-white/9 rounded-2xl p-4 ${card.color?.border?.hover} ${card.color?.shadow} transition-all duration-300`}
    >

      <header className="flex flex-col gap-2 pb-2">
        <div className="flex items-center justify-between pb-2">
          <span className={`border rounded-lg p-1.5 ${card.color?.border?.default}`}>
            {card.icon && <card.icon className={`size-8 ${card.color?.text}`} />}
          </span>
          <span className="text-gray-500">
            0{card.id}
          </span>
        </div>
        <h3 className="text-xl">{card.label}</h3>
      </header>

      <div className="content-card">
        <p className="text-xs text-gray-400">{card.details}</p>
      </div>
      {children}
    </article>

  )
}