import Onspotstory from "../assets/projectImages/OnSpotInventory.png";
import SmartbyExpalined from "../assets/projectImages/SmartbyExpalined.png";
import TopNewsWeather from "../assets/projectImages/TopNewsWeather.png";
import PoliceIncidents from "../assets/projectImages/PoliceIncidents.png";
import EventsEvents from "../assets/projectImages/EventsEvents.png";
import MyTwitter from "../assets/projectImages/MyTwitter.png";
import DogBook from "../assets/projectImages/DogBook.png";

const projects = [
  {
    title: "SmartbyExpalined",
    image: SmartbyExpalined,
    description:
      "Mobile app (in development) that allows users to upload an image and receive an AI-generated explanation. Developed with the goal of acquiring foundational knowledge in React Native, mobile device permissions, and AI integration.",
    tools: ["React Native", "Firebase", "Google Vision API", "Node.js", "MVVM"],
    category: "React Native App",
  },
  {
    title: "Top News & Weather",
    image: TopNewsWeather,
    description:
      "Android app (in development) that delivers up-to-date news and weather by country. Built to centralize relevant information using MVVM architecture and efficient API integration.",
    tools: ["Kotlin", "MVVM", "Retrofit", "UI Design"],
    category: "Android App",
  },
  {
    title: "Events&Events",
    image: EventsEvents,
    description:
      "Cross-platform app (in development) to organize events and sell tickets using Swish integration. Designed to simplify event management and enhance the user experience in ticket purchasing.",
    tools: [
      "Kotlin Multiplatform",
      "Firebase",
      "UI Design",
      "Swish Integration",
      "Agile Development",
    ],
    category: "Android & IOS App",
  },
  {
    title: "Linero Tech Website",
    image: "",
    description:
      "Website for Linero Tech focused on responsive design and mobile experience. HTML and CSS were restructured and optimized to improve accessibility, readability, and visual performance across multiple devices.",
    tools: ["HTML", "CSS", "Responsive Design"],
    category: "Web Page - Responsive Design",
  },
  {
    title: "My Twitter",
    image: MyTwitter,
    description:
      "Full-stack social platform inspired by Twitter, built with the educational purpose of gaining hands-on experience in frontend development with React JS and backend development with Node.js and MongoDB. Includes user interaction features and applies unit and integration testing using Jest.",
    tools: [
      "React",
      "Node.js",
      "MongoDB",
      "Jest",
      "End-to-End Testing",
      "Agile",
    ],
    category: "Web Page – Fullstack App",
  },
  {
    title: "Dog Book",
    image: DogBook,
    description:
      "Web-based social network for dog lovers to create profiles, share photos, and connect. Built to gain practical experience in full-stack app architecture using React, Node.js, and modern state management.",
    tools: [
      "React",
      "Node.js",
      "Component-Based Design",
      "State Management",
      "Styled-Components",
    ],
    category: "Web Page – React JS",
  },
  {
    title: "OnSpotInventory",
    image: Onspotstory,
    description:
      "Android app developed during an internship to facilitate field inventory registration. Allows creating posts with text, images, and GPS location, synchronized with the Omeka database.",
    tools: [
      "Kotlin",
      "MVVM",
      "Retrofit",
      "CameraX",
      "Google Maps SDK",
      "RecyclerView",
      "Material 3 UI",
      "Omeka API",
    ],
    category: "Android App",
  },
  {
    title: "Police Incidents",
    image: PoliceIncidents,
    description:
      "Android app showing real-time police incidents and stations on an interactive map. Built to learn map integration, live data handling, and MVVM architecture.",
    tools: [
      "Kotlin",
      "Mapbox",
      "Google Maps SDK",
      "MVVM Architecture",
      "Retrofit",
      "Fragments",
      "RecyclerView",
      "Material Design",
    ],
    category: "Android App",
  },
];

export default projects;
