'use client'
import React, { ReactNode, useEffect, useState } from 'react';
import { AllCategories } from './api/categories';
import { Category } from './types/category.type';
import CatItem from './CatItem';
import { Product } from '../products/types/products.type';
import ProductItem from '../products/_components/ProductItem';
import Loading from '../_components/Loading';

interface CategoriesProps {
  children: ReactNode;
}

export default function Categories({ children }: CategoriesProps) {
  const [catList, setCatList] = useState<Category[]>([]);
  const [productList, setProductList] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch category data
  async function getData() {
    try {
      const { categories }: { categories: Category[] } = await AllCategories();
      setCatList(categories);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error('Error fetching categories:', error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <Loading />
  }

  return (
    <div className='container'>
      <div className='flex flex-wrap'>
        {/* Category List */}
        <div className="w-1/4">
          <div className='shadow-lg rounded-3xl p-4 mt-6'>
            <h2 className='my-3 text-xl font-bold'>Categories</h2>
            <hr />
            <ul className='list-none my-4'>
              {catList?.map((cat: Category) => (
                <CatItem fn={setProductList} item={cat} key={cat._id} />
              ))}
            </ul>
          </div>
        </div>

        {/* Product List or children content */}
        <div className="w-3/4">
          <div className='flex flex-wrap'>
            {productList.length > 0 ? (
              productList.map((prod) => <ProductItem key={prod._id} item={prod} />)
            ) : (
              children // Render children if no products are available
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
