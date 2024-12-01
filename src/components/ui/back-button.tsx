import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function BackButton() {
  return (
    <Link 
      to="/"
      className="inline-flex items-center gap-2 text-beige-300 hover:text-beige-100 mb-8 transition-colors"
    >
      <ChevronLeft className="w-5 h-5" />
      Volver al inicio
    </Link>
  );
}