export interface Purchase {
  id: string;
  username: string;
  amount: number;
  timestamp: number;
  items: {
    name: string;
    quantity: number;
  }[];
}

export interface TopBuyer {
  username: string;
  totalSpent: number;
  purchaseCount: number;
}