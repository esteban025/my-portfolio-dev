export interface SiteConfig {
  domain: string;
  theme: string;
  language: string;
}

export interface Header {
  logo_name: string;
  links: {
    label: string;
    id: string;
    icon: any;
  }[];
  cta_main: {
    text: string;
    url: string;
    class_type: string;
    icon: any;
  }[];
}

export interface Hero {
  availability: string;
  welcome: string;
  name: string;
  position: string;
  description: string;
  buttons_cta: {
    text: string;
    url: string;
    class_type: string;
    icon: any;
  }[];
  trusted_by: string[];
  visual_nodes: {
    id: string;
    label: string;
    sub: string;
    desc: string;
  }[];
}

// === SECTIONS ===
export interface Workflow {
  index: string;
  title: string;
  subtitle: string;
  cards: CardsWorkflow[]
}

export interface CardsWorkflow {
  id: number;
  label: string;
  color: {
    text: string;
    border: string;
    shadowInset: string;
    shadowOut: string;
  },
  details: string[];
  icon: any;
}

export interface Footer {
  copyright: string;
  social_links: {
    label: string;
    url: string;
    icon: any;
  }[];
}

export interface MyInformation {
  site_config: SiteConfig;
  header: Header;
  hero: Hero;
  sections: {
    workflow: Workflow
  };
  footer: Footer
}