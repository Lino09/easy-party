'use client'

import paquetes from '../../../data/paquetes.json';
import { useContext } from 'react';
import CartContext from '../../../contextProvider/cartContext';
import { useRouter } from 'next/navigation'
import Link from 'next/link';

const Catalog =() => {
  const router = useRouter()
  const {cart, setCart} = useContext(CartContext);

const updateCart = (paquete) => {
  setCart({...cart, paquete});
  router.push('/date-selection');
}
  const formatPrice = (price) => new Intl.NumberFormat('es-MX', {style: 'currency', currency: 'MXN'}).format(price);
  return (
  <div className="text-white flex flex-col items-center pt-10 w-10/12 pb-24">
    <div className='flex  gap-8'>
    <Link href="/" className='text-xl rounded-full p-1 h-6 w-6 border flex items-center justify-center' >
          {'<'} 
      </Link>
     <h1 className="text-xl"> Paquetes disponibles</h1>
    </div>
     <span className="my-4">Básicos</span>
     <ul className="flex flex-col gap-4 w-full">
      {paquetes.basicos.map((paq) => (
        <li key={paq.nombre} className="flex flex-col border-gray-300 border rounded-md px-2 py-4 bg-white bg-opacity-5 gap-2 pb-8">
         <span>{paq.nombre} ({paq.capacidad} Personas) </span>
         <ol className="text-sm">
          {paq.incluido.map((item) => (
            <li key={item}>&#8226; {item}</li>
          ))}
         </ol>
         <span>Precio {formatPrice(paq.precio)} </span>
         <button href="/catalog" className="neon-pink w-40 mx-auto" onClick={() => updateCart(paq.nombre)} >Seleccionar</button>
        </li>
      ))}
     </ul>     
     <span className="mt-8 mb-4">Completos</span>
     <ul className="flex flex-col gap-4 w-full">
      {paquetes.completos.map((paq) => (
        <li key={paq.nombre} className="flex flex-col border-gray-300 border rounded-md px-2 py-4 bg-white bg-opacity-5 gap-2 pb-8">
         <span>{paq.nombre} ({paq.capacidad} Personas) </span>
         <ol className="text-sm">
          {paq.incluido.map((item) => (
            <li key={item}>&#8226; {item}</li>
          ))}
         </ol>
         <span>Precio {formatPrice(paq.precio)} </span>
         <button href="/catalog" className="neon-blue w-40 mx-auto" onClick={() => updateCart(paq.nombre)} >Seleccionar</button>
        </li>
      ))}
     </ul>
  </div>
 )
}
export default Catalog;