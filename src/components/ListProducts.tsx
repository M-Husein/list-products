'use client'

import { useState, useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { fetchApi } from "@/utils/fetchApi";
import { SkeletonCard } from "@/components/SkeletonCard";

export const ListProducts = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [errorGetList, setErrorGetList] = useState<any>();
  const [dataProducts, setDataProducts] = useState<any>();

  useEffect(() => {
    let abortController: any;

    (async () => {
      abortController = new AbortController();

      try {
        const request = await fetchApi('https://dummyjson.com/products', {
          signal: abortController.signal,
        });

        if(request){
          setDataProducts(request);
        }
      } catch(e: any){
        if(e.name !== 'AbortError'){
          setErrorGetList(e.message);
        }
      } finally {
        abortController = null;
        setLoading(false);
      }
    })();

    return () => {
      if(abortController){
        abortController.abort();
      }
    }
  }, []);

  const renderLoader = [1, 2, 3, 4].map((item: number) => 
    <li
      key={item} 
      className="flex flex-col lg_w-col-4 w-full"
    >
      <SkeletonCard />
    </li>
  );

  if(errorGetList){
    return (
      <div role="alert" className="border border-red-600 ronded p-4 shadow">
        {errorGetList}
      </div>
    );
  }

  return (
    <div className="p-4">
      <ul className="flex flex-wrap gap-4">
        {loading ? 
          renderLoader
          :
          (dataProducts?.products || []).map((item: any) =>
            <li
              key={item.id}
              className="flex flex-col lg_w-col-4 w-full border border-gray-300 shadow rounded"
            >
              <div className="py-2 px-4 flex flex-col h-full">
                <h1 className="text-lg font-medium">
                  <Link href={"/product/" + item.id} className="outline-none focus_ring hover_text-sky-600">
                    {item.title}
                  </Link>
                </h1>
                <p className="text-sm my-2 line-clamp-2" title={item.description}>
                  {item.description}
                </p>
                <p className="text-sm mt-auto">Price {item.price}</p>
              </div>

              {item.thumbnail && (
                <Link href={"/product/" + item.id} className="outline-none focus_ring rounded-b">
                  <Image
                    className="w-full aspect-video object-cover rounded-b"
                    src={item.thumbnail}
                    alt={item.title}
                    width={358}
                    height={201}
                    priority
                  />
                </Link>
              )}
            </li>
          )
        }
      </ul>
    </div>
  );
}
