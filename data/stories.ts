
const images1 = ["/image1.jpg", "/image2.jpg", "/image3.jpg"];
const images2 = ["/image4.jpg", "/image5.jpg", "/image6.jpg"];

export type Stories = {
  title: string;
  description: string;
  reverse: boolean,
  images: string[]
};

export const stories: Stories[] = [
    {
        title: "Internship at Dejoft",
        description: "Had 3 months Internship at Deejoft Coding Scool, where i began my basic knowledge of Mobile application development- it felt like a long gard time, cause transitioning into React Native from react gave me a hard time but fortunately a challenge i overcame",
        reverse: false,
        images: images1
    },
    {
        title: "Executive Member at ETC",
        description:"ETC... The Engineering Tech Community OAUSTECH, was community in which i served as a lead developer imporving and training my self in the art of collaboration and team communication. It was a swift moment as i found myself easily relating to Devs of my standards who understand how it feels like to be amidst people for the sole purpose of Building...",
        reverse: true,
        images: images2
    },

]