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
    image: "/mk-clothing.png",
    site: "https://mkclothing-kna2.vercel.app/",
    github_site: "https://github.com/Festus-123/mkclothing",
    github: "/github.jpg",
    stacks: ["React.js", "JavaScript", "Supabase", "Tailwind CSS", "Responsive Design", "Dynamic UI", "framer motion", "Toaster"],
    description:
      "M & K Clothing is a fully responsive e-commerce web app showcasing clothing collections. It integrates Supabase for dynamic content, smooth browsing, and modern UI interactions, delivering a polished shopping experience. '  ' Building it dashboard making it neatly functional for adding, deleting and editing clothe products and collections",
  },
  {
    slug: "password-gen",
    name: "Password Generator",
    image: "/password-gen.png",
    site: "https://password-generator-mauve-zeta.vercel.app/",
    github_site: "https://github.com/Festus-123/Password-Generator",
    github: "/github.jpg",
    stacks: ["React.js", "Typescript", "tailwindCSS", "CSS3", "Responsive UI"],
    description:
      "Password Generator is a utility app that creates strong, random passwords with customizable length and complexity. It has a clean interface and fast performance, demonstrating practical React skills and a focus on user-friendly design.",
  },
  // {
  //   slug: "movie-app",
  //   name: "Movie App Main",
  //   image: "/movie-app.png",
  //   site: "https://movie-app-delta-sand.vercel.app/",
  //   github_site: "https://github.com/Festus-123/Movie-app",
  //   github: "/github.jpg",
  //   stacks: ["React.js", "JavaScript", "TMDB API", "Firebase", "Tailwind CSS", "Responsive UI"],
  //   description:
  //     "Movie App Main is a movie discovery app using TMDB API. Users can browse trending movies, search titles, and view detailed info while also being able to watch a short image stram of the movie. Firebase powers additional features and Tailwind CSS ensures responsive, modern design.",
  // },
  {
    slug: "collecta-nft",
    name: "Collecta NFT",
    image: "/collecta-nft.png",
    site: "https://collecta-nfts.vercel.app/",
    github_site: "https://github.com/Festus-123/Collecta-nfts",
    github: "/github.jpg",
    stacks: ["React.js", "JavaScript", "tailwindCss", "Responsive UI"],
    description:
      "Collecta NFT is an interactive showcase for NFT artworks and digital collectibles, featuring responsive layouts and engaging animations for smooth browsing and presentation. focuses mainly on the look and feel not interactions",
  },
  {
    slug: "virtual-robot",
    name: "Virtual Robot",
    image: "/virtual-robot.png",
    site: "https://virtual-robot-gold.vercel.app/",
    github_site: "https://github.com/Festus-123/virtual-robot",
    github: "/github.jpg",
    stacks: ["React.js", "JavaScript", "Three.js", "Tailwind CSS", "Canvas Animations"],
    description:
      "Virtual Robot is an interactive 3D simulation using Three.js and React. It demonstrates advanced animations, motion controls, and immersive graphics directly in the browser.",
  },
  {
    slug: "ciera-fi",
    name: "Ciera-Fi",
    image: "/ciera-fi.png",
    site: "https://ciera-fi.vercel.app/",
    github_site: "https://github.com/Festus-123/Ciera-Fi",
    github: "/github.jpg",
    stacks: ["React.js", "JavaScript", "Framer Motion", "Tailwind CSS", "Responsive UIs"],
    description:
      "Ciera-Fi is a dynamic interactive web app showcasing advanced frontend animations with Framer Motion. It combines smooth transitions with responsive layouts for an engaging user experience.",
  },
  {
    slug: "phipest-bens",
    name: "Phipest-Bens Int Nig Ltd.",
    image: "/phipest-bens.png",
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
    slug: "photographer",
    name: "Photographer",
    image: "/photgrapher.png",
    site: "https://celeb-portfolio-sandy.vercel.app/",
    github_site: "https://github.com/Festus-123/celeb-portfolio",
    github: "/github.jpg",
    stacks: ["Next.js", "TypeScript", "Tailwind CSS", "Responsive UI", ],
    description:
      "A stunning website that showcase the work of a profesional celebrity photgrapher, capturing their moments and displaying it in a clean structure and format. A photographer with the saying diamond in the rough with a website that speaks the volume. --An artwork made by code",
  },
];