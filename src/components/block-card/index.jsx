import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export function BlockCard({content}) {

  return (
      <Link href={'work/' + content.link} className="max-w-[350px] h-fit rounded-xl bg-white cursor-pointer relative mb-8 shadow-md dark:bg-black">
        
        <div className="h-[350px] overflow-hidden rounded-t-xl">
          <Image className='object-cover h-full w-full' src={content.thumbnail} alt={content.imageAlt} />
        </div>

        <div class="absolute top-0 left-0 w-full h-full bg-[#66e2ea] opacity-0 transition-opacity duration-200 ease-linear rounded-xl"></div>

        <div class="p-4">
          {/*<h4 class="font-semibold text-gray-900 dark:text-white">{content.title}</h4>*/}
          <h5 class="text-gray-700 dark:text-gray-400 tracking-[.3px] text-[14px]">{content.title}</h5>
          <a href={content.link} className="inline-flex items-center text-sm font-medium text-center text-gray-700 dark:text-gray-400 mt-2">
          &#8594;
          </a>
        </div>

      </Link>

  )
}
