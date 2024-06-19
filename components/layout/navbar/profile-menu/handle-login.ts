"use client";

import { addUser } from "@/server/admin-function/add-user";
import { signIn, useSession } from "next-auth/react";

export const handleLogin = async (domain: string) => {
    try {
      console.log('handleLogin:', domain);
  
      // Initiate Google sign-in
      await signIn("google");
      // Wait for the session to be updated
      const { data: session } = useSession();

      // User is authenticated, proceed to add user
      if (session?.user) {
        const userId = session.user.id as string;
        const email = session.user.email as string;
        const name = session.user.name as string;
        const image = session.user.image as string; 
  
        const result = await addUser(domain, userId, email, name, image);
        if (result) {
          console.log('User successfully added.');
        } else {
          console.log('User already exists or an error occurred.');
        }
      } else {
        throw new Error('Session user is undefined.');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };