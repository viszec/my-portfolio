import Work1s from "../../assets/work1s.png";
import Work1 from "../../assets/work1.gif";
import Work2 from "../../assets/work2.png";
import Work3 from "../../assets/work3.png";
import Work4 from "../../assets/work4.png";
import Palettepicker from "../../assets/palettepicker.gif";
import Work2s from "../../assets/work2s.jpg";
import Work6s from "../../assets/work6s.png";
import Work6 from "../../assets/work6.gif";
import nestease_s from "../../assets/nestease_s.png";
import nestease from "../../assets/nestease.gif";
import novabank_s from "../../assets/novabank_s.png";


export const projectsData = [
    {
        id: 1,
        gifImage: nestease,
        staticImage: nestease_s,
        title: "NESTEASE",
        category: ["Web", "App"],
        skills: ["React", "Redux", "Node.js", "MongoDB", "JWT", "Material UI","Web&Logo Design"],
        descriptions: "NESTEASE is a full-stack home rentals application using React, Redux, Node.js, MongoDB, JWT, and Material UI. It features user registration, login, property listing, booking, search, wishlist, and advanced state management, showcasing advanced full-stack development techniques.",
        url: "https://viszec.github.io/nestease/",
    },
    {
        id: 2,
        gifImage: novabank_s,
        staticImage: novabank_s,
        title: "NOVABANK",
        category: ["Web", "App"],
        skills: ["Next.js", "TypeScript", "React Hook Form", "Zod", "Radix UI", "Tailwind CSS", "Chart.js", "API Integration"],
        descriptions: "Developed an online banking app using Next.js, TypeScript, and Tailwind CSS, featuring real-time transaction displays and robust form validation. Integrated Sentry, Plaid, and Dwolla for performance monitoring, bank connections, and secure fund transfers, showcasing advanced fintech API integration.",
        url: "https://novabank.vercel.app/"
    },
    {
        id: 3,
        gifImage: Work1,
        staticImage: Work1s,
        title: "Brighton ELC",
        category: ["Web", "App"],
        skills: ["Branding", "UX/UI", "Web Design", "Web Dev", "SEO/Content", "Google Ads"],
        descriptions: "The Brighton ELC website has been redesigned with a clean, modern, and user-friendly UX/UI for enhanced navigation and performance on all devices. It features additional modules to highlight strengths, graphic elements for visual identity, and improved SEO with strong keywords and user-friendly content, boosting search rankings and user experience.",
        url: "https://www.brightonelc.com.au/",
    },
    {
        id: 4,
        gifImage: Palettepicker,
        staticImage: Work2s,
        title: "Palette Picker",
        category: ["App", "Web"],
        skills: ["Web Dev", "JavaScript", "HTML", "CSS"],
        descriptions: "Palette Picker - A web widget that specialise in generating different styles and types of palettes. It supports importing palette images for color recognition and allows exporting files in four different formats: PNG, SVG, CSS, and JSON. The widget is crafted using JavaScript, HTML, and CSS, ensuring fixed positioning and a sticky design for an optimal user experience.",
        url: "https://viszec.github.io/palettepicker/",
    },
    {
        id: 5,
        gifImage: Work2,
        staticImage: Work2,
        title: "BELC & B.BELC Handbook",
        category: ["Design"],
        skills: ["Graphic Design", "Marketing", "Copywriting", "Branding"],
        descriptions:
            "A handbook has been designed for Brighton and Brighton Beach ELC, featuring a clean, modern, and reader-friendly layout with graphic elements and primary colour blocks from the logo. Ocean-themed elements highlight BELC and B.BELC advantages as a boutique childcare centre, aiming to better communicate the brand's philosophy and service objectives to the local community and families.",
        url: "https://drive.google.com/file/d/1Qzd4kPOLg-27Q5PWvGHRFWastRNGlzAH/view?usp=sharing"
    },
    {
        id: 6,
        gifImage: Work3,
        staticImage: Work3,
        title: "Astra Early Learning",
        category: ["Design", "Web"],
        skills: ["Branding", "UX/UI", "Web design", "Web Dev", "Graphic Design", "Marketing", "Google Ads"],
        descriptions: "Astra Early Learning's branding, logo design, and website development showcase a clean and modern approach. The website is built with a user-friendly UX/UI, ensuring seamless navigation and optimal performance on all devices. Key features include strong visual identity elements, effective SEO with targeted keywords, and engaging content. This comprehensive strategy enhances search rankings and user experience, effectively conveying the brand’s message.",
        url: "https://www.pm.astraearlylearning.com.au/",
    },
    {
        id: 7,
        gifImage: Work4,
        staticImage: Work4,
        title: "Logo Design",
        category: ["Design"],
        skills: ["Logo Design", "Color Concept", "Branding"],
        descriptions: "",
        url: "https://drive.google.com/file/d/1jLR7BtkqjAyDGzEnu9hRrQ_spjmi8sdQ/view?usp=sharing"
    },
    {
        id: 8,
        gifImage: Work6,
        staticImage: Work6s,
        title: "Oak Park Children's Centre",
        category: ["Web"],
        skills: ["UX/UI", "Web Dev", "Wordpress", "PHP", "SEO/Content", "Marketing", "Google Ads"],
        descriptions: "Oak Park Children's Centre's branding and website creation embody a bright, playful aesthetic. The site is designed with an intuitive UX/UI, ensuring seamless navigation and optimal functionality across all devices. Key features include a robust visual identity, SEO-enhanced content with targeted keywords, and captivating design. This comprehensive strategy improves search rankings and user experience, effectively conveying the centre’s mission and services.",
        url: "https://oakparkchildrenscentre.com.au/",
    },
];


export const projectsNav = [
    {
        name: 'All',
    },
    {
        name: 'Web'
    },
    {
        name: 'App',
    },
    {
        name: 'Design'
    }
]
