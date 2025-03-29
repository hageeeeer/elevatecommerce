'use server'
import { authOptions } from '@/options';
import { getServerSession } from 'next-auth';

export async function updateItem({product,quantity}:{product:string,quantity:number}) {
    const session = await getServerSession(authOptions);
    let res = await fetch(`https://flower.elevateegy.com/api/v1/cart/${product}`, {
        method: 'put',
        body:JSON.stringify({
            quantity
        }),
        headers: {
            'Content-type': 'application/json',
            'Authorization': `Bearer ${session?.token}`
        }
    })
    res = await res.json()
    return res
}