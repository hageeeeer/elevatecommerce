'use client'
import '@fortawesome/fontawesome-free/css/all.min.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { SessionProvider } from 'next-auth/react'
import { useEffect } from 'react'
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('./_components/navbar/Navbar'), { ssr: false });
// Create a client for React Query
const queryClient = new QueryClient()

export default function RootLayout({ children }: { children: React.ReactNode }) {



  // Adding cz-shortcut-listen only on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.setAttribute('cz-shortcut-listen', 'true')
    }

    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <html lang="en">
      <body>
        <QueryClientProvider client={queryClient}>
          <SessionProvider>

            <Navbar />
            {children}
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
