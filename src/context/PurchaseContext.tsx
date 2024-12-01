import { createContext, useContext, useState, ReactNode } from 'react';
import type { Purchase, TopBuyer } from '@/types/purchase';

interface PurchaseContextType {
  purchases: Purchase[];
  addPurchase: (purchase: Purchase) => void;
  getTopBuyer: () => TopBuyer | null;
}

const PurchaseContext = createContext<PurchaseContextType | undefined>(undefined);

export function PurchaseProvider({ children }: { children: ReactNode }) {
  const [purchases, setPurchases] = useState<Purchase[]>([]);

  const addPurchase = (purchase: Purchase) => {
    setPurchases(prev => [purchase, ...prev]);
  };

  const getTopBuyer = () => {
    if (purchases.length === 0) return null;

    const buyerStats = purchases.reduce((acc, purchase) => {
      const { username, amount } = purchase;
      if (!acc[username]) {
        acc[username] = { totalSpent: 0, purchaseCount: 0 };
      }
      acc[username].totalSpent += amount;
      acc[username].purchaseCount += 1;
      return acc;
    }, {} as Record<string, { totalSpent: number; purchaseCount: number }>);

    const topBuyer = Object.entries(buyerStats).reduce((top, [username, stats]) => {
      if (!top || stats.totalSpent > top.totalSpent) {
        return { username, ...stats };
      }
      return top;
    }, null as (TopBuyer | null));

    return topBuyer;
  };

  return (
    <PurchaseContext.Provider value={{ purchases, addPurchase, getTopBuyer }}>
      {children}
    </PurchaseContext.Provider>
  );
}

export function usePurchases() {
  const context = useContext(PurchaseContext);
  if (context === undefined) {
    throw new Error('usePurchases must be used within a PurchaseProvider');
  }
  return context;
}