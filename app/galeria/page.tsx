import Link from "next/link";
import Image from "next/image";

export default function GaleriaPage() {
  return (
    <div className="flex flex-col min-h-screen pt-10 items-center text-white relative z-10 pb-16">
    <div className="flex gap-8">
    <Link href="/" className='text-xl rounded-full p-1 h-6 w-6 border flex items-center justify-center' >
          {'<'} 
      </Link>
      <h1>Galeria</h1>
    </div>
      <div className="flex flex-wrap justify-center items-center w-full max-w-4xl mt-4 p-8 gap-4">
      {
        Array.from({ length: 9 }).map((_, i) => (
          <Image
            src={`https://picsum.photos/200/300?random=${i}`}
            alt={`Random image ${i}`}
            className="h-auto mb-4"
            key={i}
            width={200}
            height={300}
          />
        ))
      }
      </div>
      <Link href="/catalog" className="neon-pink">Comenzar</Link>
    </div>
  );
}