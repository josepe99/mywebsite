import { MY_NAME } from '@/app/constants';

const Hero = () => {
  return (
    <section
      id="hero"
      className="d-flex align-items-center justify-content-center min-vh-100"
    >
      <div className="hero-container text-center" data-aos="fade-in">
        <div className='mt-5 mx-5'>
          <h1>{ MY_NAME }</h1>
          <p>I&apos;m <span className="typed" data-typed-items="Student, Developer, Book reader, Photographer"></span></p>
        </div>
      </div>
    </section>
  )
}

export default Hero;