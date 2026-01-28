import { Search, ShoppingCart, MapPin, User, Bell } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onSearch: (query: string) => void;
}

export function Header({ onSearch }: HeaderProps) {
  const { cart, toggleCart } = useCart();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="bg-[#fff159] p-2 shadow-sm">
      <div className="container mx-auto max-w-[1200px]">
        <div className="flex items-center gap-4">
          <div className="mr-8 flex items-center">
            <span className="text-2xl font-bold tracking-tighter text-[#2d3277]">mercado</span>
            <span className="text-2xl font-bold tracking-tighter text-[#2d3277]">livre</span>
          </div>
          
          <div className="flex-1">
            <div className="flex items-center rounded bg-white shadow-sm">
              <input 
                type="text" 
                placeholder="Buscar produtos, marcas e muito mais..." 
                className="w-full bg-transparent px-4 py-2.5 text-[15px] outline-none placeholder:text-gray-400"
                onChange={(e) => onSearch(e.target.value)}
              />
              <button className="border-l border-gray-200 px-3 py-2 text-gray-500 hover:text-gray-700">
                <Search size={20} />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[#333]">
            <span className="hidden text-lg font-medium lg:block">Assine o Disney+</span>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-1 hover:cursor-pointer hover:rounded hover:border hover:border-transparent hover:bg-black/5 hover:p-1">
            <MapPin size={20} className="text-gray-600" />
            <div className="text-xs leading-tight text-gray-700">
              <p className="text-black/50">Enviar para</p>
              <p className="font-medium">Capital Federal</p>
            </div>
          </div>

          <nav className="hidden gap-6 text-[14px] text-gray-600 lg:flex">
            <a href="#" className="hover:text-gray-900">Categorias</a>
            <a href="#" className="hover:text-gray-900">Ofertas do dia</a>
            <a href="#" className="hover:text-gray-900">Histórico</a>
            <a href="#" className="hover:text-gray-900">Supermercado</a>
            <a href="#" className="hover:text-gray-900">Moda</a>
            <a href="#" className="hover:text-gray-900">Vender</a>
            <a href="#" className="hover:text-gray-900">Contato</a>
          </nav>

          <div className="flex items-center gap-5 text-[14px] text-[#333]">
            <div className="hidden items-center gap-1 lg:flex">
              <User size={20} />
              <span>Olá, Visitante</span>
            </div>
            <a href="#" className="hidden lg:block">Minhas compras</a>
            <a href="#" className="hidden lg:block">Favoritos</a>
            <button className="relative">
              <Bell size={20} />
            </button>
            <button className="relative" onClick={toggleCart}>
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
