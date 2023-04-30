import About from '@/app/components/About/About';
import Hero from '@/app/components/Hero/Hero';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';
import Resume from './Resume/Resume';


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

      {/* <!-- ======= Skills Section ======= --> */}
      <Skills />
      {/* <!-- End Skills Section --> */}

      {/* <!-- ======= Contact Section ======= --> */}
      <Contact />
      {/* <!-- End Contact Section --> */}

    </main>
  );
}

export default Body;