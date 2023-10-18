export interface Product {
  id: number;
  title: string;
  price: number;
  descrition: string;
  image: string;
  count?: number;
  delivery?: string;
  track?: string;
}
