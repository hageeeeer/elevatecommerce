'use server'

export async function BestSellerApi()
{
    const data = await fetch(process.env.API + '/best-seller')
    return data.json()
} 