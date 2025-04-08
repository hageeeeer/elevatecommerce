import { useQuery } from "@tanstack/react-query";
import { CarRes } from "../_types/cart.types";
import { useSession } from "next-auth/react";

export default function useQueryCart() {
  const { data: session, status } = useSession(); // Get session status and data
  async function getData() {
    if (!session?.token) {
      throw new Error("No valid session token available"); // Ensure token is available
    }
    try {
      const res = await fetch('https://flower.elevateegy.com/api/v1/cart', {
        method: 'GET',
        cache: 'no-store', // Disable caching for fresh data
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${session.token}`, // Use session token for Authorization
        }
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData?.message || 'Failed to fetch cart');
      }

      const data: CarRes = await res.json(); // Parse the response JSON into the CarRes type
      return data; // Return the fetched data
    } catch (error) {
      throw new Error(error instanceof Error ? error.message : 'An error occurred while fetching the cart');
    }
  }

  // Use React Query to fetch cart data, but only if session is authenticated
  return useQuery({
    queryKey: ['cart'],       // Cache key for this query
    queryFn: getData,         // The function to fetch data
    enabled: status === 'authenticated', // Only run the query when session is authenticated
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes (adjust as needed)
    retry: 2,                 // Retry the query 2 times on failure (adjust as needed)
  });
}
