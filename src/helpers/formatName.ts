export const formatHelper = (nombre: string): string => {
  return nombre
    .split("-") // Divide el nombre en palabras usando "-" como delimitador
    .map(
      (word) => word.replace(/\d+/g, "") // Elimina los números de cada palabra
    )
    .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Convierte la primera letra a mayúscula y el resto a minúscula
    )
    .filter((word) => word.length > 0) // Elimina palabras vacías que podrían resultar de la eliminación de números
    .join(" "); // Une las palabras con espacios en blanco
};
