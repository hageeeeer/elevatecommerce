'use server'

export async function AllProducts()
{
    const data = await fetch(process.env.API + '/products')
    return data.json()
} 