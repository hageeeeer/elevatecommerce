'use client';
import { addToCart } from '@/app/cart/actions/addtocart';
import React from 'react';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Loading from '@/app/_components/Loading';

interface AddBtnProps {
  product: string;
}

export default function AddBtn({ product }: AddBtnProps) {
  // React Query Client to invalidate queries after success
  const queryClient = useQueryClient();

  // Use Mutation hook to handle Add to Cart logic
  const { mutate, isLoading } = useMutation({
    mutationFn: addToCart, // Function to add product to cart
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      toast.success('Product added successfully!', {
        style: {
          backgroundColor: '#FB66C1',
        },
      });
    },
    onError: () => {
      const errorMessage =  'login first';
      toast.error(errorMessage, {
        style: {
          backgroundColor: '#F66C1C',
        },
      });

    },
  });

  // Show loading indicator if mutation is in progress
  if (isLoading) {
    return <Loading />;
  }

  // Handle click event to add product to cart
  const handleAddToCart = () => {
    mutate(product); // Trigger mutation with product ID or data
  };

  return (
    <button
      onClick={handleAddToCart}
      className="hover:bg-white my-5 hover:text-[rgb(251,102,193)] hover:border-5 hover:border-[rgb(251,102,193)] border transition-colors bg-[rgb(251,102,193)] text-white rounded px-4 py-2"
    >
      Add to cart
    </button>
  );
}
