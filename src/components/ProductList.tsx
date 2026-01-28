import { products } from '../data/products';
import { ProductCard } from './ProductCard';

interface ProductListProps {
  searchQuery: string;
}

export function ProductList({ searchQuery }: ProductListProps) {
  const filteredProducts = products.filter(product => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto -mt-16 mb-12 max-w-[1200px] px-4 lg:px-0">
      <div className="mb-6 rounded-md bg-white p-4 shadow-sm">
        <h2 className="mb-4 text-2xl font-normal text-[#666]">
          {searchQuery ? `Resultados para "${searchQuery}"` : 'Baseado na sua última visita'}
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="col-span-full py-8 text-center text-gray-500">Nenhum produto encontrado.</p>
          )}
        </div>
      </div>
      
      {!searchQuery && (
       <div className="mb-6 rounded-md bg-white p-4 shadow-sm">
        <h2 className="mb-4 text-2xl font-normal text-[#666]">Ofertas do dia</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.slice().reverse().map((product) => (
            <ProductCard key={`offer-${product.id}`} product={product} />
          ))}
        </div>
      </div>
      )}
    </div>
  );
}