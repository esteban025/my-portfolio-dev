import { Download, Call, AboutMe, Folder, Books, Code } from "@/assets/icons/icons-react"

export const my_information = {
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
    availability: "Available for new projects",
    title_white: "I build ",
    title_accent: "automated systems",
    title_suffix: " & modern web experiences.",
    description: "I help businesses save time and scale with custom applications, dashboards and automation workflows using n8n and modern technologies.",
    buttons_cta: [
      {
        text: "Contactame",
        url: "#",
        class_type: "btn-secondary"
      }
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
          id: "01",
          label: "Identity",
          details: [
            "Esteban.dev",
            "Web Developer",
            "Ecuador"
          ]
        },
        {
          id: "02",
          label: "What I do",
          details: [
            "Web Development",
            "Automation",
            "Dashboards",
            "Integrations"
          ]
        },
        {
          id: "03",
          label: "Stack",
          details: [
            "Astro / React",
            "Node.js",
            "PostgreSQL",
            "n8n"
          ]
        },
        {
          id: "04",
          label: "Goal",
          details: [
            "Build solutions",
            "that save time",
            "and scale",
            "businesses"
          ]
        },
        {
          id: "05",
          label: "Impact",
          details: [
            "More efficiency",
            "More growth",
            "Better systems"
          ]
        }
      ]
    },
    automation_showcase: {
      index: "02",
      title: "Automation Showcase",
      active_project: {
        name: "Inventory + Sales Reports Automation",
        status: "Active",
        stats: [
          {
            label: "Rows processed",
            value: "1,248"
          },
          {
            label: "Success rate",
            value: "98.5%"
          },
          {
            label: "Time saved",
            value: "12h / week"
          }
        ]
      }
    },
    featured_projects: {
      index: "03",
      title: "Featured Projects",
      projects: [
        {
          title: "Automation Dashboard",
          desc: "Complete analytics and automation dashboard for business operations.",
          stack: [
            "Astro",
            "n8n",
            "PostgreSQL"
          ],
          image: "thumb1.png"
        },
        {
          title: "E-commerce Platform",
          desc: "Modern e-commerce with payments & subscriptions.",
          stack: [
            "React",
            "Stripe",
            "Tailwind"
          ],
          image: "thumb2.png"
        },
        {
          title: "Telegram Bot System",
          desc: "Automation & notifications system for Telegram.",
          stack: [
            "Node.js",
            "Telegram",
            "n8n"
          ]
        },
        {
          title: "CRM for Businesses",
          desc: "Customer management system with dashboards.",
          stack: [
            "React",
            "Supabase"
          ]
        }
      ]
    },
    services: {
      index: "05",
      title: "Services",
      subtitle: "What I can help you build",
      items: [
        {
          label: "Web Development",
          desc: "Modern websites & web apps"
        },
        {
          label: "Automation Systems",
          desc: "n8n workflows & integrations"
        },
        {
          label: "Dashboards",
          desc: "Analytics & admin panels"
        },
        {
          label: "Integrations",
          desc: "APIs, Webhooks, 3rd parties"
        }
      ]
    },
    skills: {
      index: "06",
      title: "Skills & Technologies",
      skill_groups: [
        {
          name: "Frontend",
          percent: 95,
          tags: [
            "Astro",
            "React",
            "Tailwind CSS",
            "TypeScript"
          ]
        },
        {
          name: "Backend",
          percent: 90,
          tags: [
            "Node.js",
            "Express",
            "REST APIs"
          ]
        },
        {
          name: "Automation",
          percent: 95,
          tags: [
            "n8n",
            "Make",
            "Zapier"
          ]
        },
        {
          name: "Database",
          percent: 85,
          tags: [
            "PostgreSQL",
            "Supabase",
            "MySQL"
          ]
        },
        {
          name: "DevOps",
          percent: 80,
          tags: [
            "Vercel",
            "Netlify",
            "Docker",
            "Railway"
          ]
        }
      ]
    },
    contact: {
      index: "08",
      title: "Let's Connect",
      email: "hello@esteban.dev",
      phone: "+593 99 123 4567",
      location: "Quito, Ecuador",
      socials: [
        "GitHub",
        "LinkedIn",
        "YouTube",
        "Telegram"
      ]
    }
  },
  footer: {
    text: "© 2024 Esteban.dev — Building the future, one automation at a time.",
    bottom_links: [
      "Build",
      "Automate",
      "Scale"
    ]
  }
}