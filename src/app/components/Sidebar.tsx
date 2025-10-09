"use client";

import Link from "next/link";
import { topics } from "./navTopics";

export default function Sidebar() {
  return (
    <aside
      className="hidden md:block w-60 h-screen text-white p-6 px-4 bg-cover fixed top-0 left-0"
      style={{ backgroundImage: "linear-gradient(rgba(14, 14, 14, 0.9), rgba(0, 0, 0, 0.8)),url('/side.jpeg')",
        backgroundPosition: "38% 200%",//horizontaly and vertically 
        backgroundSize:"400%",
        backgroundRepeat:"no-repeat",    
      }}
    >
      <h2 className="text-4xl text-blue-100 font-bold  p-4 ml-4 mt-2 mb-10 font-press-start">
        
     
      </h2>

      
      <nav className="flex flex-col space-y-5 " >
        {topics.map((topic) => (
          <Link key={topic.path} 
          href={topic.path} 
          className="w-full  hover:bg-white/50  transition px-6 py-2 rounded
           glow4 text-teal-500 text-xl font-roboto-mono p-4 bg-black/5">
            
            {topic.name}
          </Link> 
        ))}
      </nav>
    </aside>
  );
}
