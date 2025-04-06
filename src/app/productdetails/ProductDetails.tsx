'use client'
import AddBtn from '@/app/products/_components/AddBtn';
import ProductItem from '@/app/products/_components/ProductItem';
import { SingleProduct } from '@/app/products/actions/getSingleProduct';
import { Product } from '@/app/products/types/products.type';
import { displayStars } from '@/lib/rate';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState, useCallback } from 'react';
import { AllProducts } from '../products/actions/Products';

export default function ProductDetails() {
 
  const { id, catId }: { id: string, catId: string } = useParams();
  const [productobj, setproductobj] = useState<Product | null>(null);
  const [productList, setproductList] = useState<Product[]>([]);
  const [imgSrc, setImageSrc] = useState('');
  const [ind, setInd] = useState<number | null>(null);
  
  const changeSrc = (src: string, index: number) => {
    setImageSrc(src);
    setInd(index);
  };

  // Memoize the function to avoid redefinition
  const getSingleproduct = useCallback(async () => {
    const res = await SingleProduct(id);
    setproductobj(res.product);
  }, [id]);

  const getAllProducts = useCallback(async () => {
    let { products } = await AllProducts();
    products = products.filter((prod: Product) => prod.category === catId);
    setproductList(products);
  }, [catId]);

  useEffect(() => {
    getSingleproduct(); // Fetch single product when `id` changes
  }, [id, getSingleproduct]);

  useEffect(() => {
    getAllProducts(); // Fetch all products when `id` or `catId` changes
  }, [id, catId, getAllProducts]);

  return (
    <div className="container">
      <div className="flex gap-10 flex-wrap">
        <div className="md:w-1/3 w-100">
          <Image
            width={300}
            height={300}
            src={imgSrc || productobj?.imgCover || '/fallback-image.jpg'} 
            className="rounded-lg object-cover"
            alt=""
          />
          <div className="flex my-4 justify-between">
            {productobj?.images.map((img, index) => (
              <Image
                width={100}
                height={100}
                src={img}
                onClick={() => {
                  changeSrc(img, index);
                }}
                className={`rounded cursor-pointer w-[100px] ${ind === index && 'border-2 border-pink'}`}
                key={img}
                alt=""
              />
            ))}
          </div>
        </div>

        <div className="md:w-2/3 w-100">
          <h2 className="font-bold mb-3 text-xl">{productobj?.title}</h2>
          <p>{productobj?.description}</p>
          <p className="font-semibold">{productobj?.title}</p>
          <p className="text-lg text-orange-500 my-4">{displayStars(productobj?.rateAvg ?? 0)}</p>

          {productobj?.priceAfterDiscount ? (
            <div>
              <span className="text-[rgb(251,102,193)] font-semibold line-through">
                {(productobj?.price / 100).toFixed(2)}$
              </span>
              <br />
              <span className="text-[rgb(251,102,193)] font-semibold">
                {(productobj?.priceAfterDiscount / 100).toFixed(2)}$
              </span>
            </div>
          ) : (
            <p className="my-4 text-[rgb(251,102,193)] font-semibold">{(productobj?.price??0 / 100 ).toFixed(2)}$</p>
          )}

          {!productobj?.quantity ? (
            <p className="text-red-500 font-bold my-4">Sold out</p>
          ) : (
            <AddBtn product={productobj?._id} />
          )}

          <p>
            <span className="font-bold">- Stock</span> {productobj?.quantity ? <span>Available</span> : <span>Unavailable</span>}
          </p>
        </div>
      </div>

      <h2 className="my-4 font-bold text-xl">Related products</h2>
      <div className="flex flex-wrap my-5 ml-[-12px] mr-[-12px]">
        {productList.map((prod: Product) => (
          <ProductItem key={prod._id} item={prod} />
        ))}
      </div>
    </div>
  );
}
