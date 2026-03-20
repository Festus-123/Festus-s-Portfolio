export type Project = {
  slug: string;
  name: string;
  video: string;
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
    video: "/tax-master.mp4",
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
    video: "/mk-clothing.mp4",
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
    video: "/password-gen.mp4",
    site: "https://password-generator-mauve-zeta.vercel.app/",
    github_site: "https://github.com/Festus-123/Password-Generator",
    github: "/github.jpg",
    stacks: ["React.js", "Typescript", "tailwindCSS", "CSS3", "Responsive UI"],
    description:
      "Password Generator is a utility app that creates strong, random passwords with customizable length and complexity. It has a clean interface and fast performance, demonstrating practical React skills and a focus on user-friendly design.",
  },
  {
    slug: "movie-app",
    name: "Movie App Main",
    video: "/movie-app.mp4",
    site: "https://movie-app-delta-sand.vercel.app/",
    github_site: "https://github.com/Festus-123/Movie-app",
    github: "/github.jpg",
    stacks: ["React.js", "JavaScript", "TMDB API", "Firebase", "Tailwind CSS", "Responsive UI"],
    description:
      "Movie App Main is a movie discovery app using TMDB API. Users can browse trending movies, search titles, and view detailed info while also being able to watch a short video stram of the movie. Firebase powers additional features and Tailwind CSS ensures responsive, modern design.",
  },
  {
    slug: "collecta-nft",
    name: "Collecta NFT",
    video: "/collecta-nft.mp4",
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
    video: "/virtual-robot.mp4",
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
    video: "/ciera-fi.mp4",
    site: "https://ciera-fi.vercel.app/",
    github_site: "https://github.com/Festus-123/Ciera-Fi",
    github: "/github.jpg",
    stacks: ["React.js", "JavaScript", "Framer Motion", "Tailwind CSS", "Responsive UIs"],
    description:
      "Ciera-Fi is a dynamic interactive web app showcasing advanced frontend animations with Framer Motion. It combines smooth transitions with responsive layouts for an engaging user experience.",
  },
];