export interface Categoria {
  id: number;
  nombre: string;
  productos: Producto[];
  disponible: boolean;
}

export interface Producto {
  nombre: string;
  valor: number;
  valorOferta: number;
  urlImagen: string;
  descripcion: string;
  disponible: boolean;
}

export interface DatosLocal {
  telefono: string;
  ubicacion: string;
  rrss: string;
}
