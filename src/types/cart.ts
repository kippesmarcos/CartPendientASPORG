export interface CartItem {
  id: string;
  name: string;
  price: number;
  type: 'rank' | 'kit' | 'key' | 'token';
  durationType: 'permanent' | 'monthly';
  icon: string;
  color: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  isOpen: boolean;
}

export interface CartContextType {
  cart: CartState;
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  toggleCart: () => void;
  clearCart: () => void;
  updateQuantity: (itemId: string, quantity: number) => void;
}