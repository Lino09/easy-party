'use client'

import {useState} from 'react';
import CartContext from '../../contextProvider/cartContext';

export default function CartLayout({ children }) {
  const [cart, setCart] = useState({paquete:'sin definir', fecha:'sin definir'});
  return (
    <div className="w-full overflow-x-hidden min-h-screen flex flex-col items-center text-xs">
      <CartContext.Provider value={{cart, setCart}}>
        {children}
        <div className='text-white w-full bg-ez-base border-t p-4 fixed bottom-0 flex flex-col'>
          <span className='block text-center mb-2'>
            Selección
          </span>
          <div className='flex justify-center gap-8'>
          <span>
            Paquete: <br />{cart.paquete}
          </span>
          <span>
            Fecha: <br />{cart.fecha}
          </span>
          </div>
          
        </div>
      </CartContext.Provider>
    </div>
  );
}