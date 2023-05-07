import Script from 'next/script'

const Scripts = () => {
  return (
    <>
      {/* <!-- Vendor JS Files --> */}
      <Script src="/static/vendor/purecounter/purecounter_vanilla.js"></Script>
      <Script src="/static/vendor/aos/aos.js"></Script>
      <Script src="/static/vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
      <Script src="/static/vendor/glightbox/js/glightbox.min.js"></Script>
      <Script src="/static/vendor/isotope-layout/isotope.pkgd.min.js"></Script>
      <Script src="/static/vendor/swiper/swiper-bundle.min.js"></Script>
      <Script src="/static/vendor/typed.js/typed.min.js"></Script>
      <Script src="/static/vendor/waypoints/noframework.waypoints.js"></Script>
      <Script src="/static/vendor/php-email-form/validate.js"></Script>

      {/* <!-- Template Main JS File --> */}
      <Script   src="/static/js/main.js"></Script>
    </>
  );
}

export default Scripts;