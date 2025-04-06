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
      <div className='flex ml-[-12px] mr-[-12px] gap-6'>
        {/* Category List */}
        <div className="lg:w-1/4  mt-6 hidden lg:block">
          <div className='shadow-lg p-4 rounded-3xl'>
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
        <div className="lg:w-3/4 w-full justify-center">
          <div className='flex flex-wrap'>
            {productList.length > 0 ? (
              productList.map((prod) => <div key={prod._id} className="lg:w-1/3  sm:w-1/2 w-full p-3"><ProductItem  item={prod} /></div>)
            ) : (
              children // Render children if no products are available
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
