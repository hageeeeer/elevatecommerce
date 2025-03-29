'use server'
import { authOptions } from '@/options';
import { getServerSession } from 'next-auth';

export async function deleteItem(product: string) {
    const session = await getServerSession(authOptions);
    let res = await fetch(`https://flower.elevateegy.com/api/v1/cart/${product}`, {
        method: 'delete',
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${session?.token}`
        }
    })
    res = await res.json()
    return res
}