import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Education from '@/components/sections/Education';
import Music from '@/components/sections/Music';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden animated-gradient">
      <div className="relative">
        <Header />
        <Hero />
        <About />
        <Education />
        <Music />
      </div>
    </main>
  );
}
