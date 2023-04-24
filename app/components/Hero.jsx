import MY_NAME from '@/app/constants';

const Hero = () => {
  return (
    <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
      <div class="hero-container" data-aos="fade-in">
        <h1>{MY_NAME}</h1>
        <p>I'm <span class="typed" data-typed-items="Student, Developer, Book reader, Photographer"></span></p>
      </div>
    </section>
  )
}

export default Hero;