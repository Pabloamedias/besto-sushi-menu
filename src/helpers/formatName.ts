export const formatHelper = (nombre: string): string => {
  return nombre
    .split("-") // Divide el nombre en palabras usando "-" como delimitador
    .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Convierte la primera letra a mayúscula y el resto a minúscula
    )
    .join(" "); // Une las palabras con espacios en blanco
};
