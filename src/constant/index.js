import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    mui,
    angular,
    bootstrap,
    aws,
    synechron,
    cognizant,
} from "../assets";

export const navLinks = [{
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const educationDetails = [{
        type: "BE in Computer Engineering",
        college: "Pimpri Chinchwad Collage of Enginnering(PCCOE),PUNE",
        year: "2022",
        score: "9.08 CGPA",
        location: "Pune, India",
        icon: "/collage.png",
    },
    {
        type: "Higher Secondary Education",
        college: "Nutan Vidyalaya",
        year: "2018",
        score: "85%%",
        location: "MH, India",
        icon: "/high_school.png",
    },
    {
        type: "Secondary Education",
        college: "MSM English School",
        year: "2016",
        score: "9.6 CGPA",
        location: "MH, India",
        icon: "/school.png",
    }
];

const technologies = [{
        name: "JavaScript",
        icon: javascript,
    },

    {
        name: "React JS",
        icon: reactjs,
    },

    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
    {
        name: "MUI",
        icon: mui,
    },

    {
        name: "Express JS",
        icon: nodejs,
    },
    {
        name: "Angular",
        icon: angular,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },

    {
        name: "git",
        icon: git,
    },

    {
        name: "AWS",
        icon: aws,
    },
];

const experiences = [
 
    {
        title: "Frontend Developer",
        company_name: "Synechron",
        icon: synechron,
        iconBg: "#E6DEDD",
        date: "December 2022 - Present",
        points: [
            "• Collaborated closely with both my immediate team and cross-functional teams to deliver high-impact front-end features. Led the development and deployment of multiple features from concept to release.",
            "• Improved performance through code-splitting, lazy loading, and optimized state management (Redux, Zustand, Context API).",
            "• Implemented micro front-end architecture with craco-module-federation, ensuring scalability and modularity",
            "• Integrated RESTful and GraphQL APIs, collaborating closely with back-end developers.",
            "• Reduced page load time by 30% through optimization and refactoring.",
            "• Supported rapid prototyping with Express.js for proof-of-concept projects.",
            "• Utilized Docker to streamline environment setup and deployment."
        ],
    },
    {
        title: "Programmer Analyst Trainee",
        company_name: "Cognizant",
        icon: cognizant,
        iconBg: "#383E56",
        date: "Jan 2022 - May 2022",
        points: [
            "• Assisted in the development of an insurance web application, attracting over 100,000 daily active users.",
            "• Collaborated with the QA team to identify and resolve bugs, reducing post-release issues by 25%.",
            "• Conducted thorough cross-browser testing to ensure consistent website performance across all major browsers"
        ],
    },
];

const testimonials = [{
        testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [{
        name: "Car Rent",
        description: "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description: "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [{
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export {
    educationDetails,
    technologies,
    experiences,
    testimonials,
    projects
};