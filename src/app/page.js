import Hero from '@/components/home/hero';
import Services from '@/components/home/services';
import Testimonials from '@/components/home/testimonials';


export default function Home() {
  return (
    <main>
      <Hero />
      <Services /> 
      <Testimonials />
    </main>
  );
}