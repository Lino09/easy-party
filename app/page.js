import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen pt-10 items-center text-white relative z-10">
      <div className="radial-fade">
      <Image src="/logo.jpg" alt="Easy Party" width={256} height={256} priority className="" />
      </div>
      <h1 className="text-white text-xl font-bold mt-8">¡Bienvenidos a EasyParty!</h1>
      <p className="text-center mt-8 px-4" >Diseña tu evento desde cero con opciones de personalización detalladas. Define el tema, la ubicación, la fecha y la hora, todo a tu gusto. </p>
      
      <Link href="/galeria" className="neon-blue mb-8">Galeria</Link>
      <Link href="/catalog" className="neon-pink">Comenzar</Link>
    </main>
  );
}