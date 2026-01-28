import { Product } from '../data/products';
import { Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0;

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-lg">
      <div className="relative border-b border-gray-100 p-4 pt-8">
         <img 
           src={product.image} 
           alt={product.title} 
           className="mx-auto h-48 w-full object-contain"
         />
         <button className="absolute top-4 right-4 text-blue-500 opacity-0 transition-opacity group-hover:opacity-100">
           <Heart size={24} />
         </button>
      </div>
      
      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-2 text-sm font-normal text-gray-600">
          {product.title}
        </h3>
        
        <div className="mt-2 flex items-center gap-2">
           {product.originalPrice && (
             <span className="text-xs text-gray-400 line-through">
               R$ {product.originalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
             </span>
           )}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-2xl font-normal text-[#333]">
            R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </span>
          {discount > 0 && (
            <span className="text-sm font-medium text-green-600">
              {discount}% OFF
            </span>
          )}
        </div>

        <div className="mt-1">
          <span className="text-xs font-medium text-green-600">
            em {product.installments.count}x R$ {product.installments.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })} sem juros
          </span>
        </div>

        {product.freeShipping && (
          <div className="mt-2">
            <span className="text-xs font-bold text-green-600">Frete grátis</span>
          </div>
        )}
        
        {product.originalPrice && discount > 10 && (
          <div className="mt-1">
             <span className="text-xs font-bold uppercase text-[#3483fa]">Meli+</span>
          </div>
        )}
        
        <button 
          onClick={() => addToCart(product)}
          className="mt-4 w-full rounded bg-blue-600 py-2 text-sm font-semibold text-white opacity-0 transition-opacity hover:bg-blue-700 group-hover:opacity-100 lg:mt-auto"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}