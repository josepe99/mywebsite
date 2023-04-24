import Skills from './components/Skills';
import Facts from './components/Facts';

const About = () => {
  return (
    <>
      <section id="about" class="about">
        <div class="container">

          <div class="section-title">
            <h2>About</h2>
            <p>A highly motivated and skilled full stack developer, passionate about creating efficient and scalable web applications. Proficient in Python, JavaScript, and Dart, with a strong foundation in Next.js, Flutter, Django, and Express frameworks. Seeking a challenging opportunity to apply my diverse skillset and contribute to a team that values continuous learning and personal development.</p>
          </div>

          <div class="row">
            <div class="col-lg-4" data-aos="fade-right">
              <img src="static/img/profile-img.jpg" class="img-fluid" alt="" />
            </div>
            <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Web Developer  &amp; Mobile Developer</h3>
              <p class="fst-italic">
                Let me tell you a little more about the things I've done so far.
              </p>
              <div class="row">
                <div class="col-lg-6">
                  <ul>
                    <li><i class="bi bi-chevron-right"></i><strong>+150</strong><span>Enpoints developed</span></li>
                    <li><i class="bi bi-chevron-right"></i><strong>+500</strong><span>Commits</span></li>
                    <li><i class="bi bi-chevron-right"></i><strong>+200</strong><span>Merge requests</span></li>
                    <li><i class="bi bi-chevron-right"></i><strong>+100</strong><span>Tests runned</span></li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li><i class="bi bi-chevron-right"></i><strong>+10</strong><span>Projects participated</span></li>
                    <li><i class="bi bi-chevron-right"></i><strong>3 contributions</strong> <span>To other programmers</span></li>
                    <li><i class="bi bi-chevron-right"></i><strong></strong><span>In stackoverflow</span></li>
                    <li><i class="bi bi-chevron-right"></i><strong></strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* <!-- ======= Facts Section ======= --> */}
      <Facts />
      {/* <!-- End Facts Section --> */}

      {/* <!-- ======= Skills Section ======= --> */}
      <Skills />
      {/* <!-- End Skills Section --> */}
    </>
  )
}

export default About;