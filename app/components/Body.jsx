import About from '@/app/components/About/About';
import Hero from '@/app/components/Hero';
import Resume from './Resume/Resume';
import Portafolio from './Portafolio/Portafolio';
import Services from './Services/Services';
import Contact from './Contact/Contact';


const Body = () => {
  return (
    <main id="main">
      {/* // <!-- ======= Hero Section ======= --> */}
      <Hero />
      {/* // <!-- End Hero --> */}

      {/* <!-- ======= About Section ======= --> */}
      <About />
      {/* <!-- End About Section --> */}

      {/* <!-- ======= Resume Section ======= --> */}
      <Resume />
      {/* <!-- End Resume Section --> */}

      {/* <!-- ======= Portfolio Section ======= --> */}
      <Portafolio />
      {/* <!-- End Portfolio Section --> */}

      {/* <!-- ======= Services Section ======= --> */}
      <Services />
      {/* <!-- End Services Section --> */}

      {/* <!-- ======= Contact Section ======= --> */}
      <Contact />
      {/* <!-- End Contact Section --> */}

    </main>
  );
}

export default Body;