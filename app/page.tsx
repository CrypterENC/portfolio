"use client";

// import { navItems } from "@/data";

import Hero from "@/components/Hero";
import About from "@/components/About";
import RecentProjects from "@/components/RecentProjects";
// import Grid from "@/components/Grid";

import { FloatingNav } from "@/components/ui/FloatingNav";

import Experience from "@/components/Experience";
import { navItems } from "@/data";
import Grid from "@/components/Grid";



// import Footer from "@/components/Footer";
// import Clients from "@/components/Clients";
// import Approach from "@/components/Approach";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Grid />
        <RecentProjects />
        <Experience />
      </div>
    </main>
  );
}
