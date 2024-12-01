export interface TokenPrice {
  amount: number;
  price: number;
  originalPrice: number;
}

export interface Token {
  id: string;
  name: string;
  description: string;
  prices: TokenPrice[];
  icon: string;
  color: string;
}