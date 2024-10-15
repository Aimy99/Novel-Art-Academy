"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function Webinars() {

    const featuredWebinars = [
      {
        title: 'Mastering the Art of Epic Storytelling',
        description: 'Unlock the secrets to crafting unforgettable epic stories that captivate readers and transport them to new worlds.',
        slug: 'mastering-epic-storytelling',
        isFeatured: true,
      },
      {
        title: 'The Craft of Character Development',
        description: 'Learn how to create compelling characters that resonate with your audience.',
        slug: 'craft-of-character-development',
        isFeatured: true,
      },
      {
        title: 'Plot Structure Mastery',
        description: 'Explore advanced techniques for structuring plots that keep readers engaged.',
        slug: 'plot-structure-mastery',
        isFeatured: true,
      },
      {
        title: 'World-Building Essentials',
        description: 'Dive into the art of creating immersive worlds for your epic stories.',
        slug: 'world-building-essentials',
        isFeatured: true,
      },
      // Added two more webinars
      {
        title: 'Dialogue That Dazzles',
        description: 'Master the art of writing authentic dialogue that brings your characters to life.',
        slug: 'dialogue-that-dazzles',
        isFeatured: true,
      },
      {
        title: 'Editing for Impact',
        description: 'Learn essential editing techniques to polish your epic stories to perfection.',
        slug: 'editing-for-impact',
        isFeatured: true,
      }
      
      ];
      
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
      <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">FEATURED WEBINARS</h2>
      <p className="mt-2 text-2xl leading-8 font-bold tracking-tight text-gray-200 sm:text-4xl">Enhance Your Musical Journey</p>
        <div className="text-center"></div>
        <div className="mt10">
        <HoverEffect
          items={featuredWebinars.map(webinar => (
            {
              title: webinar.title,
              description: webinar.description,
              link: '/'
            }
          ))}
          />
        </div>
        <div className="mt-10 text-center">
        <Link href={"/"}
          className="px-4 py-3
           rounded border border-neutral-600 text-white bg-gradient-to-r from-purple-500 to-indigo-500 hover:bg-gray-100 transition duration-200"
          >
            View All webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Webinars;
