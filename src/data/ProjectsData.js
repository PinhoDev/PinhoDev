import Onspotstory from "../assets/projectImages/OnSpotInventory.png";
import SmartbyExplained from "../assets/projectImages/SmartbyExpalined.png";
import TopNewsWeather from "../assets/projectImages/TopNewsWeather.png";
import PoliceIncidents from "../assets/projectImages/PoliceIncidents.png";
import EventsEvents from "../assets/projectImages/EventsEvents.png";
import MyTwitter from "../assets/projectImages/MyTwitter.png";
import DogBook from "../assets/projectImages/DogBook.png";

const projects = [
  {
    title: "SmartbyExplained",
    image: SmartbyExplained,
    description:
      "Mobile app (in development) that allows users to upload an image and receive an AI-generated explanation. Created to explore image recognition, AI integration, and mobile development fundamentals using React Native.",
    tools: [
      "React Native",
      "MVVM Architecture",
      "Firebase",
      "Node.js",
      "Express",
      "Google Vision API",
      "Google Sign-In",
      "Camera Access",
      "Gallery Access",
    ],
    category: "Full Stack – React Native App",
  },
  {
    title: "Top News & Weather",
    image: TopNewsWeather,
    description:
      "Android app (in development) providing users with the latest news and weather updates by country. Designed to practice MVVM architecture and efficient integration of multiple APIs.",
    tools: [
      "Kotlin",
      "MVVM Architecture",
      "Retrofit",
      "REST API Integration",
      "Navigation Component",
      "RecyclerView",
      "Material Design 3",
      "XML UI Design",
    ],
    category: "Android App",
  },
  {
    title: "Events&Events",
    image: EventsEvents,
    description:
      "Cross-platform event management app (in development) that allows users to create events and sell tickets with Swish integration. Built to simplify event handling and improve ticketing experience.",
    tools: [
      "Kotlin Multiplatform",
      "Firebase",
      "MVVM Architecture",
      "Swish Integration",
      "Material Design 3",
      "Google Maps SDK",
      "AndroidX",
    ],
    category: "Android & iOS App",
  },
  {
    title: "Linero Tech Website",
    image: "",
    description:
      "Corporate website for Linero Tech focused on responsive and mobile-first design. Developed to enhance visual consistency, accessibility, and performance across all devices.",
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "Figma",
      "Responsive Design",
      "Web Performance",
    ],
    category: "Web Page – Responsive Design",
  },
  {
    title: "MyTweet – Fullstack Twitter Clone",
    image: MyTwitter,
    description:
      "Full-stack social media platform inspired by Twitter. Built as a personal learning project to gain experience with frontend development using React, backend services using Node.js, and database integration with MongoDB.",
    tools: [
      "React",
      "Vite",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Jest",
      "Supertest",
      "Playwright",
      "Testing Library",
      "Agile",
    ],
    category: "Web Page – Fullstack App",
  },
  {
    title: "DogBook – Pet Profile Social Platform",
    image: DogBook,
    description:
      "Social network web app for dog lovers to create pet profiles, share images, and connect with others. Developed to gain experience in modern React development and full-stack architecture.",
    tools: [
      "React",
      "Vite",
      "React Router",
      "Styled-Components",
      "Firebase",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Jest",
    ],
    category: "Web Page – Fullstack App",
  },
  {
    title: "OnSpotInventory",
    image: Onspotstory,
    description:
      "Android app developed during an internship to support field inventory registration. Enables users to create posts with text, photos, and GPS location, syncing data to an Omeka database.",
    tools: [
      "Kotlin",
      "MVVM Architecture",
      "Retrofit",
      "Omeka API",
      "CameraX",
      "Google Maps SDK",
      "RecyclerView",
      "Material Design 3",
      "AndroidX",
    ],
    category: "Android App",
  },
  {
    title: "Police Incidents",
    image: PoliceIncidents,
    description:
      "Android app that displays real-time police incidents and station locations on an interactive map. Developed to practice map-based UI, live data handling, and MVVM architecture.",
    tools: [
      "Kotlin",
      "MVVM Architecture",
      "Mapbox",
      "Google Maps SDK",
      "Retrofit",
      "RecyclerView",
      "Material Design 3",
      "UI Refactoring",
    ],
    category: "Android App",
  },
];

export default projects;
