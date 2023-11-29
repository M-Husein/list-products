'use client'

import { useState, useEffect } from "react";
import Image from 'next/image';
import { fetchApi } from "@/utils/fetchApi";
import { SkeletonCard } from "@/components/SkeletonCard";

interface Props { 
  params: { id: string } 
}

export default function Page({ params }: Props){
  const [loading, setLoading] = useState<boolean>(true);
  const [errorDetail, setErrorDetail] = useState<any>();
  const [dataDetail, setDataDetail] = useState<any>();

  useEffect(() => {
    let abortController: any;

    (async () => {
      abortController = new AbortController();

      try {
        const request = await fetchApi('https://dummyjson.com/products/' + params.id, {
          signal: abortController.signal,
        });

        if(request){
          setDataDetail(request);
        }
      } catch(e: any){
        if(e.name !== 'AbortError'){
          setErrorDetail(e.message);
        }
      } finally {
        abortController = null;
        setLoading(false);
      }
    })()

    return () => {
      if(abortController){
        abortController.abort();
      }
    }
  }, [params.id]);

  return (
    <div className="p-4">
      <div className="flex flex-row flex-wrap gap-6">
        <div className="lg_w-col-7 w-full">
          {loading ? 
            <SkeletonCard />
            :
            dataDetail && (
              <div className="w-full border border-gray-300 shadow rounded">
                <div className="p-4">
                  <h1 className="text-xl font-medium mb-2">{dataDetail.title}</h1>
                  <p>{dataDetail.description}</p>
                  <p className="mt-4">Price {dataDetail.price}</p>
                  <p>Stock {dataDetail.stock}</p>
                </div>

                {dataDetail.thumbnail && (
                  <Image
                    className="w-full aspect-video object-cover rounded-b"
                    src={dataDetail.thumbnail}
                    alt={dataDetail.title}
                    width={1027}
                    height={578}
                    priority
                  />
                )}
              </div>
            )
          }

          {!!errorDetail && (
            <div role="alert" className="border border-red-600 ronded p-4 shadow">
              {errorDetail}
            </div>
          )}
        </div>

        <div className="lg_w-col-3 w-full">
          <div className="w-full border border-gray-300 shadow rounded p-4">
            Share
          </div>
        </div>
      </div>
    </div>
  );
}
