'use client'
import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export function BlockCard({content}) {

  return (
      <Link href={'work/' + content.link} className="max-w-[350px] h-fit rounded-xl bg-white cursor-pointer relative m-auto mb-8 shadow-md dark:bg-gray-800 dark:border-gray-700">
        
        <div className="h-[350px] overflow-hidden rounded-t-xl">
          <Image className='object-cover h-full w-full' src={content.thumbnail} alt={content.imageAlt} />
        </div>

        <div class="absolute top-0 left-0 w-full h-full bg-[#66e2ea] opacity-0 transition-opacity duration-200 ease-linear rounded-xl"></div>

        <div class="p-4">
          <h4 class="font-semibold text-gray-900 dark:text-white">{content.title}</h4>
          <h5 class="text-gray-700 dark:text-gray-400 mt-2">{content.collab}</h5>
          <a href={content.link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3">
            Read more
          </a>
        </div>

      </Link>

  )
}
