import { useState } from "react"
import { Cross, Menu } from "@/assets/icons/icons-react"
import { my_information } from "@/scripts/information"

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const listLinks = my_information.header.links
  const linkCta = my_information.header.cta_main

  const handleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="">
      <aside className="">
        <button onClick={handleOpen} className="cursor-pointer relative z-50 block p-1 border border-gray-700 rounded-md text-gray-400">
          {isOpen ? <Cross /> : <Menu />}
        </button>
      </aside>
      <nav className={`absolute top-0 right-0 z-20 border border-gray-700 rounded-2xl bg-bg_header backdrop-blur-md transition-all duration-300 w-2/3 max-w-80 overflow-hidden ${isOpen ? 'translate-x-0 shadow-lg shadow-gray-700' : 'translate-x-full shadow-none'}`}>
        <header className="py-4 flex items-center justify-center">
          <h2 className="min-h-6 block">Menu</h2>
        </header>
        <ul className="flex flex-col links-nav p-3 border-b border-gray-700">
          {
            listLinks.map(link => (
              <li key={link.label}>
                <a
                  className="p-2 py-1.5 text-gray-200 flex items-center gap-2 rounded-lg transition-colors duration-200 hover:bg-bg_primary"
                  href={link.id}
                >
                  <span className="text-gray-500">
                    <link.icon />
                  </span>
                  {link.label}
                </a>
              </li>
            ))
          }
        </ul>
        <ul className="flex flex-col gap-3 p-3">
          {
            linkCta.map(link => (
              <li key={link.text}>
                <button className={`btn ${link.class_type} w-full`}>
                  <link.icon />
                  <span>{link.text}</span>
                </button>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  )
}