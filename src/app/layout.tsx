'use client'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from 'next-auth/react'
import { useEffect } from 'react'
import dynamic from 'next/dynamic';
import SearchContextProvider from '@/Context/searchContext'
import Footer from './_components/footer/Footer'
import { Alex_Brush,Inter  } from '@next/font/google';
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

const Navbar = dynamic(() => import('./_components/navbar/Navbar'), { ssr: false });
// Create a client for React Query
const queryClient = new QueryClient()

export default function RootLayout({ children }: { children: React.ReactNode }) {



  // Adding cz-shortcut-listen only on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.setAttribute('cz-shortcut-listen', 'true')
    }
  }, [])

  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <QueryClientProvider client={queryClient}>
          <SessionProvider>
            <SearchContextProvider>
              <div className={`${inter.className} flex-col`}>
                <Navbar font={alexBrush}/>
                {children}
                <Footer />
              </div>
            </SearchContextProvider>
          </SessionProvider>
        </QueryClientProvider>
        <Toaster
          toastOptions={{
            success: {
              iconTheme: {
                primary: 'white',
                secondary: 'black',
              },
            },
          }}
        />
      
 
      </body>
    </html>
  )
}
