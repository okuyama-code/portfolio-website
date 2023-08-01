import About from '@/components/about';
import Intro from '@/components/intro';
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <About />
      {/* <SectionDivider />
      <Projects />
      <Skills />
      <Experience />
      <Contact /> */}
    </main>
  );
}
