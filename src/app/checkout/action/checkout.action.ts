"use server"

import { authOptions } from "@/options";
import { getServerSession } from "next-auth";
import { dataAddress } from "../type/payment.types";

export async function onlinepayment(shippingAddress: dataAddress) {
    const session = await getServerSession(authOptions);
    if (!session?.token) {
        throw new Error('Session token not found');
    }
    try {

        const response = await fetch(`https://flower.elevateegy.com/api/v1/orders/checkout?url=${process.env.NEXTAUTH_URL}`, {
            method: 'post',
            body: JSON.stringify({ shippingAddress }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${session?.token}`,
            },
        })
        if (!response.ok) {
            throw ('Failed to process payment');
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
        throw error

    }
}