'use server'

export async function SingleProduct(id:string)
{
    const data = await fetch(process.env.API + `/products/${id}`)
    return data.json()
} 