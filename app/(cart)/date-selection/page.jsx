'use client'
import { useContext, useState } from 'react';
import Link from 'next/link';
import CartContext from '../../../contextProvider/cartContext';

const getCurrentDate = () => {
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  if (day < 10) {
      day = '0' + day;
  }
  if (month < 10) {
      month = '0' + month;
  }
  return `${year}-${month}-${day}`;
}

const convertToDate =(dateString) => {
  console.log(dateString)
const [year, month, day] = dateString.split('-').map(Number);
const date = new Date(year, month - 1, day);
const daysOfWeek = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
const dia = daysOfWeek[date.getDay()];
return `${dia} ${new Intl.DateTimeFormat('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }).format(date)}`;
}
const monthNames = [
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
];

const convertToISODate = (dateString) => {
  const parts = dateString.split(' ');
  const day = parts[1];
  const monthName = parts[3];
  const year = parts[5];
  const month = monthNames.indexOf(monthName) + 1;
  const dayPadded = day.padStart(2, '0');
  const monthPadded = month.toString().padStart(2, '0');
  return `${year}-${monthPadded}-${dayPadded}`;
};


const DateSelection = () => {

  const {cart, setCart} = useContext(CartContext);
  const [alertMsg, setAlertMsg] = useState('');

  const displayAlert = (msg) => {
    setAlertMsg(msg);
    setTimeout(() => {
      setAlertMsg('');
    }, 2000)
  }

  const cotizar = () => {
    const {paquete, fecha} = cart;
    if (paquete === 'sin definir')return displayAlert('Seleccione un paquete'); 
    if (fecha === 'sin definir')return displayAlert('Seleccione una fecha'); 
   const text = `Hola, Me gustaría cotizar un evento, me interesa el ${paquete}, para el día ${fecha}`;
   const uri = `https://wa.me/525625067997?text=${encodeURIComponent(text)}`;
    if (typeof window !== 'undefined') {
      window.location.href = uri;
    }
  }

  return (
    <div className="w-full min-h-screen text-white flex flex-col items-center pt-10">
      <div className='flex gap-4 items-center'>
      <Link href="/catalog" className='text-xl rounded-full p-1 h-6 w-6 border flex items-center justify-center' >
          {'<'} 
      </Link>
      <h1 className=''>Seleccione la fecha de su evento</h1>
      </div>
      <label htmlFor="event-date">Fecha de Evento:</label>
      <input
        className="text-black mt-4" type="date" id="event-date" name="event date"
        value={convertToISODate(cart.fecha)} min={getCurrentDate()} onChange={(e)=> setCart({...cart, fecha: convertToDate(e.target.value)})} />
      <div className='mt-16'>
      <button className='neon-blue' onClick={cotizar}>Cotizar</button>

      </div>
      {!!alertMsg && <div className={`bg-pink-900 text-white font-bold absolute bottom-24 right-2 px-4 py-4 rounded-lg transition-opacity duration-500 ${alertMsg? 'opacity-100':'opacity-0'}`}>Por favor {alertMsg}</div>}
    </div>
  );
};
export default DateSelection;