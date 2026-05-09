import { Download, Call, AboutMe, Folder, Books, Code, Identity, Checklist, Stack } from "@/assets/icons/icons-react"
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
      title: "My Workflow",
      subtitle: "The process behind every successful project",
      cards: [
        {
          id: 1,
          label: "Identidad",
          color: {
            text: "text-purple-400",
            border: "border-purple-400/40",
            shadowInset: "#9333ea20",
            shadowOut: "#9333ea30",
          },
          details: [
            "Esteban.dev",
            "Desarrollador Web",
            "Ecuador"
          ],
          icon: Identity
        },
        {
          id: 2,
          label: "Que hago?",
          color: {
            text: "text-teal-300",
            border: "border-teal-400/30",
            shadowInset: "#0d948820",
            shadowOut: "#0d948830",
          },
          details: [
            "Automatizaciones",
            "Panels de Control",
            "Integraciones"
          ],
          icon: Checklist
        },
        {
          id: 3,
          label: "Stack",
          color: {
            text: "text-sky-600",
            border: "border-sky-600",
            shadowInset: "#0284c720",
            shadowOut: "#0284c730",
          },
          details: [
            "Astro / React",
            "Node.js",
            "PostgreSQL / Supabase",
            "n8n"
          ],
          icon: Stack
        },
        // {
        //   id: "04",
        //   label: "Goal",
        //   color: {
        //     text: "text-orange-600",
        //     border: "border-orange-600",
        //     shadow: "#ffffff10",
        //   },
        //   details: [
        //     "Build solutions",
        //     "that save time",
        //     "and scale",
        //     "businesses"
        //   ],
        //   icon: "mdi:account"
        // },
        // {
        //   id: "05",
        //   label: "Impact",
        //   color: {
        //     text: "text-teal-600",
        //     border: "border-teal-600",
        //     shadow: "#ffffff10",
        //   },
        //   details: [
        //     "More efficiency",
        //     "More growth",
        //     "Better systems"
        //   ],
        //   icon: "mdi:account"
        // }
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
    copyright: "© 2026 Esteban.dev — Contruyendo y automatizando tu negocio.",
    social_links: [
      {
        label: "GitHub",
        url: "https://github.com/esteban-dev",
        icon: "github"
      },
      {
        label: "LinkedIn",
        url: "https://linkedin.com/in/esteban-dev",
        icon: "linkedin"
      }
    ]
  }
}