import { Download, Call, AboutMe, Folder, Books, Code, Identity, Checklist, Stack, Goal, Impact, Github, Linkedin } from "@/assets/icons/icons-react"
import type { MyInformation } from "@/types/information"

export const my_information: MyInformation = {
  site_config: {
    domain: "esteban.dev",
    theme: "dark-premium",
    language: "es"
  },
  header: {
    logo_name: "esteban.dev",
    links: [
      {
        label: "Sobre Mi",
        id: "about",
        icon: AboutMe,
      },
      {
        label: "Proyectos",
        id: "projects",
        icon: Folder
      },
      {
        label: "Estudios",
        id: "studies",
        icon: Books
      },
      {
        label: "Skills",
        id: "skills",
        icon: Code
      }
    ],
    cta_main: [
      {
        text: "Descargar CV",
        url: "#",
        class_type: "btn-secondary",
        icon: Download
      },
      {
        text: "Contactame",
        url: "#",
        class_type: "btn-primary",
        icon: Call
      },
    ]
  },
  hero: {
    availability: "Disponible para nuevos proyectos",
    welcome: "Hola! Soy",
    name: "Esteban",
    position: "Desarrollador Full Stack & Automatizaciones",
    description: "Desarrollo sitios web modernos y sistemas automatizados con enfoque en rendimiento y diseño.",
    buttons_cta: [
      {
        text: "Proyectos",
        url: "/projects",
        class_type: "btn-secondary",
        icon: Folder
      },
      {
        text: "Contactame",
        url: "#",
        class_type: "btn-primary",
        icon: Call
      },
    ],
    trusted_by: [
      "Sheets",
      "n8n",
      "Supabase",
      "Vercel",
      "Telegram"
    ],
    visual_nodes: [
      {
        id: "start",
        label: "Start",
        sub: "Esteban.dev",
        desc: "Web Developer"
      },
      {
        id: "apps",
        label: "Web Apps",
        sub: "Modern and fast",
        desc: "applications"
      },
      {
        id: "automation",
        label: "Automation",
        sub: "n8n workflows",
        desc: "& integrations"
      },
      {
        id: "apis",
        label: "APIs",
        sub: "RESTful",
        desc: "integrations"
      },
      {
        id: "deploy",
        label: "Deploy",
        sub: "Vercel & Netlify",
        desc: "deployment"
      }
    ]
  },
  sections: {
    workflow: {
      index: "01",
      title: "Mi Workflow",
      subtitle: "El proceso que hay detrás de cada proyecto exitoso",
      cards: [
        {
          id: 1,
          label: "Identidad",
          color: {
            text: "text-indigo-300/50",
            border: {
              default: "border-indigo-500/40",
              hover: "hover:border-indigo-500/30"
            },
            shadow: "hover:shadow-[0_0_24px_#6366f11f]",
          },
          details: "Creo soluciones digitales de alto impacto y diseño minimalista.",
          icon: Identity
        },
        {
          id: 2,
          label: "Especialidad",
          color: {
            text: "text-teal-300/50",
            border: {
              default: "border-teal-500/40",
              hover: "hover:border-teal-400/30"
            },
            shadow: "hover:shadow-[0_0_24px_#14b8a61f]",
          },
          details: "Desarrollo interfaces modernas y automatizo procesos, optimizando el rendimiento de tu empresa.",
          icon: Checklist
        },
        {
          id: 3,
          label: "Tecnología",
          color: {
            text: "text-sky-300/50",
            border: {
              default: "border-sky-500/40",
              hover: "hover:border-sky-500/30"
            },
            shadow: "hover:shadow-[0_0_24px_#3b82f61f]",
          },
          details: "Astro, React y Node.js, integrando Supabase y n8n para crear sistemas escalables.",
          icon: Stack
        },
        {
          id: 4,
          label: "Objetivo",
          color: {
            text: "text-orange-300/50",
            border: {
              default: "border-amber-500/40",
              hover: "hover:border-amber-500/30"
            },
            shadow: "hover:shadow-[0_0_24px_#f59e0b1f]",
          },
          details: "Crear herramientas que ahorren tiempo, reduzcan errores y hagan crecer tu empresa",
          icon: Goal
        },
        {
          id: 5,
          label: "Resultado",
          color: {
            text: "text-pink-300/50",
            border: {
              default: "border-pink-500/40",
              hover: "border-pink-500/30"
            },
            shadow: "hover:shadow-[0_0_24px_#ec48991f]",
          },
          details: "Sistemas optimizados que transforman la complejidad técnica en una ventaja competitiva real.",
          icon: Impact
        }
      ]
    },
    // automation_showcase: {
    //   index: "02",
    //   title: "Automation Showcase",
    //   active_project: {
    //     name: "Inventory + Sales Reports Automation",
    //     status: "Active",
    //     stats: [
    //       {
    //         label: "Rows processed",
    //         value: "1,248"
    //       },
    //       {
    //         label: "Success rate",
    //         value: "98.5%"
    //       },
    //       {
    //         label: "Time saved",
    //         value: "12h / week"
    //       }
    //     ]
    //   }
    // },
    // featured_projects: {
    //   index: "03",
    //   title: "Featured Projects",
    //   projects: [
    //     {
    //       title: "Automation Dashboard",
    //       desc: "Complete analytics and automation dashboard for business operations.",
    //       stack: [
    //         "Astro",
    //         "n8n",
    //         "PostgreSQL"
    //       ],
    //       image: "thumb1.png"
    //     },
    //     {
    //       title: "E-commerce Platform",
    //       desc: "Modern e-commerce with payments & subscriptions.",
    //       stack: [
    //         "React",
    //         "Stripe",
    //         "Tailwind"
    //       ],
    //       image: "thumb2.png"
    //     },
    //     {
    //       title: "Telegram Bot System",
    //       desc: "Automation & notifications system for Telegram.",
    //       stack: [
    //         "Node.js",
    //         "Telegram",
    //         "n8n"
    //       ]
    //     },
    //     {
    //       title: "CRM for Businesses",
    //       desc: "Customer management system with dashboards.",
    //       stack: [
    //         "React",
    //         "Supabase"
    //       ]
    //     }
    //   ]
    // },
    // services: {
    //   index: "05",
    //   title: "Services",
    //   subtitle: "What I can help you build",
    //   items: [
    //     {
    //       label: "Web Development",
    //       desc: "Modern websites & web apps"
    //     },
    //     {
    //       label: "Automation Systems",
    //       desc: "n8n workflows & integrations"
    //     },
    //     {
    //       label: "Dashboards",
    //       desc: "Analytics & admin panels"
    //     },
    //     {
    //       label: "Integrations",
    //       desc: "APIs, Webhooks, 3rd parties"
    //     }
    //   ]
    // },
    // skills: {
    //   index: "06",
    //   title: "Skills & Technologies",
    //   skill_groups: [
    //     {
    //       name: "Frontend",
    //       percent: 95,
    //       tags: [
    //         "Astro",
    //         "React",
    //         "Tailwind CSS",
    //         "TypeScript"
    //       ]
    //     },
    //     {
    //       name: "Backend",
    //       percent: 90,
    //       tags: [
    //         "Node.js",
    //         "Express",
    //         "REST APIs"
    //       ]
    //     },
    //     {
    //       name: "Automation",
    //       percent: 95,
    //       tags: [
    //         "n8n",
    //         "Make",
    //         "Zapier"
    //       ]
    //     },
    //     {
    //       name: "Database",
    //       percent: 85,
    //       tags: [
    //         "PostgreSQL",
    //         "Supabase",
    //         "MySQL"
    //       ]
    //     },
    //     {
    //       name: "DevOps",
    //       percent: 80,
    //       tags: [
    //         "Vercel",
    //         "Netlify",
    //         "Docker",
    //         "Railway"
    //       ]
    //     }
    //   ]
    // },
    // contact: {
    //   index: "08",
    //   title: "Let's Connect",
    //   email: "hello@esteban.dev",
    //   phone: "+593 99 123 4567",
    //   location: "Quito, Ecuador",
    //   socials: [
    //     "GitHub",
    //     "LinkedIn",
    //     "YouTube",
    //     "Telegram"
    //   ]
    // }
  },
  footer: {
    copyright: "© 2026 Esteban.dev",
    phrase: "Contruyendo y automatizando tu negocio.",
    social_links: [
      {
        label: "GitHub",
        url: "https://github.com/esteban-dev",
        icon: Github
      },
      {
        label: "LinkedIn",
        url: "https://linkedin.com/in/esteban-dev",
        icon: Linkedin
      }
    ]
  }
}