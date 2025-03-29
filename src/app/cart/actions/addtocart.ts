'use server'
import { authOptions } from '@/options';
import { getServerSession } from 'next-auth';

// This function is now a server-side function
export async function addToCart(product: string) {
    const session = await getServerSession(authOptions);  // Get session on the server side
    console.log('sessiontoken',session?.user);
    
    if (!session?.token) {
        throw new Error('User is not authenticated');
    }

    const res = await fetch(`https://flower.elevateegy.com/api/v1/cart`, {
        method: 'POST',
        cache: 'no-store',
        body: JSON.stringify({
            product,
            quantity: 1,
        }),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session?.token}`,  // Ensure the token is available here
        },
    });

    const data = await res.json();

    if (res.ok) {
        return data;
    }

    throw new Error(data?.message || 'Failed to add to cart');
}
