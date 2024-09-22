export const courses = [
  {
    courseId: 10,
    name: "React.js",
    description:
      "¡Bienvenido al curso de React! En este curso aprenderás a desarrollar aplicaciones web dinámicas y modernas utilizando una de las bibliotecas de JavaScript más populares y poderosas. React te permite construir interfaces de usuario eficientes, componibles y fáciles de mantener, facilitando el desarrollo de proyectos escalables. A lo largo de este curso, exploraremos los fundamentos de React, incluyendo componentes, estados, props, manejo de eventos, y la creación de aplicaciones interactivas. No importa si eres nuevo en React o tienes algo de experiencia, ¡este curso te ayudará a convertirte en un desarrollador React experto!",
    features: [
      {
        id: 10,
        feature:
          "Componentes Reutilizables: React permite la creación de componentes modulares que se pueden reutilizar en diferentes partes de tu aplicación, mejorando la eficiencia y el mantenimiento del código.",
      },
      {
        id: 20,
        feature:
          "Actualizaciones Eficientes: Gracias a su virtual DOM, React actualiza solo las partes de la interfaz que han cambiado, lo que hace que las aplicaciones sean más rápidas y reactivas.",
      },
      {
        id: 30,
        feature:
          "Gran Comunidad y Ecosistema: React cuenta con una vasta comunidad de desarrolladores y una gran cantidad de librerías y herramientas que facilitan la creación de aplicaciones complejas.",
      },
      {
        id: 40,
        feature:
          "Desarrollo Fácil de Aplicaciones Web y Móviles: Con herramientas como React Native, puedes desarrollar aplicaciones móviles utilizando los mismos principios y conocimientos que usas en la web.",
      },
    ],
    topics: [
      {
        id: 1,
        name: "Introducción a React",
        description:
          "Fundamentos de React, incluyendo qué es, cómo funciona y cómo configurar un proyecto básico.",
        level: "básico",
      },
      {
        id: 2,
        name: "JSX (JavaScript XML)",
        description:
          "Aprender la sintaxis de JSX que permite combinar HTML y JavaScript para crear componentes de forma clara.",
        level: "básico",
      },
      {
        id: 3,
        name: "Componentes Funcionales y de Clase",
        description:
          "Crear y entender los componentes de clase y funcionales, incluyendo sus diferencias y usos.",
        level: "básico",
      },
      {
        id: 4,
        name: "Props y Estado",
        description:
          "Gestión de propiedades y estado en los componentes para manejar datos y actualizar la UI de forma dinámica.",
        level: "básico",
      },
      {
        id: 5,
        name: "Ciclo de Vida de los Componentes",
        description:
          "Comprender los métodos del ciclo de vida de los componentes y cómo usarlos para controlar la actualización y desmontaje.",
        level: "intermedio",
      },
      {
        id: 6,
        name: "Hooks",
        description:
          "Introducción a los hooks, incluyendo useState, useEffect y otros hooks personalizados para manejar lógica de estado en componentes funcionales.",
        level: "intermedio",
      },
      {
        id: 7,
        name: "Manejo de Formularios",
        description:
          "Cómo crear y gestionar formularios en React, validaciones, y control de entradas de usuario.",
        level: "intermedio",
      },
      {
        id: 8,
        name: "React Router",
        description:
          "Navegación y enrutamiento en aplicaciones React para crear rutas y gestionar vistas.",
        level: "intermedio",
      },
      {
        id: 9,
        name: "Context API",
        description:
          "Gestión de estado global usando Context API para compartir datos entre componentes sin prop drilling.",
        level: "intermedio",
      },
      {
        id: 10,
        name: "Renderizado Condicional y Listas",
        description:
          "Cómo renderizar contenido de forma condicional y manejar listas de datos en la interfaz.",
        level: "básico",
      },
      {
        id: 11,
        name: "Optimización de Rendimiento",
        description:
          "Mejorar el rendimiento de las aplicaciones con técnicas como memoización, lazy loading y react.memo.",
        level: "avanzado",
      },
      {
        id: 12,
        name: "Manejo de Estado con Redux",
        description:
          "Integración de Redux para una gestión avanzada de estado en aplicaciones grandes y complejas.",
        level: "avanzado",
      },
      {
        id: 13,
        name: "Testing en React",
        description:
          "Escribir pruebas para componentes de React utilizando Jest, React Testing Library o Enzyme.",
        level: "avanzado",
      },
      {
        id: 14,
        name: "React con TypeScript",
        description:
          "Uso de TypeScript en React para agregar tipado estático y mejorar la mantenibilidad del código.",
        level: "avanzado",
      },
    ],
  },
  {
    courseId: 20,
    name: "Node.js",
    description:
      "¡Bienvenido al curso de Node.js! En este curso aprenderás a construir aplicaciones web del lado del servidor utilizando JavaScript. Node.js es una plataforma poderosa y eficiente basada en el motor de JavaScript V8 de Google, que te permitirá crear aplicaciones escalables y rápidas. A lo largo de este curso, exploraremos los conceptos clave de Node.js, desde la creación de servidores y manejo de rutas, hasta el uso de bases de datos, autenticación y seguridad. Este curso es ideal para aquellos que quieren llevar sus habilidades de desarrollo web al siguiente nivel.",
    features: [
      {
        id: 50,
        feature:
          "JavaScript en el Backend: Con Node.js puedes utilizar el mismo lenguaje, JavaScript, tanto en el frontend como en el backend, lo que facilita el desarrollo full-stack.",
      },
      {
        id: 60,
        feature:
          "Alta Escalabilidad: Gracias a su arquitectura basada en eventos y un modelo de E/S no bloqueante, Node.js permite manejar múltiples conexiones concurrentes de forma eficiente.",
      },
      {
        id: 70,
        feature:
          "Gran Ecosistema: Node.js cuenta con un vasto ecosistema de librerías y paquetes a través de npm (Node Package Manager), lo que facilita la integración de funcionalidades adicionales a tus proyectos.",
      },
      {
        id: 80,
        feature:
          "Desarrollo de APIs Rápido y Eficiente: Node.js es ideal para crear APIs RESTful, lo que permite desarrollar servicios backend ligeros y eficientes.",
      },
    ],
    topics: [
      {
        id: 1,
        name: "Introducción a Node.js",
        description:
          "Conceptos básicos de Node.js, cómo funciona, y cómo configurar un entorno de desarrollo.",
        level: "básico",
      },
      {
        id: 2,
        name: "Módulos en Node.js",
        description:
          "Cómo utilizar y crear módulos en Node.js para organizar y reutilizar código.",
        level: "básico",
      },
      {
        id: 3,
        name: "Manejo de Archivos",
        description:
          "Leer y escribir archivos en Node.js utilizando el módulo `fs` (file system).",
        level: "básico",
      },
      {
        id: 4,
        name: "Servidores HTTP",
        description:
          "Crear y gestionar servidores HTTP utilizando Node.js, además de manejar peticiones y respuestas.",
        level: "básico",
      },
      {
        id: 5,
        name: "Express.js",
        description:
          "Introducción a Express.js, un framework minimalista para construir aplicaciones web y APIs.",
        level: "intermedio",
      },
      {
        id: 6,
        name: "Bases de Datos con Node.js",
        description:
          "Conectar Node.js a bases de datos como MongoDB y MySQL para realizar operaciones CRUD.",
        level: "intermedio",
      },
      {
        id: 7,
        name: "Autenticación y Autorización",
        description:
          "Implementar autenticación de usuarios mediante JWT o sesiones, y manejar la autorización en rutas.",
        level: "intermedio",
      },
      {
        id: 8,
        name: "Manejo de Errores y Middleware",
        description:
          "Aprender a manejar errores de forma eficiente en aplicaciones Node.js y usar middleware en Express.",
        level: "intermedio",
      },
      {
        id: 9,
        name: "Despliegue de Aplicaciones Node.js",
        description:
          "Cómo desplegar aplicaciones Node.js en servidores y plataformas como Heroku o DigitalOcean.",
        level: "intermedio",
      },
      {
        id: 10,
        name: "Seguridad en Node.js",
        description:
          "Buenas prácticas de seguridad para proteger aplicaciones Node.js de vulnerabilidades comunes.",
        level: "avanzado",
      },
      {
        id: 11,
        name: "Sockets y Aplicaciones en Tiempo Real",
        description:
          "Desarrollo de aplicaciones en tiempo real utilizando WebSockets con Node.js y Socket.io.",
        level: "avanzado",
      },
      {
        id: 12,
        name: "Testing en Node.js",
        description:
          "Escribir pruebas unitarias y de integración para aplicaciones Node.js utilizando frameworks como Mocha y Chai.",
        level: "avanzado",
      },
      {
        id: 13,
        name: "Optimización de Rendimiento",
        description:
          "Técnicas para mejorar el rendimiento y la escalabilidad de aplicaciones Node.js en producción.",
        level: "avanzado",
      },
    ],
  },
];
export const homepageItems = [
  {
    title: "Samsung Galaxy S23",
    description: "El Samsung Galaxy S23 es un smartphone de alta gama con una pantalla Dynamic AMOLED de 6.1 pulgadas, procesador Snapdragon 8 Gen 2, y una cámara triple de 50MP para fotos y vídeos impresionantes.",
    image:"https://athenascode.github.io/Athens/img/product1.webp",
    original_price: 900000,
    discounted_price: 750000,
    discount: 17
  },
  {
    title: "iPad Air (2022)",
    description: "El iPad Air de 2022 cuenta con una pantalla Liquid Retina de 10.9 pulgadas, el chip M1 de Apple y soporte para el Apple Pencil de segunda generación, ofreciendo un rendimiento excepcional para todas tus tareas.",
    image:"https://athenascode.github.io/Athens/img/IPad_Air.png",
    original_price: 800000,
    discounted_price: 650000,
    discount: 19
  },
  {
    title: "Sony WH-1000XM5",
    description: "Los auriculares Sony WH-1000XM5 ofrecen cancelación de ruido líder en la industria, audio de alta resolución y comodidad durante todo el día, ideales para una experiencia de escucha inmersiva.",
    image:"https://athenascode.github.io/Athens/img/product3.avif",
    original_price: 400000,
    discounted_price: 320000,
    discount: 20
  },
  {
    title: "Dyson V15 Detect",
    description: "La aspiradora Dyson V15 Detect ofrece una potente succión, tecnología de detección de polvo y una batería de larga duración, ideal para mantener tu hogar limpio con facilidad.",
    image:"https://athenascode.github.io/Athens/img/product4.jpg",
    original_price: 600000,
    discounted_price: 480000,
    discount: 20
  },
  {
    title: "Apple MacBook Air M2",
    description: "El MacBook Air M2 presenta un diseño delgado, el chip M2 de Apple para un rendimiento ultrarrápido y una pantalla Retina de 13.6 pulgadas, ofreciendo potencia y portabilidad en un solo dispositivo.",
    image:"https://athenascode.github.io/Athens/img/product5.png",
    original_price: 1200000,
    discounted_price: 1000000,
    discount: 17
  },
  {
    title: "Bose QuietComfort 45",
    description: "Los auriculares Bose QuietComfort 45 ofrecen una cancelación de ruido superior, sonido de alta calidad y comodidad prolongada, perfectos para viajes o uso diario.",
    image:"https://athenascode.github.io/Athens/img/product6.png",
    original_price: 350000,
    discounted_price: 280000,
    discount: 20
  },
  {
    title: "Samsung Galaxy Tab S8",
    description: "La Galaxy Tab S8 ofrece una pantalla AMOLED de 11 pulgadas, el procesador Snapdragon 8 Gen 1 y soporte para el S Pen, ideal para productividad y entretenimiento.",
    image:"https://athenascode.github.io/Athens/img/product7.webp",
    original_price: 700000,
    discounted_price: 580000,
    discount: 17
  },
  {
    title: "LG OLED55CXPUA",
    description: "El televisor LG OLED55CXPUA cuenta con una pantalla OLED 4K de 55 pulgadas, procesador α9 Gen 4 AI y soporte para Dolby Vision y Dolby Atmos.",
    image:"https://athenascode.github.io/Athens/img/product8.avif",
    original_price: 2000000,
    discounted_price: 1800000,
    discount: 10
  },
  {
    title: "Apple Watch Series 8",
    description: "El Apple Watch Series 8 ofrece una pantalla Always-On Retina, sensores avanzados para monitoreo de salud y actividad, y un diseño elegante y duradero.",
    image:"https://athenascode.github.io/Athens/img/product9.png",
    original_price: 450000,
    discounted_price: 350000,
    discount: 22
  },
  {
    title: "Nest Learning Thermostat",
    description: "El Nest Learning Thermostat de Google ajusta automáticamente la temperatura de tu hogar, aprendiendo tus preferencias y optimizando el consumo de energía para un confort eficiente.",
    image:"https://athenascode.github.io/Athens/img/product10.avif",
    original_price: 300000,
    discounted_price: 240000,
    discount: 20
  },
  {
    title: "Sony PlayStation 5",
    description: "La PlayStation 5 de Sony ofrece gráficos de última generación, tiempos de carga reducidos y una biblioteca extensa de juegos, brindando una experiencia de juego inmersiva y emocionante.",
    image:"https://athenascode.github.io/Athens/img/product11.webp",
    original_price: 900000,
    discounted_price: 750000,
    discount: 17
  },
  {
    title: "Dyson Pure Cool TP04",
    description: "El Dyson Pure Cool TP04 es un purificador de aire y ventilador todo en uno, que captura contaminantes y elimina olores con su filtro HEPA y carbono, mientras proporciona un flujo de aire refrescante.",
    image:"https://athenascode.github.io/Athens/img/product12.png",
    original_price: 500000,
    discounted_price: 400000,
    discount: 20
  }
];
