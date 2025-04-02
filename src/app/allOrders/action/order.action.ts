"use server"

import { authOptions } from "@/options";
import { getServerSession } from "next-auth";

export async function getorders() {
   
    
    const session = await getServerSession(authOptions);
    if (!session?.token) {
        throw new Error('Session token not found');
    }
    try {

        const response = await fetch(`https://flower.elevateegy.com/api/v1/orders`, {
            method:'get',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${session?.token}`,
            }
        })
        if (!response.ok) {
            throw ('Failed to process ');
        }

        const data = await response.json();
         return data;

    } catch (error) {
        console.log(error);
        throw error

    }
}