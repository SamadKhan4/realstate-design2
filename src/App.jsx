import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Founder } from './components/Founder';
import { Specifications } from './components/Specifications';
import { Advantages } from './components/Advantages';
import { MasterLayout } from './components/MasterLayout';
import { Plots } from './components/Plots';
import { Amenities } from './components/Amenities';
import { Gallery } from './components/Gallery';
import { Connectivity } from './components/Connectivity';
import { Landmarks } from './components/Landmarks';
import { Registration } from './components/Registration';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { ScrollProgress } from './components/ui/ScrollProgress';

export function App() {
  return (
    <div className="min-h-screen w-full bg-bone font-sans text-ink">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Founder />
        <Specifications />
        <Advantages />
        <MasterLayout />
        <Plots />
        <Amenities />
        <Gallery />
        <Connectivity />
        <Landmarks />
        <Registration />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <div className="h-[64px] lg:hidden" aria-hidden="true" />
      <MobileActionBar />
    </div>);

}
