'use server'

export async function AllCategories()
{
    const data = await fetch(process.env.API + `/categories`)
    return data.json()
} 