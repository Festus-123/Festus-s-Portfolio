
import { FaLinkedin, FaTwitter, FaGithub, FaWhatsapp } from "react-icons/fa";
import { IconType } from "react-icons";

export type Contacts = {
    link: string;
    icon: IconType;
}

const contacts: Contacts[] = [
    {
        link: "",
        icon: FaLinkedin
    },
    {
        link: "",
        icon: FaTwitter
    },
    {
        link: "",
        icon: FaGithub
    },
    {
        link: "",
        icon: FaWhatsapp
    },
]

export default contacts