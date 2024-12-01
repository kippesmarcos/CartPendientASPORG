import { MainLayout } from '@/components/layout/MainLayout';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Store } from '@/components/Store';
import { PurchaseStats } from '@/components/purchases/PurchaseStats';

export function Home() {
  return (
    <MainLayout>
      <Hero />
      <Stats />
      <div className="max-w-7xl mx-auto px-4 py-16">
        <PurchaseStats />
      </div>
      <Store />
    </MainLayout>
  );
}