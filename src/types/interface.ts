export interface DataProducto {
  nombre: string;
  subCategoria?: string;
  precioNormal: string;
  precioOferta: null;
  descripcion: string[] | null;
  disponible: boolean;
  url_image?: string;
}

export interface ProductosPorCategoria {
  [categoria: string]: DataProducto[];
}
