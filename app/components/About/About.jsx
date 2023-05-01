const aboutDescription = "A highly motivated and skilled full stack developer, passionate about creating efficient and scalable web applications. Proficient in Python, JavaScript, and Dart, with a strong foundation in Next.js, Flutter, Django, and Express frameworks. Seeking a challenging opportunity to apply my diverse skillset and contribute to a team that values continuous learning and personal development."
const firstColumn = [
  {strong: "+150", span: "Enpoints developed"},
  {strong: +500,span: "Commits"},
  {strong: "+200",span: "Merge requests"},
  {strong: "+100", span: "Test runned"}
]

const secondColumn = [
  {strong:"+10",span:"Projects participated"},
  {strong:"3 contributions", span:"To other programmers"},
  {strong: null, span:"In stackoverflow"},
  {strong: null, span:"Available"}
]
const About = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>About</h2>
            <p>{ aboutDescription }</p>
          </div>
          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src="static/img/profile-img.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Web Developer  &amp; Mobile Developer</h3>
              <p className="fst-italic">
                Let me tell you a little more about the things I've done so far.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    {firstColumn.map(row => (
                      <li>
                        <i className="bi bi-chevron-right"></i>
                        <strong>{ row.strong }</strong>
                        <span>{ row.span }</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    {secondColumn.map(row => (
                      <li>
                        <i className="bi bi-chevron-right"></i>
                        <strong>{ row.strong }</strong>
                        <span>{ row.span }</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default About;