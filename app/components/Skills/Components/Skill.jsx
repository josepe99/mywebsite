const Skill = (props) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
        <div className="icon"><i className={ props.icon }></i></div>
        <h4 className="title"><a href="">{ props.title }</a></h4>
        <p className="description">{ props.description }</p>
      </div>
    </>
  )
}

export default Skill;