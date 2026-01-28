import { useState } from 'react';
import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { PaymentInfo } from './components/PaymentInfo';
import { ProductList } from './components/ProductList';
import { CartProvider } from './context/CartContext';
import { CartSidebar } from './components/CartSidebar';

export function App() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-100 font-sans">
        <Header onSearch={setSearchQuery} />
        <CartSidebar />
        <main>
          <Banner />
          <PaymentInfo />
          <ProductList searchQuery={searchQuery} />
        </main>
        <footer className="bg-white py-8 text-center text-xs text-gray-500">
          <p>Copyright © 1999-2024 Ebazar.com.br LTDA.</p>
          <p>CNPJ n.º 03.007.331/0001-41 / Av. das Nações Unidas, nº 3.003, Bonfim, Osasco/SP - CEP 06233-903 - empresa do grupo Mercado Livre.</p>
        </footer>
      </div>
    </CartProvider>
  );
}