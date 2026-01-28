import { CreditCard, Smartphone, PlusCircle } from 'lucide-react';

export function PaymentInfo() {
  return (
    <div className="container mx-auto mb-8 max-w-[1200px] px-4 lg:px-0">
      <div className="flex flex-col items-center justify-between rounded bg-white p-4 shadow-sm md:flex-row">
        <div className="flex items-center gap-4">
          <div className="rounded-full border border-gray-200 p-2 text-blue-500">
            <CreditCard size={24} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800">Pagamento rápido e seguro</h3>
            <p className="text-xs text-gray-500">com Mercado Pago</p>
          </div>
        </div>

         <div className="my-4 h-[1px] w-full bg-gray-200 md:my-0 md:h-10 md:w-[1px]"></div>

        <div className="flex items-center gap-4">
          <div className="rounded-full border border-gray-200 p-2 text-blue-500">
            <Smartphone size={24} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800">Até 12 parcelas sem juros</h3>
            <a href="#" className="text-xs text-blue-500 hover:underline">Ver mais</a>
          </div>
        </div>

         <div className="my-4 h-[1px] w-full bg-gray-200 md:my-0 md:h-10 md:w-[1px]"></div>

        <div className="flex items-center gap-4">
          <div className="rounded-full border border-gray-200 p-2 text-blue-500">
            <PlusCircle size={24} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-800">Mais meios de pagamento</h3>
            <a href="#" className="text-xs text-blue-500 hover:underline">Ver todos</a>
          </div>
        </div>
      </div>
    </div>
  );
}