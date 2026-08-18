export type Project = {
  slug: string;
  name: string;
  image: string;
  site?: string;
  github_site?: string;
  github: string;
  stacks: string[];
  description: string;
};

export const links: Project[] = [
  {
    slug: "tax-master",
    name: "Tax Master",
    image: "/tax-master.png",
    site: "https://tax-master.vercel.app/",
    github_site: "https://github.com/Festus-123/Tax-Master",
    github: "/github.jpg",
    stacks: ["React.js", "TypeScript", "Tailwind CSS", "Vite", "html2Image", "Toaster", "Responsive UI"],
    description:
      "Tax Master is a modern tax estimation tool for Nigerian users, helping individuals calculate their tax obligations under 2026 regulations. It features a clean interface, real-time calculations, and intuitive data display, leveraging modern frontend technologies for a seamless experience.",
  },
  {
    slug: "mkclothing",
    name: "M & K Clothing",
    image: "/mk-clothing3.png",
    site: "https://mkclothing-kna2.vercel.app/",
    github_site: "https://github.com/Festus-123/mkclothing",
    github: "/github.jpg",
    stacks: ["React", "JavaScript", "Supabase", "Tailwind CSS", "Responsive Design", "Dynamic UI", "framer motion", "sonner", "Render",],
    description:
      "M & K Clothing is a fully responsive e-commerce web app showcasing clothing collections. It integrates Supabase for dynamic content, smooth browsing, and modern UI interactions, delivering a polished shopping experience. '  ' Building it dashboard making it neatly functional for adding, deleting and editing clothe products and collections",
  },
  {
    slug: "phipest-bens",
    name: "Phipest-Bens Int Nig Ltd.",
    image: "/phipest-bens2.png",
    site: "https://phipest-bens.vercel.app/",
    github_site: "https://github.com/Festus-123/phipest-bens",
    github: "/github.jpg",
    stacks: ["Next.js", "TypeScript", "GSAP", "Tailwind CSS", "Responsive UI"],
    description:
      "This Site was Tailored for the company- Phipest-Bens International Nigerial Limited to help them create an online preense. Phipest-bens is a firm engaged in different activities including construstions and car sales. Making thewebsite performance optimised and UI responsive and context clearity, it ensures constomer to make enquiry to the firm in just a dail",
  },
  {
    slug: "debatex",
    name: "DebateX",
    image: "/debatex.png",
    site: "https://debate-x.vercel.app/",
    github_site: "https://github.com/Festus-123/debate-x",
    github: "/github.jpg",
    stacks: ["Next.js", "TypeScript", "GSAP", "Tailwind CSS", "Responsive UI", "Supabase"],
    description:
      "DebateX a startup project by Festus Philli to host Live debates accross the globe with interesting figures and occurence, A place where -Everyone is the Judge, -EveryOne is heard, -Every Opinion matters, -Questions are asked, -Where people grow more in the digital world. DebateX brings about connectivity and communication espite ifferent region race and time zone, it also bring about Reconcepting Misconception",
  },
  {
    slug: "weslime-auto-repair",
    name: "Weslime Auto Repair",
    image: "/weslime.png",
    site: "https://weslime.vercel.app/",
    github_site: "https://github.com/Festus-123/weslime", 
    github: "/github.jpg",
    stacks: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive UI", "Sonner"],
    description:
      "Weslime auto repairs specialises in car repais, car wash, car part sales and other car related services. The website was made to help the company create an online presence and also to make it easy for customers to make enquiry and book appointments with the company. It also has a clean and responsive design that makes it easy for users to navigate and find the information they need.",
  },
  {
    slug: "coolchef-nationwide-eats",
    name: "CoolChef Nationwide Eats",
    image: "/coolchef.png",
    site: "https://coolchef-nationwide-eats.vercel.app/",
    github_site: "https://github.com/Festus-123/coolchef-nationwide-eats",
    github: "/github.jpg",
    stacks: ["React.js", "TypeScript", "Tailwind CSS", "Responsive UI", "sonner"],
    description:
      "A modern website for a restaurant, featuring a collection of delicious recipes and cooking tips. The site has a clean and responsive design, making it easy for users to find and view their favorite dishes."
  },
  {
    slug: "wear-it-all-luxury",
    name: "Wear It All Luxury",
    image: "/wear-it-all2.png",
    site: "https://wearitallluxury.vercel.app/",
    github_site: "https://github.com/Festus-123/wearitallluxury",
    github: "/github.jpg",
    stacks: ["React", "Javascript", "Tailwind CSS", "Responsive UI", "sonner", "Supabase", "Brevo", "Render", "Zod"],
    description:
      "A modern website for a hotel, featuring a collection of room options and booking services. The site has a clean and intuitive design, making it easy for users to find and reserve their ideal stay."
  }
];