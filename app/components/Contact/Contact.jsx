import Form from "./components/Form";

const Contact = () => {
  const iframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57688.378189326846!2d-57.51892084999999!3d-25.35376125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945dae8100efafab%3A0x5ac02336ec1498c4!2sSan%20Lorenzo!5e0!3m2!1sen!2spy!4v1683671196554!5m2!1sen!2spy"
  
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
        </div>
        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>San Lorenzo - Central, Paraguay</p>
              </div>
              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>josepedrozo99@gmail.com</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>WathsApp:</h4>
                <p>+595 995 399056</p>
              </div>
              <iframe src={iframeSrc} frameBorder="0" style={{border:0, width: "100%", height: 290}} allowFullScreen></iframe>
            </div>
          </div>
          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <Form />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;