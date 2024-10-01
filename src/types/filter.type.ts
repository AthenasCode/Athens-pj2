// src/utils/types.ts
export interface Product {
    id: number;
    title: string;
    procesador?: string;
    grafica?: string;
    marca?: string;
    resolucion?: string;
    tipoPantalla?: string;
    tipo?: string;
    conectividad?: string;
    cancelacionRuido?: boolean;
    velocidadImpresion?: string;
    lumens?: number;
    tipoCarga?: string;
    capacidad?: string;
    eficienciaEnergetica?: string;
    originalPrice: number;
    discountedPrice: number;
    discountPercentage: number;
    image: string;
  }
  
  export interface FilterOption {
    name: string;
    options: string[];
  }
  export interface Filters {
    categoria: string;
    filtros: FilterOption[];
  }
  export interface FilterSidebarProps {
    filterCategories: FilterOption[];
    selectedFilters: string[];
    toggleFilter: (filter: string) => void;
  }
  