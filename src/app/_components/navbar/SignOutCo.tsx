'use client'
import React from 'react'
import { signOut } from 'next-auth/react';
export default function SignOutCo() {
     //sign out fun

  function handleSignOut() {
    signOut({ callbackUrl: '/' });  // Redirect to the homepage after sign-out
  };

  return (
    <li className="cursor-pointer" onClick={handleSignOut}>
                <a className="block px-4 py-2 rounded-3xl text-white bg-pink">SignOut</a>
              </li>
  )
}
