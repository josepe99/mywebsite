const ResumeItem = (props) =>{
  return (
    <>
      <h3 className="resume-title">{ props.title }</h3>
      <div className="resume-item">
        <h4>{ props.subtitle }</h4>
        <h5>{ props.time }</h5>
        <p><em>{ props.place }</em></p>
        <p>{ props.resume }</p>
        { props.items && (
          <ul>
            { props.items.map(item => (
              <li key={item}>{ item }</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default ResumeItem;