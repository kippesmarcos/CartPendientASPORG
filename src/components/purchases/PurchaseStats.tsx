import { RecentPayments } from './RecentPayments';
import { TopBuyer } from './TopBuyer';

export function PurchaseStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <TopBuyer />
      <RecentPayments />
    </div>
  );
}