'use server'
import { LoginValues } from "../types/login.types"
export async function fetchlogin({email,password}:LoginValues) {
    const res = await fetch(process.env.API + '/auth/signin', {
        method: 'post',
        body: JSON.stringify({email,password}),
        cache: 'no-store',
        headers: {
            'Content-type': 'application/json'
        }
    })
    return res

}