import "../index.css";
import { Main } from "../layout/Main";
import React, { useState } from "react";

interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  categories: string[];
}

const products: Product[] = [
  {
    id: 1,
    image: "src/assets/product1.webp",
    title: "Samsung Galaxy S23",
    description:
      "El Samsung Galaxy S23 es un smartphone de alta gama con una pantalla Dynamic AMOLED de 6.1 pulgadas, procesador Snapdragon 8 Gen 2, y una cámara triple de 50MP para fotos y vídeos impresionantes.",
    originalPrice: 900000,
    discountedPrice: 750000,
    discountPercentage: 17,
    categories: ["Smartphone", "Tecnología"],
  },
  {
    id: 2,
    image: "src/assets/IPad_Air.png",
    title: "iPad Air (2022)",
    description:
      "El iPad Air de 2022 cuenta con una pantalla Liquid Retina de 10.9 pulgadas, el chip M1 de Apple y soporte para el Apple Pencil de segunda generación, ofreciendo un rendimiento excepcional para todas tus tareas.",
    originalPrice: 800000,
    discountedPrice: 650000,
    discountPercentage: 19,
    categories: ["Tableta", "Tecnología"],
  },
  {
    id: 3,
    image: "src/assets/product3.avif",
    title: "Sony WH-1000XM5",
    description:
      "Los auriculares Sony WH-1000XM5 ofrecen cancelación de ruido líder en la industria, audio de alta resolución y comodidad durante todo el día, ideales para una experiencia de escucha inmersiva.",
    originalPrice: 400000,
    discountedPrice: 320000,
    discountPercentage: 20,
    categories: ["Auriculares", "Tecnología"],
  },
  {
    id: 4,
    image: "src/assets/product4.jpg",
    title: "Dyson V15 Detect",
    description:
      "La aspiradora Dyson V15 Detect ofrece una potente succión, tecnología de detección de polvo y una batería de larga duración, ideal para mantener tu hogar limpio con facilidad.",
    originalPrice: 600000,
    discountedPrice: 480000,
    discountPercentage: 20,
    categories: ["Electrodoméstico", "Hogar"],
  },
  {
    id: 5,
    image: "src/assets/product5.png",
    title: "Apple MacBook Air M2",
    description:
      "El MacBook Air M2 presenta un diseño delgado, el chip M2 de Apple para un rendimiento ultrarrápido y una pantalla Retina de 13.6 pulgadas, ofreciendo potencia y portabilidad en un solo dispositivo.",
    originalPrice: 1200000,
    discountedPrice: 1000000,
    discountPercentage: 17,
    categories: ["Laptop", "Tecnología"],
  },
  {
    id: 6,
    image: "src/assets/product6.png",
    title: "Bose QuietComfort 45",
    description:
      "Los auriculares Bose QuietComfort 45 ofrecen una cancelación de ruido superior, sonido de alta calidad y comodidad prolongada, perfectos para viajes o uso diario.",
    originalPrice: 350000,
    discountedPrice: 280000,
    discountPercentage: 20,
    categories: ["Auriculares", "Tecnología"],
  },
  {
    id: 7,
    image: "src/assets/product7.webp",
    title: "Samsung Galaxy Tab S8",
    description:
      "La Galaxy Tab S8 ofrece una pantalla AMOLED de 11 pulgadas, el procesador Snapdragon 8 Gen 1 y soporte para el S Pen, ideal para productividad y entretenimiento.",
    originalPrice: 700000,
    discountedPrice: 580000,
    discountPercentage: 17,
    categories: ["Tableta", "Tecnología"],
  },
  {
    id: 8,
    image: "src/assets/product8.avif",
    title: "LG OLED55CXPUA",
    description:
      "El televisor LG OLED55CXPUA cuenta con una pantalla OLED 4K de 55 pulgadas, procesador α9 Gen 4 AI y soporte para Dolby Vision y Dolby Atmos.",
    originalPrice: 2000000,
    discountedPrice: 1800000,
    discountPercentage: 10,
    categories: ["Televisor", "Tecnología"],
  },
  {
    id: 9,
    image: "src/assets/product9.png",
    title: "Apple Watch Series 8",
    description:
      "El Apple Watch Series 8 ofrece una pantalla Always-On Retina, sensores avanzados para monitoreo de salud y actividad, y un diseño elegante y duradero.",
    originalPrice: 450000,
    discountedPrice: 350000,
    discountPercentage: 22,
    categories: ["Reloj", "Tecnología"],
  },
  {
    id: 10,
    image: "src/assets/product10.avif",
    title: "Nest Learning Thermostat",
    description:
      "El Nest Learning Thermostat de Google ajusta automáticamente la temperatura de tu hogar, aprendiendo tus preferencias y optimizando el consumo de energía para un confort eficiente.",
    originalPrice: 300000,
    discountedPrice: 240000,
    discountPercentage: 20,
    categories: ["Electrodoméstico", "Hogar"],
  },
  {
    id: 11,
    image: "src/assets/product11.webp",
    title: "Sony PlayStation 5",
    description:
      "La PlayStation 5 de Sony ofrece gráficos de última generación, tiempos de carga reducidos y una biblioteca extensa de juegos, brindando una experiencia de juego inmersiva y emocionante.",
    originalPrice: 900000,
    discountedPrice: 750000,
    discountPercentage: 17,
    categories: ["Consola", "Videojuegos"],
  },
  {
    id: 12,
    image: "src/assets/product12.png",
    title: "Dyson Pure Cool TP04",
    description:
      "El Dyson Pure Cool TP04 es un purificador de aire y ventilador todo en uno, que captura contaminantes y elimina olores con su filtro HEPA y carbono, mientras proporciona un flujo de aire refrescante.",
    originalPrice: 500000,
    discountedPrice: 400000,
    discountPercentage: 20,
    categories: ["Electrodoméstico", "Hogar"],
  },
];

export function PLP() {
  const [filterText, setFilterText] = useState("");
  const [maxPrice, setMaxPrice] = useState<number | undefined>(undefined);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const filteredProducts = products.filter((product) => {
    const matchesTitle = product.title
      .toLowerCase()
      .includes(filterText.toLowerCase());
    const matchesPrice =
      maxPrice === undefined || product.discountedPrice <= maxPrice;
    const matchesCategories =
      selectedCategories.length === 0 ||
      selectedCategories.some((cat) => product.categories.includes(cat));
    return matchesTitle && matchesPrice && matchesCategories;
  });

  const ProductCard: React.FC<Product> = ({
    image,
    title,
    description,
    originalPrice,
    discountedPrice,
    discountPercentage,
  }) => {
    return (
      <div className="card">
        <img className="card-image" src={image} alt={title} />
        <h1 className="card-title">{title}</h1>
        <div className="descriptionContent">
          <p>{description}</p>
        </div>
        <del>${originalPrice.toLocaleString()}</del>
        <h1 className="card-price">${discountedPrice.toLocaleString()}</h1>
        <h4>{discountPercentage}%</h4>
        <button className="secondary">Añadir al carrito</button>
      </div>
    );
  };

  const categories = Array.from(
    new Set(products.flatMap((product) => product.categories))
  ); // Obtiene categorías únicas

  return (
    <Main>
      <div className="container-home">
        <h2>¡Mira los mejores productos que tenemos!</h2>
        <div className="filterProducts">
          <input
            className="inputFind"
            type="text"
            placeholder="Buscar por título..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
          <input
            className="inputFind"
            type="number"
            placeholder="Precio máximo"
            value={maxPrice !== undefined ? maxPrice : ""}
            onChange={(e) =>
              setMaxPrice(e.target.value ? Number(e.target.value) : undefined)
            }
          />
          <div className="category-dropdown">
            <div
              className="dropdown-header"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Selecciona categorías
            </div>
            {dropdownOpen && (
              <div className="dropdown-list">
                {categories.map((category) => (
                  <label key={category} className="dropdown-item">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                    />
                    <span className="category-text">{category}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
        <section className="products">
          <div className="productsList">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>
      </div>
    </Main>
  );
}

export default PLP;
