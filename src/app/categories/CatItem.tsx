import React, {  useState } from 'react'
import { Category } from './types/category.type'
import { Product } from '../products/types/products.type'
import { AllProducts } from '../products/actions/Products';


interface CatItemProps {
  fn: (arr: Product[]) => void;
  item: Category;
}

export default function CatItem({ item, fn }: CatItemProps) {
  const [count, setCount] = useState(0);

  // A function to filter products by category
  async function filterProducts() {
    try {
      const { products } = await AllProducts();
      const filteredItems = products.filter((prod: Product) => prod.category === item._id);
      fn(filteredItems);
      setCount(filteredItems.length); // Update count dynamically
    } catch (error) {
      console.error('Error fetching or filtering products:', error);
    }
  }

  // Initial filtering when the component mounts
//   useEffect(() => {
//     filterProducts();
//   }, [item._id]); // Only run once on mount

  // Handle change event for filtering
  const handleRadioChange = () => {
    filterProducts();
  };

  return (
    <li className='flex items-center justify-between cursor-pointer' key={item._id}>
      <div className='flex gap-2 item-center'>
        <input onChange={handleRadioChange} type="radio" id={item._id} name='category' value={item.name} />
        <label htmlFor={item._id}>{item.name}</label>
      </div>
      <div>( {count} )</div>
    </li>
  );
}
