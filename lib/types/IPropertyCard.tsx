export interface IPropertyCard {
  address: string;
  area?: number | string; // Opcional si planeas agregar el área en algunas propiedades
  bathrooms: number;
  bedrooms: number;
  id: string;
  image: string;
  price: number;
  title: string;
}
