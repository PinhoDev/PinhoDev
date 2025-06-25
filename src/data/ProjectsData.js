import Onspotstory from "/public/OnSpotInventory.png";
import SmartbyExpalined from "/public/SmartbyExpalined.png";
import TopNewsWeather from "/public/TopNewsWeather.png";
import PoliceIncidents from "/public/PoliceIncidents.png";
import EventsEvents from "/public/EventsEvents.png";

const projects = [
  {
    title: "SmartbyExpalined",
    image: SmartbyExpalined,
    description:
      "App móvil (en desarrollo) que permite subir una imagen y recibir una explicación generada por IA. Se diseñó e implementó la interfaz con React Native, se estructuró la lógica usando MVVM y se integraron servicios de backend con Firebase, Node.js y Google Vision API.",
    tools: ["React Native", "Firebase", "Google Vision API", "Node.js", "MVVM"],
    category: "React Native App",
  },
  {
    title: "Top News & Weather",
    image: TopNewsWeather,
    description:
      "App Android (en desarrollo) que muestra noticias destacadas y clima por país. Se diseñó e implementó desde cero utilizando MVVM, integración de APIs con Retrofit y diseño moderno de interfaz.",
    tools: ["Kotlin", "MVVM", "Retrofit", "UI Design"],
    category: "Android App",
  },
  {
    title: "Events&Events",
    image: EventsEvents,
    description:
      "App multiplataforma (en desarrollo) para crear eventos y permitir compras de entradas mediante Swish. Se desarrolló la interfaz de usuario y la lógica de negocio utilizando Kotlin Multiplatform, integrando Firebase y buenas prácticas ágiles.",
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
      "Página web para Linero Tech con enfoque en diseño responsivo y experiencia móvil. Se reestructuró y optimizó el HTML y CSS, mejorando la accesibilidad, legibilidad y rendimiento visual en múltiples dispositivos.",
    tools: ["HTML", "CSS", "Responsive Design"],
    category: "Web Page - Responsive Design",
  },
  {
    title: "My Twitter",
    image: "",
    description:
      "Plataforma social full-stack inspirada en Twitter, con funcionalidades de interacción entre usuarios y pruebas automatizadas. Se implementó el frontend con React, backend con Node.js y MongoDB, y se aplicaron pruebas unitarias y de integración con Jest.",
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
    image: "",
    description:
      "Red social para entusiastas de los perros, con perfiles, imágenes y funcionalidades en tiempo real. Se desarrolló el frontend con React, empleando arquitectura modular, manejo del estado personalizado y diseño con styled-components.",
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
      "App de gestión de inventario desarrollada durante una pasantía. Se construyó una demo funcional en Android que permite crear publicaciones con imágenes, geolocalización y texto, sincronizadas con una base de datos Omeka usando Retrofit y MVVM.",
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
      "Aplicación Android para visualizar incidentes policiales y estaciones en tiempo real sobre un mapa interactivo. Se implementó la integración con Mapbox y Google Maps SDK, y la arquitectura del proyecto se estructuró con MVVM y Retrofit.",
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
