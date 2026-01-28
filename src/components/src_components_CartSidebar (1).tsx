import { X, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function CartSidebar() {
  const { cart, removeFromCart, toggleCart, isCartOpen, cartTotal } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="fixed inset-0 bg-black/50" onClick={toggleCart}></div>
      <div className="relative z-50 h-full w-full max-w-md bg-white p-6 shadow-xl md:w-[400px]">
        <div className="flex items-center justify-between border-b pb-4">
          <h2 className="text-xl font-bold text-gray-800">Carrinho de Compras ({cart.length})</h2>
          <button onClick={toggleCart} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>

        <div className="mt-4 flex h-[calc(100vh-200px)] flex-col gap-4 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-gray-500">
              <p>Seu carrinho está vazio.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4 border-b pb-4 last:border-0">
                <img src={item.image} alt={item.title} className="h-20 w-20 rounded object-cover" />
                <div className="flex flex-1 flex-col justify-between">
                  <h3 className="line-clamp-2 text-sm text-gray-700">{item.title}</h3>
                  <div className="flex items-end justify-between">
                    <div>
                      <span className="block text-xs text-gray-500">{item.quantity} un.</span>
                      <span className="font-semibold text-gray-900">
                        R$ {item.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="absolute bottom-0 left-0 right-0 border-t bg-white p-6">
          <div className="mb-4 flex justify-between text-lg font-bold">
            <span>Total</span>
            <span>R$ {cartTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
          </div>
          <button className="w-full rounded bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700">
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
}
