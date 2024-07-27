import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight: '400'});

export const metadata = {
  title: "Easy Party",
  description: "Planea tus eventos con nosotros",
  manifest: "/manifest.json",
  icons: {
    apple: "/icon-192x192.png",
    android: "/icon-192x192.png",
    windows: "/icon-192x192.png",
    favicons: "/icon-192x192.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="overflow-x-hidden">
      <div  className={`${poppins.className} bg-ez-base relative w-full overflow-hidden min-h-screem flex flex-col items-center`}>
       <div className="relative z-10 max-w-3xl">
       {children} 
       </div>
        <div className="w-60 h-60 bg-ez-blue absolute -top-12 -left-12 rounded-full blur-xl opacity-10"></div>
        <div className="w-60 h-60 bg-ez-pink absolute -bottom-12 -right-12 rounded-full blur-xl opacity-10"></div>
        </div>
      </body>
    </html>
  );
}
