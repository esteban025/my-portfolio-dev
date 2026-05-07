import { useState } from "react"
import { Cross, Menu, Download, Call } from "@/assets/icons/icons-react"
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
      <aside>
        <button onClick={handleOpen} className="cursor-pointer relative z-50">
          {isOpen ? <Cross /> : <Menu />}
        </button>
      </aside>
      <nav className={`absolute top-0 right-0 z-20 border border-gray-700 rounded-2xl bg-bg_primary backdrop-blur-md transition-all duration-300 w-2/3 max-w-100 overflow-hidden ${isOpen ? 'translate-x-0 shadow-lg shadow-gray-700' : 'translate-x-full shadow-none'}`}>
        <header className="py-4 flex items-center justify-center border-b border-gray-700 bg-bg_header">
          <h2 className="min-h-6 block">Menu</h2>
        </header>
        <ul className="flex flex-col links-nav">
          {
            listLinks.map(link => (
              <li key={link.label}>
                <a
                  className="p-3 border-b border-gray-700 text-gray-400 flex items-center gap-4 transition-colors duration-300 hover:text-violet-400 hover:border-violet-500 hover:shadow-md hover:shadow-violet-500/20"
                  href={link.id}
                >
                  <link.icon />
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