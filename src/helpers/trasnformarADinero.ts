export const transformarADinero = (valor: string) => {
  return `Valor: $${Number(valor).toLocaleString()}`;
};
