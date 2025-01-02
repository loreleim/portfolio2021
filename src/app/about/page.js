"use client"; 
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import github from "../../images/github.svg";
import linkedin from "../../images/linkedin.svg";

export default function About() {

  var LikeList = [
      "posca markers",
      "spreadsheets",
      "topographic maps",
      "azuki beans",
      "pogs",
      "menpachi",
      "mini meat jun",
      "hinode rice",
      "chicago pigeons",
      "simple green",
      "baby dill pickles",
    ];

    const [selectedItems, setSelectedItems] = useState([]);

    // Function to get a random item for a specific index
    const getRandomItem = (index) => {
      // Filter out already selected items in selectedItems except for the clicked index
      const availableItems = LikeList.filter(item => 
        !selectedItems.includes(item) || selectedItems[index] === item
      );
      
      if (availableItems.length === 0) return; // No more items to select
  
      // Get a random item from the available items
      const randomItem = availableItems[Math.floor(Math.random() * availableItems.length)];
  
      // Update the state with the newly selected item at the specific index
      setSelectedItems(prev => {
        const newSelectedItems = [...prev];
        newSelectedItems[index] = randomItem; // Replace only the clicked index
        return newSelectedItems;
      });
    };
  
    // for useEffect to not load duplicates
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
      }
      return array;
    };

    // useEffect to load unique random items on component mount
    useEffect(() => {
      const shuffledList = shuffleArray([...LikeList]);
      setSelectedItems(shuffledList.slice(0, 3));
    }, []);

  return (
    <div className="flex justify-center p-10 lg:pt-40">

      <section className='md:max-w-[800px]'>
          <div>
          <h2 className="text-5xl">Howzit!</h2>
          <p className='text-2xl'>
            I'm Lorelei, an Interaction Designer from Oʻahu, HI. <br/> I nurture cross
            platform experiences through the lens of human centered design.
          </p>

          <h2 className="text-5xl mt-10">
            I love{" "}
            <span role="img" aria-label="heart">
              &#128150;
            </span>
          </h2>
          {/* Random Clicker */}
          <div className='likeContainer block md:flex mb-10'>
            <div className='likeText me-2' id='itemOne' onClick={() => { getRandomItem(0); console.log(selectedItems); }}>
              {selectedItems[0]},
            </div>
            <div className='likeText me-2' id='itemTwo' onClick={() => { getRandomItem(1); console.log(selectedItems); }}>
              {selectedItems[1]},
            </div>
            <div className='likeText' id="itemThree" onClick={() => { getRandomItem(2); console.log(selectedItems); }}>
              &amp; {selectedItems[2]}!
            </div>
          </div>

          <div className='flex align-center gap-4'>
            <a
              className='transition-opacity hover:opacity-10 hover:ease-in-out'
              href="https://www.linkedin.com/in/lorelei-miyamura/"
              onClick={(event) => {
                event.preventDefault();
                window.open("https://www.linkedin.com/in/lorelei-miyamura/");
              }}
            >
              <Image className='filter dark:invert' src={linkedin} alt="link to Lorelei Miyamura's Linkedin profile"/>
            </a>
            <a
              className='transition-opacity hover:opacity-10 hover:ease-in-out'
              href="https://github.com/loreleim"
              onClick={(event) => {
                event.preventDefault();
                window.open("https://github.com/loreleim");
              }}
            >
              <Image className='filter dark:invert' src={github} alt="link to Lorelei Miyamura's Github profile"/>
            </a>
          </div>
          </div>
        </section>
    </div>
  );
  
}