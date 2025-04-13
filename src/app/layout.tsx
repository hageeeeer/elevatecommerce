'use client'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css'
import { SessionProvider } from 'next-auth/react';
import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Footer from '@/app/_components/footer/Footer';
import Navbar from '@/app/_components/navbar/Navbar';
import SearchContextProvider from '@/Context/searchContext';
import { Inter, Alex_Brush } from '@next/font/google'
import { Toaster } from 'react-hot-toast';
const alexBrush = Alex_Brush({
  subsets: ['latin'],  // Add other subsets if needed
  weight: ['400'], // The weight for Alex Brush (typically 400)
  display: 'swap', // For better font loading performance
});
const inter = Inter({
  subsets: ['latin'],  // You can add additional subsets like 'latin-ext' if needed
  weight: ['400', '500', '700'],  // Load the weights you need
  display: 'swap',     // Ensures proper font swapping
});


export default function RootLayout({ children}:{
  children: React.ReactNode}) {

    useEffect(() => {
      if (typeof window !== 'undefined') {
        document.body.setAttribute('cz-shortcut-listen', 'true')
      }
    }, [])
  const query = new QueryClient()
  return <html>
    <body>
    <QueryClientProvider client={query}>
        <SessionProvider>
          <SearchContextProvider>
            <div className={`${inter.className} flex flex-col justify-between min-h-screen`} >
              <Navbar font={alexBrush} />
              {children}
              <Footer />
            </div>
            <Toaster/>
          </SearchContextProvider>
        </SessionProvider>
        </QueryClientProvider> 
    </body>
  </html>
  
 
}
