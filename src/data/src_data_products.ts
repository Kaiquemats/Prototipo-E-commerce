export interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  freeShipping: boolean;
  installments: {
    count: number;
    amount: number;
  };
  rating: number;
  reviews: number;
  seller: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Smartphone Samsung Galaxy S23 256GB 5G Tela 6.1'' 50MP - Preto",
    price: 3599,
    originalPrice: 5999,
    image: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=600",
    freeShipping: true,
    installments: { count: 10, amount: 359.90 },
    rating: 4.8,
    reviews: 1250,
    seller: "Loja Oficial Samsung"
  },
  {
    id: 2,
    title: "Notebook Dell Inspiron 15 Intel Core i5 8GB 256GB SSD Windows 11",
    price: 3299,
    originalPrice: 4500,
    image: "https://images.unsplash.com/photo-1593642632823-8f78536788c6?auto=format&fit=crop&q=80&w=600",
    freeShipping: true,
    installments: { count: 12, amount: 274.91 },
    rating: 4.7,
    reviews: 840,
    seller: "Dell Brasil"
  },
  {
    id: 3,
    title: "Smart TV 50'' 4K UHD Crystal Samsung",
    price: 2199,
    originalPrice: 3200,
    image: "https://images.unsplash.com/photo-1593784997437-460469689882?auto=format&fit=crop&q=80&w=600",
    freeShipping: true,
    installments: { count: 10, amount: 219.90 },
    rating: 4.6,
    reviews: 3200,
    seller: "Mega Eletro"
  },
  {
    id: 4,
    title: "Fone de Ouvido Bluetooth JBL Tune 510BT Pure Bass",
    price: 249,
    originalPrice: 329,
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=600",
    freeShipping: false,
    installments: { count: 3, amount: 83.00 },
    rating: 4.9,
    reviews: 5400,
    seller: "JBL Official"
  },
  {
    id: 5,
    title: "Tênis Nike Revolution 6 Next Nature Masculino",
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600",
    freeShipping: true,
    installments: { count: 6, amount: 49.83 },
    rating: 4.5,
    reviews: 120,
    seller: "Netshoes"
  },
  {
    id: 6,
    title: "Cadeira Gamer ThunderX3 EC3",
    price: 999,
    originalPrice: 1500,
    image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=600",
    freeShipping: false,
    installments: { count: 10, amount: 99.90 },
    rating: 4.7,
    reviews: 450,
    seller: "Gamer Zone"
  },
  {
    id: 7,
    title: "Apple iPhone 14 128GB Estelar",
    price: 4599,
    originalPrice: 7599,
    image: "https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?auto=format&fit=crop&q=80&w=600",
    freeShipping: true,
    installments: { count: 12, amount: 383.25 },
    rating: 4.9,
    reviews: 980,
    seller: "Apple Store"
  },
  {
    id: 8,
    title: "Cafeteira Expresso Nespresso Essenza Mini",
    price: 449,
    originalPrice: 599,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600",
    freeShipping: true,
    installments: { count: 5, amount: 89.80 },
    rating: 4.8,
    reviews: 2100,
    seller: "Nespresso"
  },
  {
    id: 9,
    title: "Console PlayStation 5 825GB SSD",
    price: 3999,
    originalPrice: 4499,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&q=80&w=600",
    freeShipping: true,
    installments: { count: 12, amount: 333.25 },
    rating: 4.9,
    reviews: 5000,
    seller: "Sony Brasil"
  },
  {
    id: 10,
    title: "Monitor Gamer LG UltraGear 24'' 144Hz",
    price: 999,
    originalPrice: 1399,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=600",
    freeShipping: true,
    installments: { count: 10, amount: 99.90 },
    rating: 4.6,
    reviews: 420,
    seller: "LG Official"
  },
  {
    id: 11,
    title: "Cadeira de Escritório Ergonômica Mesh",
    price: 450,
    originalPrice: 600,
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=600",
    freeShipping: false,
    installments: { count: 4, amount: 112.50 },
    rating: 4.3,
    reviews: 150,
    seller: "Office Decor"
  },
  {
    id: 12,
    title: "Relógio Smartwatch Amazfit GTS 4 Mini",
    price: 589,
    originalPrice: 799,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=600",
    freeShipping: true,
    installments: { count: 6, amount: 98.16 },
    rating: 4.7,
    reviews: 890,
    seller: "Amazfit Global"
  }
];
