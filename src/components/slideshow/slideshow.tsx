"use client"

import Image from "next/image"
import React, { useState, useEffect } from 'react';

const Slideshow = ({ images }: any) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Update the index to the next image
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000); // Change image every 2 seconds

        return () => {
            // Clear the interval when the component is unmounted
            clearInterval(interval);
        };
    }, [images]);

  return (
    <>
        <Image src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="w-full fade" priority />
    </>
  );
};

export default Slideshow;
