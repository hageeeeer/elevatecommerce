"use server";

import { RegisterData } from "../types/register.type";

export async function fetchregister(registerdata: RegisterData) {
    try {
        const response = await fetch(`${process.env.API}/auth/signup`, {
            method: 'post',
            body: JSON.stringify(registerdata),
            headers: {
                'content-type': 'application/json; charset=utf-8'
            }
        });
        if (!response.ok) {
            throw new Error(`Failed to sign up. Server responded with status: ${response.status}`);
        }

        // Parse the response data if the request is successful
        const data = await response.json();

        return data;
    } catch (error) {
      return error

    }
}
