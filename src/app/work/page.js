"use client"; 
import { BlockCard } from '@/components/block-card';
import store from '@/database';
import React from 'react';

export default function Pages() {

  return (
    <main className="mb-40 pt-20 lg:pt-24 lg:mb-0">
      <h1 className="text-5xl text-center">Work</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mt-10 px-[8rem]'>
        {store.projects.map((individualProject, index) => {
          return (
            <BlockCard key={"project" + index} content={{
              title: individualProject.name, 
              collab: individualProject.collab,
              thumbnail: individualProject.image,
              imageAlt: individualProject.imageAlt,
              link: individualProject.urlSlug
            }}/>
          )
        })}
      </div>
    </main>
  );
  
}