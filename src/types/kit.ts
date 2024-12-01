export interface Kit {
  id: string;
  name: string;
  description: string;
  price: {
    permanent: number;
    monthly: number;
  };
  icon: string;
  features: string[];
  color: string;
}