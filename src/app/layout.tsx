import { DM_Sans } from "next/font/google"
import "./globals.css"
import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";

const geistSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--geist-sans'
})

export const metadata = {
  title: "Juntii | Pide en comunidad, ahorra más y cuida el planeta",
  description: "Descubre Juntii, la app que revoluciona los pedidos de comida a domicilio. Únete a pedidos grupales, ahorra hasta un 30% de cashback y reduce tu huella de carbono. Haz amigos mientras disfrutas de tu comida favorita. Disponible ahora en App Store y Google Play.",
  keywords: [
    "Juntii",
    "pedidos comunitarios",
    "cashback",
    "ahorro en comida",
    "delivery sostenible",
    "pedidos a domicilio",
    "app de comida",
    "impacto ambiental",
    "ahorrar dinero",
    "App Store",
    "Google Play",
  ],
  openGraph: {
    title: "Juntii | Pide en comunidad, ahorra más y cuida el planeta",
    description:
      "Con Juntii, transforma tu forma de pedir comida a domicilio. Únete a pedidos grupales, disfruta hasta un 30% de cashback y reduce tu huella de carbono. ¡Descarga ahora y empieza a ahorrar!",
    url: "https://www.juntii.com",
    type: "website",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/unidotaciones-f49fc.appspot.com/o/Preview_juntii.png?alt=media&token=9cc31dd9-3845-43ae-8df7-7ac45eb74c53",
        width: 1200,
        height: 630,
        alt: "Juntii - Pide en comunidad, ahorra más y cuida el planeta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Juntii | Pide en comunidad, ahorra más y cuida el planeta",
    description:
      "Descubre Juntii, la app que revoluciona los pedidos de comida. Ahorra hasta un 30% con pedidos grupales y reduce el impacto ambiental. ¡Descarga ahora!",
    images: ["https://firebasestorage.googleapis.com/v0/b/unidotaciones-f49fc.appspot.com/o/Preview_juntii.png?alt=media&token=9cc31dd9-3845-43ae-8df7-7ac45eb74c53"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className}`}>
        <Nav/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
