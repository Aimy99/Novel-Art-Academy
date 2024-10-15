"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const studentReviews = [
  {
    quote: "This course transformed my ability to connect with my audience. I never knew storytelling could be so powerful!",
    name: "Emily Johnson",
    title: "Published Author",
  },
  {
    quote: "The techniques I learned helped me convey my ideas more vividly. I now feel confident presenting my work.",
    name: "David Chen",
    title: "Book Marketing Specialist",
  },
  {
    quote: "I discovered the magic of storytelling and how it can elevate any presentation. Highly recommend!",
    name: "Sofia Martinez",
    title: "Literary Agent",
  },
  {
    quote: "The interactive exercises made learning fun and engaging. I’ve never been so excited to share my stories!",
    name: "Michael Lee",
    title: "Book Designer",
  },
  {
    quote: "This training opened my eyes to the emotional connection that stories can create. It was a game-changer for my career!",
    name: "Aisha Patel",
    title: "Publishing Editor",
  },
  {
    quote: "I loved every moment of this course! It gave me the tools I needed to craft compelling narratives.",
    name: "James Roberts",
    title: "Editorial Consultant",
  },
  
];

function Testimonials() {
  return (
    <div className="h-[20rem] w-full dark:bg-gray-950 dark:bg-dot-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-center text-3xl font-bold mb-8 z-10">Hear Our Success Stories</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 ">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={studentReviews}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
