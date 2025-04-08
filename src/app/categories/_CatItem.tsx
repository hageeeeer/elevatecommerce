import React from 'react'
import { Category } from './_types/category.type'
import { Product } from '../products/_types/products.type'
import { AllProducts } from '../products/_actions/Products';

interface CatItemProps {
  fn: (arr: Product[]) => void;
  item: Category;
}

export default function CatItem({ item, fn }: CatItemProps) {
  // A function to filter products by category
  async function filterProducts() {
    try {
      const { products } = await AllProducts();
      const filteredItems = products.filter((prod: Product) => prod.category === item._id);
      fn(filteredItems)
    } catch (error) {
      console.error('Error fetching or filtering products:', error);
    }
  }

  const handleRadioChange = () => {
    filterProducts();
  };

  return (
    <li className='flex items-center justify-between cursor-pointer' key={item._id}>
      <div className='flex gap-2 items-center'>
        <input onChange={handleRadioChange} type="radio" id={item._id} name='category' value={item.name} />
        <label htmlFor={item._id}>{item.name}</label>
      </div>
      <div>( {item.productsCount} )</div>
    </li>
  );
}
