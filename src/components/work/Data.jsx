import Work1s from "../../assets/work1s.jpg";
import Work1 from "../../assets/work1.gif";
import Work2 from "../../assets/work2.png";
import Work3 from "../../assets/work3.png";
import Work4 from "../../assets/work4.png";
import Palettepicker from "../../assets/palettepicker.gif";
import Work2s from "../../assets/work2s.jpg";
import Work6s from "../../assets/work6s.jpg";
import Work6 from "../../assets/work6.gif";


export const projectsData = [
    {
        id: 1,
        gifImage: Work1,
        staticImage: Work1s,
        title: "Brighton ELC",
        category: ["Web", "App"],
        skills: ["Branding", "UX/UI", "Web Design", "Web Dev", "SEO/Content", "Google Ads"],
        descriptions: "The Brighton ELC website has been redesigned with a clean, modern and user-friendly UX/UI to enhance navigation and ensure optimal performance on all devices. It features additional modules to highlight the strengths of this boutique centre. Graphic elements in the logo and primary color blocks reinforce its visual identity, aligning with the brand’s comprehensive style guide. The website’s SEO has been boosted with user-friendly content and strong keywords, improving loading speed and mobile-friendliness, thereby improving Google search rankings and user experience, aiming to remain in the top ten for relevant search pages Visibility.",
        url: "https://www.brightonelc.com.au/",
    },
    {
        id: 2,
        gifImage: Palettepicker,
        staticImage: Work2s,
        title: "Palette Picker",
        category: ["App", "Web"],
        skills: ["Web Dev", "JavaScript", "HTML", "CSS"],
        descriptions: "Palette Picker - A web widget that specialises in generating different styles and types of palettes. It supports importing palette images for color recognition and allows exporting files in four different formats: PNG, SVG, CSS, and JSON. The widget is crafted using JavaScript, HTML, and CSS, ensuring fixed positioning and a sticky design for an optimal user experience.",
        url: "https://viszec.github.io/palettepicker/",
    },
    {
        id: 3,
        gifImage: Work2,
        staticImage: Work2,
        title: "BELC & B.BELC Handbook",
        category: ["Design"],
        skills: ["Graphic Design", "Marketing", "Copywriting", "Branding"],
        descriptions:
            "A handbook has been designed and created for Brighton and Brighton Beach ELC, featuring a clean, modern, and reader-friendly layout that incorporates graphic elements and primary colour blocks from the logo. To highlight Brighton and Brighton Beach ELC's advantages as a representative boutique childcare centre in the area, some ocean-themed elements have been added. This handbook aims to better communicate the brand's philosophy and service objectives to the local community and families.",
        url: "https://drive.google.com/file/d/1Qzd4kPOLg-27Q5PWvGHRFWastRNGlzAH/view?usp=sharing"
    },
    {
        id: 4,
        gifImage: Work3,
        staticImage: Work3,
        title: "Astra Early Learning",
        category: ["Design", "Web"],
        skills: ["Branding", "UX/UI", "Web design", "Web Dev", "Graphic Design", "Marketing", "Google Ads"],
        descriptions: "",
        url: "https://www.pm.astraearlylearning.com.au/",
    },
    {
        id: 5,
        gifImage: Work4,
        staticImage: Work4,
        title: "Logo Design",
        category: ["Design"],
        skills: ["Logo Design", "Color Concept", "Branding"],
        descriptions: "",
        url: "https://drive.google.com/file/d/1jLR7BtkqjAyDGzEnu9hRrQ_spjmi8sdQ/view?usp=sharing"
    },
    {
        id: 6,
        gifImage: Work6,
        staticImage: Work6s,
        title: "Oak Park Children's Centre",
        category: ["Web"],
        skills: ["UX/UI", "Web Dev", "Wordpress", "PHP", "SEO/Content", "Marketing", "Google Ads"],
        descriptions: "",
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
