import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";


function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="teal" />
      <div className="p-6 relative z-10 w-full text-center">
        <h1 className="mt-40 md:mt-0 text-5xl md:text-7xl font-semibold bg-clip-text text-transparent  bg-gradient-to-b from-purple-300 to-white">
        Novel Art Academy 
        
        </h1>
        <h2 className="mt-2 text-3xl md:text-4xl font-serif bg-clip-text text-transparent bg-gradient-to-b from-purple-200 to-white">The Stories Blueprint</h2>
        <p className="mt-5 font-serif text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Discover the art of storytelling with our expertly crafted courses.
          Learn narrative construction, character development, and emotional
          depth to captivate your audience. Join us and transform your stories
          into powerful tapestries of imagination and impact.
        </p>
        <div className="mt-4">
          <Link href={"/courses"}>
            <Button 
            borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">Explore Courses</Button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
